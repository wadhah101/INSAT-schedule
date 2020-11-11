import { PrismaClient } from '@prisma/client'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { TimeTableData } from '../components/pages/home/TimeTable'
import BasePage from '../components/shared/BasePage'
import { gl3Schedule } from '../data/gl3-2021-2020/schedule.data'
import { SchoolSession, SchoolSessionView } from '../models/schoolSession.model'

interface Props {
  timeTableData: TimeTableData[]
  dd
}

export const Home: NextPage<Props> = () => {
  return <BasePage>{/* <TimeTable data={dd} /> */}</BasePage>
}

export const getStaticProps: GetStaticProps = async (_context) => {
  // const group = 1
  // const week = 'A'

  const prisma = new PrismaClient()

  const transformer = (s: SchoolSession): SchoolSessionView[] => {
    return s.time.map((e) => ({
      time: e,
      sessionType: s.sessionType,
      subject: s.subject,
    }))
  }

  const faltenedData = gl3Schedule.flatMap(transformer)

  const times = faltenedData.map((e) => e.time)

  for (let i = 0; i < times.length; i++) {
    const element = times[i]

    const startIdArr = await prisma.schoolPeriod.findMany({
      where: { hour: element.start.hour, minute: element.start.minute },
    })

    const endIdArr = await prisma.schoolPeriod.findMany({
      where: { hour: element.end.hour, minute: element.end.minute },
    })

    await prisma.schoolTime.create({
      data: {
        week: element.week,
        group: element.group,
        day: { connect: { name: element.day } },
        start: {
          connectOrCreate: {
            where: { id: startIdArr.length > 1 ? startIdArr[0].id : -1 },
            create: {
              hour: element.start.hour,
              minute: element.start.minute ?? 0,
            },
          },
        },

        end: {
          connectOrCreate: {
            where: { id: endIdArr.length > 1 ? endIdArr[0].id : -1 },
            create: { hour: element.end.hour, minute: element.end.minute ?? 0 },
          },
        },
      },
    })
  }

  // const _data: TimeTableData[] = days.map((e) => ({
  //   day: e,
  //   schoolSessionViews: faltenedData
  //     .filter((el) => el.time.day === e)
  //     .filter((el) => (el.time.group ? el.time.group === group : true))
  //     .filter((el) => (el.time.week ? el.time.week === week : true)),
  // }))

  // const data = JSON.parse(JSON.stringify(_data))

  return {
    props: {},
  }
}

export default Home

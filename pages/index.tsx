import { PrismaClient } from '@prisma/client'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import TimeTable from '../components/pages/home/TimeTable'
import BasePage from '../components/shared/BasePage'
import { transformer } from '../lib/functions.utils'
import { TimeTableData } from '../models/scholSession.full.model'

const group = 1
const week = 'A'

interface Props {
  timeTableData: TimeTableData[]
}

export const Home: NextPage<Props> = ({ timeTableData }) => {
  return (
    <BasePage>
      <TimeTable data={timeTableData} />
    </BasePage>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (_context) => {
  const prisma = new PrismaClient()

  // get days
  const days = await prisma.weekDay.findMany({})

  // get schedule data
  const data = await prisma.schoolSession.findMany({
    include: {
      SchoolTime: { include: { day: true, start: true, end: true } },
      subject: true,
      Professor: true,
      sessionType: true,
    },
  })

  const faltenedData = data.flatMap(transformer)

  const timeTableData: TimeTableData[] = days.map((e) => ({
    day: e,
    schoolSessionViews: faltenedData
      .filter((el) => el.time.day.id === e.id)
      .filter((el) => (el.time.group ? el.time.group === group : true))
      .filter((el) => (el.time.week ? el.time.week === week : true)),
  }))

  return {
    props: {
      timeTableData,
    },
  }
}

export default Home

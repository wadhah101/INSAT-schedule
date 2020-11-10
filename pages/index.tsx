import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import TimeTable, { TimeTableData } from '../components/pages/home/TimeTable'
import BasePage from '../components/shared/BasePage'
import { gl3Schedule } from '../data/gl3-2021-2020/schedule.data'
import { SchoolSession, SchoolSessionView } from '../models/schoolSession.model'
import { WeekDay } from '../models/WeekDay.enum'
import { PrismaClient } from '@prisma/client'
import {
  riathRobenna,
  salwaBenYahia,
  marouaKessinti,
  jem3i,
  demergeEmir,
  jareyaMouna,
  kechicheMohamed,
  chamkhiMajek,
  soniaBouzidi,
} from '../data/professors.data'

interface Props {
  timeTableData: TimeTableData[]
  dd
}

export const Home: NextPage<Props> = ({ dd }) => {
  return (
    <BasePage>
      <TimeTable data={dd} />
    </BasePage>
  )
}

export const getStaticProps: GetStaticProps = async (_context) => {
  const prisma = new PrismaClient()

  const prs = [
    riathRobenna,
    salwaBenYahia,
    marouaKessinti,
    jem3i,
    demergeEmir,
    jareyaMouna,
    kechicheMohamed,
    chamkhiMajek,
    soniaBouzidi,
  ]

  for (let index = 0; index < prs.length; index++) {
    const element = prs[index]
    await prisma.professor.create({
      data: {
        name: element.name,
      },
    })
  }

  const group = 1
  const week = 'A'

  const days: WeekDay[] = [
    WeekDay.monday,
    WeekDay.tuesday,
    WeekDay.wednesday,
    WeekDay.thirsday,
    WeekDay.friday,
    WeekDay.saturday,
  ]

  const transformer = (s: SchoolSession): SchoolSessionView[] => {
    return s.time.map((e) => ({
      time: e,
      sessionType: s.sessionType,
      subject: s.subject,
    }))
  }

  const faltenedData = gl3Schedule.flatMap(transformer)

  const _data: TimeTableData[] = days.map((e) => ({
    day: e,
    schoolSessionViews: faltenedData
      .filter((el) => el.time.day === e)
      .filter((el) => (el.time.group ? el.time.group === group : true))
      .filter((el) => (el.time.week ? el.time.week === week : true)),
  }))

  const data = JSON.parse(JSON.stringify(_data))

  return {
    props: { dd: data },
  }
}

export default Home

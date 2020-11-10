import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { TimeTableData } from '../components/pages/home/TimeTable'
import BasePage from '../components/shared/BasePage'

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

  // const transformer = (s: SchoolSession): SchoolSessionView[] => {
  //   return s.time.map((e) => ({
  //     time: e,
  //     sessionType: s.sessionType,
  //     subject: s.subject,
  //   }))
  // }

  // const faltenedData = gl3Schedule.flatMap(transformer)

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

import { PrismaClient } from '@prisma/client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import TimeTable from '../../components/pages/home/TimeTable'
import ScheduleSwiper from '../../components/pages/schedule'
import BasePage from '../../components/shared/BasePage'
import { getSchedule } from '../../lib/functions.utils'
import { TimeTableData } from '../../models/scholSession.full.model'

interface Props {
  timeTableDataA: TimeTableData[]
  timeTableDataB: TimeTableData[]
}

export const schedules: NextPage<Props> = ({
  timeTableDataA,
  timeTableDataB,
}) => {
  return (
    <BasePage>
      <ScheduleSwiper>
        <TimeTable data={timeTableDataA} />
        <TimeTable data={timeTableDataB} />
      </ScheduleSwiper>
    </BasePage>
  )
}

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  return {
    paths: [{ params: { name: 'GL-3-1' } }, { params: { name: 'GL-3-2' } }],
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps<Props, { name: string }> = async (
  ctx
) => {
  const prisma = new PrismaClient()

  const { name } = ctx.params
  const [abbreviation, levelString, groupString] = name.split('-')

  const level = Number.parseInt(levelString)
  const group = Number.parseInt(groupString)

  if (!level) throw 'level is not a number'
  if (!group) throw 'group is not a number'

  const reqA = getSchedule(prisma)({ level, abbreviation }, group, 'A').catch(
    (e) => {
      console.error(e)
      return []
    }
  )

  const reqB = getSchedule(prisma)({ level, abbreviation }, group, 'B').catch(
    (e) => {
      console.error(e)
      return []
    }
  )
  return {
    props: {
      timeTableDataA: await reqA,
      timeTableDataB: await reqB,
    },
  }
}

export default schedules

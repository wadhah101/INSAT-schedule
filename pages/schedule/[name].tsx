import { PrismaClient } from '@prisma/client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import TimeTableContainer from '../../components/pages/schedule/TimeTableContainer'
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
      <TimeTableContainer A={timeTableDataA} B={timeTableDataB} />
    </BasePage>
  )
}

export const getStaticPaths: GetStaticPaths<{ name: string }> = async () => {
  const prisma = new PrismaClient()
  const data = await prisma.filiereWithLevel.findMany({
    include: { filiere: true },
  })

  const paths = data.flatMap((e) =>
    new Array(e.groupCount).fill(0).map((_, ind) => ({
      params: { name: `${e.filiere.abbreviation}-${e.level}-${ind + 1}` },
    }))
  )

  return {
    paths,
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

  const reqA = getSchedule(prisma)(
    { level, abv: abbreviation },
    group,
    'A'
  ).catch((e) => {
    console.error(e)
    return []
  })

  const reqB = getSchedule(prisma)(
    { level, abv: abbreviation },
    group,
    'B'
  ).catch((e) => {
    console.error(e)
    return []
  })
  return {
    props: {
      timeTableDataA: await reqA,
      timeTableDataB: await reqB,
    },
  }
}

export default schedules

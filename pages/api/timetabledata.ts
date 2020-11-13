import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  FullSchoolSession,
  SchoolSessionPureData,
  TimeTableData,
} from '../../models/scholSession.full.model'

const transformer = (s: FullSchoolSession): SchoolSessionPureData[] =>
  s.SchoolTime.map((e) => ({
    time: {
      ...e,
      start: e.start.getTime(),
      end: e.end.getTime(),
    },
    sessionType: s.sessionType,
    subject: s.subject,
    id: s.id,
  }))

export default async (
  req: NextApiRequest,
  res: NextApiResponse<TimeTableData[] | Error>
): Promise<void> => {
  if (process.env.NODE_ENV !== 'development') {
    res.status(500)
    return
  }

  const { query } = req

  const { level, abv, group, week } = query

  if (!(level && abv && group && week)) {
    res.status(403).json({ name: 'Missing qurey', message: '' })
  }

  if (week != 'A' && week != 'B') {
    res.status(403).json({ name: 'Wrong input', message: 'week not A or B' })
  }

  const prisma = new PrismaClient()
  // get days from db
  const days = await prisma.weekDay.findMany({})

  // get schedule data from db
  const rawData = await prisma.schoolSession.findMany({
    include: {
      SchoolTime: { include: { day: true } },
      subject: true,
      Professor: true,
      sessionType: true,
    },
    where: {
      subject: {
        filiereWithLevel: {
          level: Number(level),
          filiere: { abbreviation: String(abv) },
        },
      },
    },
  })

  const faltenedData = rawData
    .flatMap(transformer)
    .filter((el) => (el.time.group ? el.time.group === Number(group) : true))
    .filter((el) => (el.time.week ? el.time.week === week : true))

  const timeTableData: TimeTableData[] = days.map((e) => ({
    day: e,
    schoolSessionViews: faltenedData.filter((el) => el.time.day.id === e.id),
  }))

  res.status(200).json(timeTableData)
}

import { PrismaClient } from '@prisma/client'
import {
  FullSchoolSession,
  SchoolSessionPureData,
  TimeTableData,
} from '../models/scholSession.full.model'

export const transformer = (s: FullSchoolSession): SchoolSessionPureData[] =>
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

export const getSchedule = (prisma: PrismaClient) => async (
  f: { abbreviation: string; level: number },
  group: number,
  week: 'A' | 'B'
): Promise<TimeTableData[]> => {
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
          level: f.level,
          filiere: { abbreviation: f.abbreviation },
        },
      },
    },
  })

  const faltenedData = rawData
    .flatMap(transformer)
    .filter((el) => (el.time.group ? el.time.group === group : true))
    .filter((el) => (el.time.week ? el.time.week === week : true))

  const timeTableData: TimeTableData[] = days.map((e) => ({
    day: e,
    schoolSessionViews: faltenedData.filter((el) => el.time.day.id === e.id),
  }))

  return timeTableData
}

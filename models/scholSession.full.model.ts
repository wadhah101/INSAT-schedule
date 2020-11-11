import {
  SchoolSession,
  SchoolTime,
  SchoolPeriod,
  Subject,
  Professor,
  SessionType,
  WeekDay,
} from '@prisma/client'

export declare type FullSchoolSession = SchoolSession & {
  SchoolTime: (SchoolTime & {
    day: WeekDay
    start: SchoolPeriod
    end: SchoolPeriod
  })[]
  subject: Subject
  Professor: Professor
  sessionType: SessionType
}

import {
  SchoolSession,
  SchoolTime,
  Subject,
  Professor,
  SessionType,
  WeekDay,
} from '@prisma/client'

export declare type FullSchoolSession = SchoolSession & {
  SchoolTime: (SchoolTime & {
    day: WeekDay
  })[]
  subject: Subject
  Professor: Professor
  sessionType: SessionType
}

export declare type SchoolSessionPureData = {
  time: Omit<Omit<SchoolTime, 'start'>, 'end'> & {
    day: WeekDay
    start: number
    end: number
  }
  sessionType: SessionType
  subject: Subject
  id: number
}

export declare type TimeTableData = {
  day: WeekDay
  schoolSessionViews: SchoolSessionPureData[]
}

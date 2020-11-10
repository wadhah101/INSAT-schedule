import { WeekDay } from './WeekDay.enum'
import { SessionType } from './session.enum.model'
import { Subject } from './subject.model'
import { Dayjs } from 'dayjs'
import { Professer } from './professor.model'

export interface SchoolTime {
  day: WeekDay
  start: Dayjs
  end: Dayjs
  group?: number
  week?: 'A' | 'B'
}

export interface SchoolSession {
  time: SchoolTime[]
  subject: Subject
  professer: Professer
  sessionType: SessionType
}

export interface SchoolSessionView {
  time: SchoolTime
  sessionType: SessionType
  subject: Subject
}

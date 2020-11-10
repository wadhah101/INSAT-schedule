import { WeekDay } from './WeekDay.enum'
import { SessionType } from './session.enum.model'
import { Subject } from './subject.model'
import { Professer } from './professor.model'

export interface SchoolTime {
  day: WeekDay
  start: { hour: number; minute?: number }
  end: { hour: number; minute?: number }
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

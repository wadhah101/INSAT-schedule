import { SchoolSession } from './schoolSession.model'
import { WeekDay } from './WeekDay.enum'
export interface SchoolDay {
  weekDay: WeekDay
  sessions: SchoolSession[]
}

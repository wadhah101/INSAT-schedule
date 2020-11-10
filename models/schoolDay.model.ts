import { Session } from './session.model'
import { WeekDay } from './WeekDay.enum'
export interface SchoolDay {
  weekDay: WeekDay
  sessions: Session[]
}

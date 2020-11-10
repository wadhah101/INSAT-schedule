import { SessionType } from './session.enum.model'
import { Subject } from './subject.model'
import { Dayjs } from 'dayjs'
import { Professer } from './professor.model'
export interface Session {
  time: {
    start: Dayjs
    end: Dayjs
  }
  subject: Subject
  professer: Professer
  sessionType: SessionType
}

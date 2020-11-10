import objectSupport from 'dayjs/plugin/objectSupport'
import { riathRobenna } from './../professors.data'
import { complexiteAlgorithme } from './../subjects.data'
import { WeekDay } from '../../models/WeekDay.enum'
import { SchoolDay } from './../../models/schoolDay.model'
import { SessionType } from '../../models/session.enum.model'
import dayjs from 'dayjs'

const dayFactory = dayjs.unix(0)

dayjs.extend(objectSupport)

export const monday: SchoolDay = {
  weekDay: WeekDay.monday,
  sessions: [
    {
      time: {
        start: dayFactory.set({ hour: 9, minute: 45 }),
        end: dayFactory.set({ hour: 11, minute: 15 }),
      },
      subject: complexiteAlgorithme,
      professer: riathRobenna,
      sessionType: SessionType.cours,
    },
  ],
}

import objectSupport from 'dayjs/plugin/objectSupport'
import {
  marouaKessinti,
  riathRobenna,
  salwaBenYahia,
} from './../professors.data'
import { complexiteAlgorithme, jee } from './../subjects.data'
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
      subject: jee,
      professer: salwaBenYahia,
      sessionType: SessionType.cours,
    },
    {
      time: {
        start: dayFactory.set({ hour: 11, minute: 30 }),
        end: dayFactory.set({ hour: 13, minute: 0 }),
      },
      subject: complexiteAlgorithme,
      professer: riathRobenna,
      sessionType: SessionType.cours,
    },

    {
      time: {
        start: dayFactory.set({ hour: 14, minute: 0 }),
        end: dayFactory.set({ hour: 17, minute: 15 }),
      },
      subject: jee,
      professer: marouaKessinti,
      sessionType: SessionType.tp,
    },
  ],
}

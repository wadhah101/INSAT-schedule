import { SchoolSession } from './../../models/schoolSession.model'
import objectSupport from 'dayjs/plugin/objectSupport'
import {
  demergeEmir,
  jareyaMouna,
  jem3i,
  marouaKessinti,
  riathRobenna,
  salwaBenYahia,
} from './../professors.data'
import {
  architectureMat,
  complexiteAlgorithme,
  jee,
  uml,
  unix,
} from './../subjects.data'
import { SessionType } from '../../models/session.enum.model'
import dayjs from 'dayjs'
import { WeekDay } from '../../models/WeekDay.enum'

const dayFactory = dayjs.unix(0)

dayjs.extend(objectSupport)

const gl3Cours: SchoolSession[] = [
  {
    time: [
      {
        day: WeekDay.monday,
        start: dayFactory.set({ hour: 9, minute: 45 }),
        end: dayFactory.set({ hour: 11, minute: 15 }),
      },
    ],
    subject: jee,
    professer: salwaBenYahia,
    sessionType: SessionType.cours,
  },
  {
    time: [
      {
        day: WeekDay.monday,
        start: dayFactory.set({ hour: 11, minute: 30 }),
        end: dayFactory.set({ hour: 13, minute: 0 }),
      },
    ],
    subject: complexiteAlgorithme,
    professer: riathRobenna,
    sessionType: SessionType.cours,
  },

  // base niveau
  {
    time: [
      {
        day: WeekDay.thirsday,
        start: dayFactory.set({ hour: 8, minute: 0 }),
        end: dayFactory.set({ hour: 9, minute: 30 }),
      },
    ],
    subject: architectureMat,
    professer: demergeEmir,
    sessionType: SessionType.cours,
  },
]

const gl3TP: SchoolSession[] = [
  // jee
  {
    time: [
      {
        day: WeekDay.thirsday,
        group: 1,
        start: dayFactory.set({ hour: 14, minute: 0 }),
        end: dayFactory.set({ hour: 17 }),
      },
      {
        day: WeekDay.monday,
        group: 2,
        start: dayFactory.set({ hour: 14, minute: 0 }),
        end: dayFactory.set({ hour: 17 }),
      },
    ],
    subject: jee,
    professer: marouaKessinti,
    sessionType: SessionType.tp,
  },
  // jee

  // unix
  {
    time: [
      {
        day: WeekDay.monday,
        group: 1,
        start: dayFactory.set({ hour: 14, minute: 0 }),
        end: dayFactory.set({ hour: 18 }),
      },
      {
        day: WeekDay.thirsday,
        group: 2,
        start: dayFactory.set({ hour: 14, minute: 0 }),
        end: dayFactory.set({ hour: 18 }),
      },
    ],
    subject: unix,
    professer: jem3i,
    sessionType: SessionType.tp,
  },
  // unix

  // uml
  {
    time: [
      {
        day: WeekDay.thirsday,
        group: 1,
        week: 'A',
        start: dayFactory.set({ hour: 9, minute: 45 }),
        end: dayFactory.set({ hour: 12, minute: 45 }),
      },
      {
        day: WeekDay.thirsday,
        group: 2,
        week: 'B',
        start: dayFactory.set({ hour: 9, minute: 45 }),
        end: dayFactory.set({ hour: 12, minute: 45 }),
      },
    ],
    subject: uml,
    professer: jareyaMouna,
    sessionType: SessionType.tp,
  },
  // uml

  // bas niveau
  {
    time: [
      {
        day: WeekDay.thirsday,
        group: 1,
        week: 'B',
        start: dayFactory.set({ hour: 9, minute: 45 }),
        end: dayFactory.set({ hour: 12, minute: 45 }),
      },
      {
        day: WeekDay.thirsday,
        group: 2,
        week: 'A',
        start: dayFactory.set({ hour: 9, minute: 45 }),
        end: dayFactory.set({ hour: 12, minute: 45 }),
      },
    ],
    subject: architectureMat,
    professer: demergeEmir,
    sessionType: SessionType.tp,
  },
  // bas niveau
]

export const gl3Schedule = [...gl3Cours, ...gl3TP]

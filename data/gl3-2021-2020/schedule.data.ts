import { SchoolSession } from './../../models/schoolSession.model'
import {
  chamkhiMajek,
  demergeEmir,
  jareyaMouna,
  jem3i,
  kechicheMohamed,
  marouaKessinti,
  riathRobenna,
  salwaBenYahia,
  soniaBouzidi,
} from './../professors.data'
import {
  architectureMat,
  complexiteAlgorithme,
  jee,
  rechercheOp,
  reseau,
  uml,
  unix,
} from './../subjects.data'
import { SessionType } from '../../models/session.enum.model'
import { WeekDay } from '../../models/WeekDay.enum'

const gl3Cours: SchoolSession[] = [
  {
    time: [
      {
        day: WeekDay.monday,
        start: { hour: 9, minute: 45 },
        end: { hour: 11, minute: 15 },
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
        start: { hour: 11, minute: 30 },
        end: { hour: 13, minute: 0 },
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
        start: { hour: 8 },
        end: { hour: 9, minute: 30 },
      },
    ],
    subject: architectureMat,
    professer: demergeEmir,
    sessionType: SessionType.cours,
  },
  // bas niveau

  // uml
  {
    time: [
      {
        day: WeekDay.tuesday,
        start: { hour: 11, minute: 30 },
        end: { hour: 13 },
      },
    ],
    subject: uml,
    professer: soniaBouzidi,
    sessionType: SessionType.cours,
  },
  // uml

  // rech op
  {
    time: [
      {
        day: WeekDay.tuesday,
        start: { hour: 9, minute: 45 },
        end: { hour: 11, minute: 15 },
      },
    ],
    subject: rechercheOp,
    professer: chamkhiMajek,
    sessionType: SessionType.cours,
  },
  // rech op
]

const gl3TP: SchoolSession[] = [
  // jee
  {
    time: [
      {
        day: WeekDay.thirsday,
        group: 1,
        start: { hour: 14 },
        end: { hour: 17 },
      },
      {
        day: WeekDay.monday,
        group: 2,
        start: { hour: 14 },
        end: { hour: 17 },
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
        start: { hour: 14 },
        end: { hour: 18 },
      },
      {
        day: WeekDay.thirsday,
        group: 2,
        start: { hour: 14 },
        end: { hour: 18 },
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
        start: { hour: 9, minute: 45 },
        end: { hour: 12, minute: 45 },
      },
      {
        day: WeekDay.thirsday,
        group: 2,
        week: 'B',
        start: { hour: 9, minute: 45 },
        end: { hour: 12, minute: 45 },
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
        start: { hour: 9, minute: 45 },
        end: { hour: 12, minute: 45 },
      },
      {
        day: WeekDay.thirsday,
        group: 2,
        week: 'A',
        start: { hour: 9, minute: 45 },
        end: { hour: 12, minute: 45 },
      },
    ],
    subject: architectureMat,
    professer: demergeEmir,
    sessionType: SessionType.tp,
  },
  // bas niveau

  // reseau
  {
    time: [
      {
        day: WeekDay.saturday,
        group: 1,
        week: 'A',
        start: { hour: 8 },
        end: { hour: 12 },
      },
      {
        day: WeekDay.saturday,
        group: 2,
        week: 'B',
        start: { hour: 8 },
        end: { hour: 12 },
      },
    ],
    subject: reseau,
    professer: kechicheMohamed,
    sessionType: SessionType.tp,
  },
  // reseau

  // rech op
  {
    time: [
      {
        day: WeekDay.saturday,
        group: 1,
        week: 'B',
        start: { hour: 8 },
        end: { hour: 12 },
      },
      {
        day: WeekDay.saturday,
        group: 2,
        week: 'A',
        start: { hour: 8 },
        end: { hour: 12 },
      },
    ],
    subject: rechercheOp,
    professer: chamkhiMajek,
    sessionType: SessionType.tp,
  },
  // rech op
]

export const gl3Schedule = [...gl3Cours, ...gl3TP]

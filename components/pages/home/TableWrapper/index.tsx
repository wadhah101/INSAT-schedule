import * as React from 'react'
import { useState } from 'react'
import { gl3Schedule } from '../../../../data/gl3-2021-2020/schedule.data'
import {
  SchoolSession,
  SchoolSessionView,
} from '../../../../models/schoolSession.model'
import TimeTable from '../TimeTable'
import styles from './style.module.scss'

const transformer = (s: SchoolSession): SchoolSessionView[] => {
  return s.time.map((e) => ({
    time: e,
    sessionType: s.sessionType,
    subject: s.subject,
  }))
}

const data = gl3Schedule.flatMap(transformer)

const TableWrapper: React.FunctionComponent = () => {
  const [group, setGroup] = useState(1)
  const [week, setWeek] = useState<'A' | 'B'>('A')
  return (
    <section className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <button
          onClick={() => setGroup((e) => (e === 1 ? 2 : 1))}
          className={styles.bt}
        >
          group : {group}
        </button>
        <button
          onClick={() => setWeek((e) => (e === 'A' ? 'B' : 'A'))}
          className={styles.bt}
        >
          weeek : {week}
        </button>
        <TimeTable data={data} group={group} week={week} />
      </div>
    </section>
  )
}

export default TableWrapper

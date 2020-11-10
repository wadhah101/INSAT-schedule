import * as React from 'react'
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
  return (
    <section className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <TimeTable data={data} group={1} week="A" />
      </div>
    </section>
  )
}

export default TableWrapper

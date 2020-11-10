import * as React from 'react'
import { SchoolSessionView } from '../../../../models/schoolSession.model'
import { WeekDay } from '../../../../models/WeekDay.enum'
import SessionComp from '../SessionComp'
import styles from './style.module.scss'

const days: WeekDay[] = [
  WeekDay.monday,
  WeekDay.tuesday,
  WeekDay.wednesday,
  WeekDay.thirsday,
  WeekDay.friday,
  WeekDay.saturday,
]

interface Props {
  data: SchoolSessionView[]
  group: number
  week: 'A' | 'B'
}

const TimeTable: React.FunctionComponent<Props> = ({ data, group, week }) => {
  return (
    <div className={styles.wrapperGrid}>
      {days.map((e) => (
        <div className={styles.cell} key={e}>
          <h2 className={styles.title} key={e}>
            {e}
          </h2>
          <ul className={styles.items}>
            {data
              .filter((el) => el.time.day === e)
              .filter((el) => (el.time.group ? el.time.group === group : true))
              .filter((el) => (el.time.week ? el.time.week === week : true))
              .map((e) => (
                <SessionComp key={e.subject.name + e.sessionType} data={e} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TimeTable

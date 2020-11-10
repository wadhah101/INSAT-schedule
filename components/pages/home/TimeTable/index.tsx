import * as React from 'react'
import { SchoolSessionView } from '../../../../models/schoolSession.model'
import { WeekDay } from '../../../../models/WeekDay.enum'
import SessionComp from '../SessionComp'
import styles from './style.module.scss'

export interface TimeTableData {
  day: WeekDay
  schoolSessionViews: SchoolSessionView[]
}

interface Props {
  data: TimeTableData[]
}

const TimeTable: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <div className={styles.wrapperGrid}>
      {data.map((e) => (
        <div className={styles.cell} key={e.day}>
          <h2 className={styles.title}>{e.day}</h2>
          <ul className={styles.items}>
            {e.schoolSessionViews.map((el) => (
              <SessionComp key={el.subject.name + el.sessionType} data={el} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TimeTable

// .filter((el) => el.time.day === e)
// .filter((el) => (el.time.group ? el.time.group === group : true))
// .filter((el) => (el.time.week ? el.time.week === week : true))

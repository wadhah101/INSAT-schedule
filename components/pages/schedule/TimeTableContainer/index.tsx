import React from 'react'
import { TimeTableData } from '../../../../models/scholSession.full.model'
import TimeTable from '../TimeTable'
import styles from './style.module.scss'

interface Props {
  A: TimeTableData[]
  B: TimeTableData[]
}

const TimeTableContainer: React.FunctionComponent<Props> = ({ A }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <TimeTable data={A} />
      </div>
    </div>
  )
}

export default TimeTableContainer

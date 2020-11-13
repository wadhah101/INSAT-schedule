import React from 'react'
import { TimeTableData } from '../../../../models/scholSession.full.model'
import { WeekContext } from '../../../../pages/_app'
import TimeTable from '../TimeTable'
import styles from './style.module.scss'

interface Props {
  A: TimeTableData[]
  B: TimeTableData[]
}

const TimeTableContainer: React.FunctionComponent<Props> = ({ A, B }) => {
  const { week } = React.useContext(WeekContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <TimeTable data={week === 'A' ? A : B} />
      </div>
    </div>
  )
}

export default TimeTableContainer

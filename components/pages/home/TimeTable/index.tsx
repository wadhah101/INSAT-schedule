import * as React from 'react'
import { TimeTableData } from '../../../../models/scholSession.full.model'
import SessionComp from '../SessionComp'
import styles from './style.module.scss'

interface Props {
  data: TimeTableData[]
}

const TimeTable: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <div className={styles.wrapperGrid}>
      {data.map((e) => (
        <div className={styles.cell} key={e.day.id}>
          <h2 className={styles.title}>{e.day.name}</h2>
          <ul className={styles.items}>
            {e.schoolSessionViews.map((el) => (
              <SessionComp
                key={`${el.time.start}-${el.time.end}-${el.time.day.id}`}
                data={el}
              />
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

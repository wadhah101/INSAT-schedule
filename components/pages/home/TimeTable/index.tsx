import * as React from 'react'
import styles from './style.module.scss'

const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

const TimeTable: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapperGrid}>
      {days.map((e) => (
        <div key={e}>
          <h2 className={styles.title} key={e}>
            {e}
          </h2>
          <ul className={styles.items}>
            {/* {dayItems.map((e, ind) => (
                <li key={ind} className={styles.item}>
                  {e.text}
                </li>
              ))} */}
            <li className={styles.demo}>
              <div className={styles.demoContent}>hemlo</div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TimeTable

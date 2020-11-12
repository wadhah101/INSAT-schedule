import React from 'react'
import { TimeTableData } from '../../../../models/scholSession.full.model'
import TimeTable from '../../home/TimeTable'
import styles from './style.module.scss'

interface Props {
  A: TimeTableData[]
  B: TimeTableData[]
}

const ScheduleSwiper: React.FunctionComponent<Props> = ({ A }) => {
  // const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className={styles.wrapper}>
      <div className={styles.baseContainer}>
        {/* <div className={styles.r}>
          <h1> </h1>
          <div className={styles.t}>
            <div className={styles.headings}>
              <h2
                onClick={() => setCurrentSlide(0)}
                className={clsx(styles.selector, {
                  [styles.active]: currentSlide === 0,
                })}
              >
                A
              </h2>
              <h2
                onClick={() => setCurrentSlide(1)}
                className={clsx(styles.selector, {
                  [styles.active]: currentSlide === 1,
                })}
              >
                B
              </h2>
            </div>
          </div>
        </div> */}

        <TimeTable data={A} />
      </div>
    </div>
  )
}

export default ScheduleSwiper

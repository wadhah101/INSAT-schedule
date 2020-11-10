import * as React from 'react'
import TimeTable from '../TimeTable'
import styles from './style.module.scss'

const TableWrapper: React.FunctionComponent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <TimeTable />
      </div>
    </section>
  )
}

export default TableWrapper

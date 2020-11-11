import * as React from 'react'
import styles from './style.module.scss'

const NotFound: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <h1 className={styles.text}>
          404 <br /> Page Not Found
        </h1>
      </div>
    </div>
  )
}

export default NotFound

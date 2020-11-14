import clsx from 'clsx'
import * as React from 'react'
import styles from './style.module.scss'

interface IBannerProps {
  names: string[]
}

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In incidunt molestias ad at? Dignissimos deleniti sit fugiat, sunt nihil vel nemo quos magni soluta animi facere delectus nulla sed.`

const Banner: React.FunctionComponent<IBannerProps> = ({ names }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <div className="flex flex-col items-center">
          <h1 className={styles.title}>
            INSAT <br /> Schedule
          </h1>
          <p className={clsx(styles.writing, 'text-xl')}>{text}</p>
          <p className={clsx(styles.writing, 'mt-2')}>License : GPLv3</p>

          {names.map((e) => (
            <h2 key={e}> {e} </h2>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner

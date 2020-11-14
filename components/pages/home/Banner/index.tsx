import clsx from 'clsx'
import * as React from 'react'
import styles from './style.module.scss'
import * as icons from 'react-icons/fa'
import Link from 'next/link'

interface IBannerProps {
  names: string[]
}

const text = `A simple schedule made with love`

const Banner: React.FunctionComponent<IBannerProps> = ({ names }) => {
  return (
    <div className={clsx(styles.wrapper, 'text-center')}>
      <div className={clsx(styles.baseContainer, 'md:w-2/3')}>
        <div className="flex flex-col items-center">
          <h1 className={styles.title}>
            INSAT <br /> Schedule
          </h1>
          <p className="mt-2 md:text-lg md:mt-0">{text}</p>
          <div className="flex flex-col items-center mt-2">
            <p className={clsx()}>License : GPLv3</p>
            <a
              href="https://github.com/wadhah101/UniSchedule"
              title="source code"
              target="_blank"
              rel="noreferrer"
              className="mt-1 ml-3 duration-300 hover:text-blue-500"
              style={{ fontSize: '2rem' }}
            >
              <icons.FaGithub />
            </a>
          </div>

          <div className="grid grid-flow-col-dense gap-2 mt-3">
            {names.map((e) => (
              <Link href={`/schedule/${e}`} key={e}>
                <a
                  className="px-6 py-3 font-medium text-blue-800 bg-blue-200 rounded shadow"
                  key={e}
                >
                  {e}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

import clsx from 'clsx'
import * as React from 'react'
import styles from './style.module.scss'
import * as icons from 'react-icons/fa'
import Link from 'next/link'

interface IBannerProps {
  names: string[]
}

const Banner: React.FunctionComponent<IBannerProps> = ({ names }) => {
  return (
    <div className={clsx(styles.wrapper, 'text-center')}>
      <div className={clsx(styles.baseContainer, 'md:w-2/3')}>
        <div className="flex flex-col items-center">
          <h1 className={styles.title}>
            INSAT <br /> Schedule
          </h1>
          <div className="mt-2 md:text-lg md:mt-0">
            <p>*Beta.</p>
            <p>**Limited to GL3 as an early access.</p>
          </div>

          <div className="flex flex-col items-center mt-2">
            <p className="text-sm">License : GPLv3</p>
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

          <div className="grid grid-flow-col-dense gap-2 mt-4">
            {names.map((e) => (
              <Link href={`/schedule/${e}`} key={e}>
                <a
                  className="px-6 py-3 font-medium text-white duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-500 hover:shadow-md"
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

import clsx from 'clsx'
import Link from 'next/link'
import * as React from 'react'
import styles from './style.module.scss'

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.baseContainer, styles.container)}>
        <Link href="/" passHref>
          <a>
            <img className={styles.logo} src="/icons/icon.svg" />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header

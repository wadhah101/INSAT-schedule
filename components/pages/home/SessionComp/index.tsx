import * as React from 'react'
import { SchoolSession } from '../../../../models/schoolSession.model'
import styles from './style.module.scss'

interface ISessionCompProps {
  data: SchoolSession
}

// TODO place based on time
// TODO random color based on name
const SessionComp: React.FunctionComponent<ISessionCompProps> = ({ data }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.content}>
        <p>{data.subject.name}</p>
      </div>
    </li>
  )
}

export default SessionComp

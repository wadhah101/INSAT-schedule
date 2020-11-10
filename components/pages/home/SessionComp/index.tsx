import * as React from 'react'
import { SchoolSession } from '../../../../models/schoolSession.model'
import styles from './style.module.scss'
import md5 from 'md5'
import styled, { css } from 'styled-components'

interface ISessionCompProps {
  data: SchoolSession
}

const Content = styled.div<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    background: ${color}0A;
    border-bottom: 2px solid ${color};
    .time {
      font-size: 0.8rem;
      color: ${color}d9;
    }
  `}
`

const Wrapper = styled.div<{ time: { start: number; end: number } }>`
  ${({ time }) => css`
    @media (min-width: 768px) {
      grid-row: ${time.start} / ${time.end};
    }
  `}
`

const colorFactory = (s: SchoolSession) => `#${md5(s.subject.name).slice(0, 6)}`

const positionFactory = (s: SchoolSession, _group = 1) => {
  const start = (s.time.start.hour() - 8) * 4 + s.time.start.minute() / 15
  const end = (s.time.end.hour() - 8) * 4 + s.time.end.minute() / 15
  return { start, end }
}

// TODO place based on time
const SessionComp: React.FunctionComponent<ISessionCompProps> = ({ data }) => {
  return (
    <Wrapper time={positionFactory(data)} className={styles.wrapper}>
      <Content color={colorFactory(data)} className={styles.content}>
        <p className="time">
          {data.time.start.format('HH:mm')} - {data.time.end.format('HH:mm')}
        </p>
        <h4 className={styles.name}>{data.subject.name}</h4>
        <div className={styles.spacer} />
        <p className={styles.type}> {data.sessionType} </p>
      </Content>
    </Wrapper>
  )
}

export default SessionComp

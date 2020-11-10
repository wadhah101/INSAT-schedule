import * as React from 'react'
import { SchoolSessionView } from '../../../../models/schoolSession.model'
import styles from './style.module.scss'
import md5 from 'md5'
import styled, { css } from 'styled-components'

interface ISessionCompProps {
  data: SchoolSessionView
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

const Wrapper = styled.li<{ time: { start: number; end: number } }>`
  ${({ time }) => css`
    @media (min-width: 768px) {
      grid-row: ${time.start + 1} / ${time.end + 1};
    }
  `}
`

const colorFactory = (s: SchoolSessionView) =>
  `#${md5(s.subject.name).slice(0, 6)}`

const positionFactory = (s: SchoolSessionView) => {
  const start = (s.time.start.hour - 8) * 4 + (s.time.start.minute ?? 0) / 15
  const end = (s.time.end.hour - 8) * 4 + (s.time.end.minute ?? 0) / 15
  return { start, end }
}

const twoDigit = (e: number) => `${e}`.padStart(2, '0')

const SessionComp: React.FunctionComponent<ISessionCompProps> = ({ data }) => {
  return (
    <Wrapper time={positionFactory(data)} className={styles.wrapper}>
      <Content color={colorFactory(data)} className={styles.content}>
        <p className="time">
          {twoDigit(data.time.start.hour)}:
          {twoDigit(data.time.start.minute ?? 0)} -
          {twoDigit(data.time.end.hour)}:{twoDigit(data.time.end.minute ?? 0)}
        </p>
        <h3 className={styles.name}>{data.subject.name}</h3>
        <div className={styles.spacer} />
        <p className={styles.type}> {data.sessionType} </p>
      </Content>
    </Wrapper>
  )
}

export default SessionComp

import * as React from 'react'
import styles from './style.module.scss'
import md5 from 'md5'
import styled, { css } from 'styled-components'
import { SchoolSessionPureData } from '../../../../models/scholSession.full.model'

interface ISessionCompProps {
  data: SchoolSessionPureData
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

const colorFactory = (s: SchoolSessionPureData) =>
  `#${md5(s.subject.name).slice(0, 6)}`

const positionFactory = (s: SchoolSessionPureData) => {
  const start =
    (new Date(s.time.start).getHours() - 8) * 4 +
    new Date(s.time.start).getMinutes() / 15
  const end =
    (new Date(s.time.end).getHours() - 8) * 4 +
    new Date(s.time.end).getMinutes() / 15
  return { start, end }
}

const twoDigit = (e: number) => `${e}`.padStart(2, '0')

const SessionComp: React.FunctionComponent<ISessionCompProps> = ({ data }) => {
  return (
    <Wrapper time={positionFactory(data)} className={styles.wrapper}>
      <Content color={colorFactory(data)} className={styles.content}>
        <p className="time">
          {twoDigit(new Date(data.time.start).getHours())}:
          {twoDigit(new Date(data.time.start).getMinutes())} -
          {twoDigit(new Date(data.time.end).getHours())}:
          {twoDigit(new Date(data.time.end).getMinutes())}
        </p>
        <h3 className={styles.name}>{data.subject.name}</h3>
        <div className={styles.spacer} />
        <p className={styles.type}> {data.sessionType.name} </p>
      </Content>
    </Wrapper>
  )
}

export default SessionComp

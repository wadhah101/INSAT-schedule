import * as React from 'react'
import styles from './style.module.scss'
import md5 from 'md5'
import styled, { css } from 'styled-components'
import { SchoolSessionPureData } from '../../../../models/scholSession.full.model'
import dayjs, { Dayjs } from 'dayjs'

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

const positionFactory = (startTime: Dayjs, endTime: Dayjs) => {
  const start = (startTime.hour() - 8) * 4 + startTime.minute() / 15
  const end = (endTime.hour() - 8) * 4 + endTime.minute() / 15
  return { start, end }
}

const SessionComp: React.FunctionComponent<ISessionCompProps> = ({ data }) => {
  const temp = {
    ...data,
    time: {
      ...data.time,
      start: dayjs(data.time.start),
      end: dayjs(data.time.end),
    },
  }
  return (
    <Wrapper
      time={positionFactory(temp.time.start, temp.time.end)}
      className={styles.wrapper}
    >
      <Content color={colorFactory(data)} className={styles.content}>
        <p className="time">
          {temp.time.start.format('HH:mm')} - {temp.time.end.format('HH:mm')}
        </p>
        <h3 className={styles.name}>{data.subject.name}</h3>
        <div className={styles.spacer} />
        <p className={styles.type}> {data.sessionType.name} </p>
      </Content>
    </Wrapper>
  )
}

export default SessionComp

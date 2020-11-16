import * as React from 'react'
import styles from './style.module.scss'
import md5 from 'md5'
import styled, { css } from 'styled-components'
import { SchoolSessionPureData } from '../../../../models/scholSession.full.model'
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

interface ISessionCompProps {
  data: SchoolSessionPureData
}

const Content = styled.div<{ color: string }>`
  ${({ color }) => css`
    color: ${color};
    * {
      color: ${color};
    }
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
      padding-top: ${time.start === 0 ? '0.5rem' : null};
      padding-bottom: ${time.end === 40 ? '0.5rem' : null};
    }
  `}
`

const colorFactory = (s: SchoolSessionPureData) =>
  `#${md5(`${s.subject.name}`).slice(0, 6)}`

const positionFactory = (startTime: Dayjs, endTime: Dayjs) => {
  const start = (startTime.utc().hour() - 7) * 4 + startTime.minute() / 15
  const end = (endTime.utc().hour() - 7) * 4 + endTime.minute() / 15
  return { start, end }
}

const SessionComp: React.FunctionComponent<ISessionCompProps> = ({ data }) => {
  const dataWithDayjs = {
    ...data,
    time: {
      ...data.time,
      start: dayjs(data.time.start),
      end: dayjs(data.time.end),
    },
  }
  return (
    <Wrapper
      time={positionFactory(dataWithDayjs.time.start, dataWithDayjs.time.end)}
      className={styles.wrapper}
    >
      <Content
        color={dataWithDayjs.subject.color ?? colorFactory(data)}
        className={styles.content}
      >
        <p className="time">
          {dataWithDayjs.time.start.format('HH:mm')} -{' '}
          {dataWithDayjs.time.end.format('HH:mm')}
        </p>
        <h3 className={styles.name}>{data.subject.name}</h3>
        <div className={styles.spacer} />
        <p className="text-sm font-medium text-right">
          {data.sessionType.name}
        </p>
      </Content>
    </Wrapper>
  )
}

export default SessionComp

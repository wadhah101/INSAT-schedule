import { NextPage } from 'next'
import React from 'react'
import TimeTable from '../components/pages/home/TimeTable'
import BasePage from '../components/shared/BasePage'

export const Home: NextPage = () => {
  return (
    <BasePage>
      <TimeTable />
    </BasePage>
  )
}

export default Home

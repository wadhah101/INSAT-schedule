import { NextPage } from 'next'
import React from 'react'
import TableWrapper from '../components/pages/home/TableWrapper'
import BasePage from '../components/shared/BasePage'

export const Home: NextPage = () => {
  return (
    <BasePage>
      <TableWrapper />
    </BasePage>
  )
}

export default Home

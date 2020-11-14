import { NextPage } from 'next'
import React from 'react'
import NotFound from '../components/pages/NotFound'
import BasePage from '../components/shared/BasePage/BasePage'

const Page404: NextPage = () => {
  return (
    <BasePage>
      <NotFound />
    </BasePage>
  )
}

export default Page404

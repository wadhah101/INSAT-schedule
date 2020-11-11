import { NextPage } from 'next'
import React from 'react'
import BasePage from '../components/shared/BasePage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FiliereWithLevel } from '@prisma/client'

interface Props {
  data: FiliereWithLevel
}

export const Home: NextPage<Props> = () => {
  return <BasePage></BasePage>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: null,
    },
  }
}

export default Home

import { NextPage } from 'next'
import React from 'react'
import BasePage from '../components/shared/BasePage'
import { GetStaticProps } from 'next'
import { PrismaClient } from '@prisma/client'
import Banner from '../components/pages/home/Banner'

interface Props {
  data: string[]
}

export const Home: NextPage<Props> = ({ data }) => {
  return (
    <BasePage>
      <Banner names={data} />
    </BasePage>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prisma = new PrismaClient()
  const _data = await prisma.filiereWithLevel.findMany({
    include: { filiere: true },
  })

  const data = _data.flatMap((e) =>
    new Array(e.groupCount)
      .fill(0)
      .map((_, ind) => `${e.filiere.abbreviation}-${e.level}-${ind + 1}`)
  )

  return {
    props: {
      data,
    },
  }
}

export default Home

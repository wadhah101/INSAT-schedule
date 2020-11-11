import { NextPage } from 'next'
import React from 'react'
import BasePage from '../components/shared/BasePage'
import { GetStaticProps } from 'next'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import styles from '../styles/home.module.scss'

interface Props {
  data: { name: string }[]
}

export const Home: NextPage<Props> = ({ data }) => {
  return (
    <BasePage>
      {data.map((e) => (
        <Link passHref key={e.name} href={`/schedule/${e.name}`}>
          <a className={styles.linkButton}> {e.name} </a>
        </Link>
      ))}
    </BasePage>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prisma = new PrismaClient()
  const _data = await prisma.filiereWithLevel.findMany({
    include: { filiere: true },
  })

  const data = _data.flatMap((e) =>
    new Array(e.groupCount).fill(0).map((_, ind) => ({
      name: `${e.filiere.abbreviation}-${e.level}-${ind + 1}`,
    }))
  )

  return {
    props: {
      data,
    },
  }
}

export default Home

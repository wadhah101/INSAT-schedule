import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<string[]>
): Promise<void> => {
  if (process.env.NODE_ENV !== 'development') {
    res.status(500)
    return
  }
  const prisma = new PrismaClient()
  const _data = await prisma.filiereWithLevel.findMany({
    include: { filiere: true },
  })

  const data = _data.flatMap((e) =>
    new Array(e.groupCount)
      .fill(0)
      .map((_, ind) => `${e.filiere.abbreviation}-${e.level}-${ind + 1}`)
  )
  res.status(200).json(data)
}

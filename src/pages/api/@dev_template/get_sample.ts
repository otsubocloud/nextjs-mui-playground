import type { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs'
import _path from 'path'

export type ApiXxxReq = {}
export type ApiXxxRes = {}

export default function handler(
  req: { query: ApiXxxReq } & Omit<NextApiRequest, 'query'>,
  res: NextApiResponse<ApiXxxRes>
) {
  const {} = req.query
  res.status(200).send({})
}

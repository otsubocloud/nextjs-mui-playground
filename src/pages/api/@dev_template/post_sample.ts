import type { NextApiRequest, NextApiResponse } from 'next'

import fs from 'fs'
import _path from 'path'

export type ApiXxxReq = {}
export type ApiXxxRes = {}

export default function handler(
  req: { body: ApiXxxReq } & Omit<NextApiRequest, 'body'>,
  res: NextApiResponse<ApiXxxRes>
) {
  const {} = req.body

  res.status(200).json({})
}

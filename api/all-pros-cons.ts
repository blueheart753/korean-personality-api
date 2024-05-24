import type { VercelRequest, VercelResponse } from '@vercel/node'
import _pros_cons_list from './_pros_cons_list'

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Access-Control-Allow-Origin', '*')

  res.status(200).json(Object.values(_pros_cons_list))
}

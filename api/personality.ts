import type { VercelRequest, VercelResponse } from '@vercel/node'
import personality_list from './_personality_list'

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Access-Control-Allow-Origin', '*')

  const prosConsList = [...Object.values(personality_list)]
  const randNumber = Math.floor(Math.random() * prosConsList.length)
  const randomProsCons = prosConsList[randNumber]

  res.status(200).json(randomProsCons)
}

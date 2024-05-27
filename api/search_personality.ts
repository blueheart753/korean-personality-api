import type { VercelRequest, VercelResponse } from '@vercel/node';
import _personality_list from './_personality_list';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const persnalityValueList: Array<string> = Object.values(_personality_list);
  let { value } = req.query;
  console.log(value);

  if (Array.isArray(value)) {
    value = value[0];
  }

  if (!value) {
    res.status(404).json('value not found!');
  }

  if (persnalityValueList.includes(value)) {
    res.status(200).json(value);
  } else {
    res.status(404).json('Not Value, 죄송해요! 자료가 없어요!');
  }
}

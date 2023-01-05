import { computeHash } from '../../../utils/crypto-function'

export default async function handler(req, res) {
  const { algorithm, inputText } = req.body
  let hashValue = computeHash(algorithm, inputText)

  res.status(200).json({ hashValue })
}

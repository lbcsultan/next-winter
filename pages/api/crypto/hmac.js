import { computeHmac } from '../../../utils/crypto-function'

export default async function handler(req, res) {
  const { algorithm, inputText, secret } = req.body
  let hmacValue = computeHmac(algorithm, secret, inputText)

  res.status(200).json({ hmacValue })
}

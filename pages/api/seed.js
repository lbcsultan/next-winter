import User from '../../models/User'
import data from '../../utils/data'
import db from '../../utils/db'

const handler = async (req, res) => {
  await db.connect()
  await User.deleteMany()
  await User.insertMany(data.users)
  await db.disconnect()
  res.send({ message: 'seeded successfully. 초기 샘플사용자 등록 완료' })
}

export default handler

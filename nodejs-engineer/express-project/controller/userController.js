const { User } = require('../model/index')

exports.list = async (req, res) => {
  console.log(req.body)
  const userModel = new User(req.body)
  const dbBack = await userModel.save()
  res.status(201).json(dbBack)
}
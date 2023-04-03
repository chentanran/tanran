const fs = require('fs')
const { promisify } = require('util')
const { User } = require('../model/index')
const { createToken } = require('../utils/jwt')

const rename = promisify(fs.rename)

exports.register = async (req, res) => {
  const userModel = new User(req.body)
  const dbBack = await userModel.save()
  const user = dbBack.toJSON()
  delete user.password
  res.status(201).json(user)
}

exports.login = async (req, res) => {
  let dbBack = await User.findOne(req.body)
  if (!dbBack) {
    res.status(402).json({ error: '账号或密码不正确' })
    return
  }
  console.log(dbBack, 'dbback')
  dbBack = dbBack.toJSON()
  dbBack.token = await createToken(dbBack)

  res.status(201).json({ data: dbBack })
}

exports.list = async (req, res) => {
  res.status(201).json({ data: '/user-list' })
}

exports.update = async (req, res) => {
  console.log(req.body)
  const dbBackData = await User.findByIdAndUpdate(req.user.userinfo._id, req.body, { new: true })
  res.status(201).json({ data: dbBackData })
}

exports.upload = async (req, res) => {
  const fileArr = req.file.originalname.split('.')
  const fileType = fileArr[fileArr.length - 1]

  try {
    rename(
      `./public/${req.file.filename}`,
      `./public/${req.file.filename}.${fileType}`
    )
    res.status(201).json({ data: req.file })
  } catch {
    res.status(401).json({ data: '文件上传失败' })
  }
}
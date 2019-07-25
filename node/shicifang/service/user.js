const api = require('../utils/request')

exports.findUsername = async (username) => {
  const { data } = await api({
    url: 'users',
    params: {
      username
    }
  })
  return data[0]
}

exports.findNickname = async (nickname) => {
  const { data } = await api({
    url: 'users',
    params: {
      nickname
    }
  })
  return data[0]
}

exports.create = async (datas) => {
  const { data } = await api({
    url: 'users',
    method: 'post',
    data: {
      nickname: datas.nickname,
      username: datas.username,
      password: datas.password
    }
  })
  return data
}
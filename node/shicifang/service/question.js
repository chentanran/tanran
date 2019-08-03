const request = require('../utils/request')

exports.find = async (options) => {
  return request({
    url: '/posts',
    method: 'get',
    params: {
      _page: options._page,
      _limit: options._limit || 1
    }
  })
}

exports.create = async (data) => {
  return request({
    url: 'posts',
    method: 'post',
    data: {
      title: "123",
      body: "345",
      tags: "345",
      userId: '5d39c2f3018db71044f5e9e5'
    }
  })
} 
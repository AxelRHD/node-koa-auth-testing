const jwt = require('jsonwebtoken')

const { jwt_secrets, jwt_cookie_name } = require('../utils')

const token = jwt.sign({ sub: 1 }, jwt_secrets[0])

module.exports = async ctx => {
  ctx.body = "You got a token!"
  ctx.cookies.set(jwt_cookie_name, token)
}
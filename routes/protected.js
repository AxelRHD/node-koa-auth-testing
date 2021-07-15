const jwt = require('jsonwebtoken')

const { jwt_secrets, jwt_cookie_name } = require('../utils')

module.exports = async ctx => {
  ctx.body = ctx.state.jwtdata
}
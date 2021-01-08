const  { jwt_cookie_name } = require('../utils')

module.exports = async ctx => {
  ctx.cookies.set(jwt_cookie_name, '', { maxAge: new Date() })

  ctx.body = 'Cookie deleted.'
}
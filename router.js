const jwt = require('jsonwebtoken')
const Router = require('@koa/router')

const { jwt_secrets, jwt_cookie_name } = require('./utils')

const router = new Router()
const token = jwt.sign({ sub: 1 }, jwt_secrets[0])

router.get('/public/auth', async ctx => {
  ctx.body = "You got a token!"
  ctx.cookies.set(jwt_cookie_name, token)
})

router.get('/protected', async ctx => {
  ctx.body = ctx.state.jwtdata
})

router.get('/logout', async ctx => {
  ctx.cookies.set(jwt_cookie_name, '', { maxAge: new Date() })

  ctx.body = 'Cookie deleted.'
})

module.exports = router
const Koa = require("koa")
const KoaJwt = require("koa-jwt")
const views = require("koa-views")

const { jwt_secrets, jwt_cookie_name } = require("./utils")
const router = require("./router")

const app = new Koa()

const port = app.env === "development" ? 1234 : process.env.port || 8090
const render = views(__dirname + "/views", {
 extension: "marko"
})

// MIDDLEWARE
app.use(render)
app.use(
 KoaJwt({
  cookie: jwt_cookie_name,
  key: "jwtdata",
  secret: jwt_secrets
 }).unless({
  path: [/^\/$/, /^\/public/]
 })
)

// ROUTES

// APPLICATION
app
 .use(router.routes())
 .use(router.allowedMethods())
 .listen(port, () => {
  console.log(`Server listening on port ${port}`)
 })

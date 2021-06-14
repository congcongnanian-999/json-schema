
const Koa = require("koa")
const router = require("./router")

const app = new Koa()

app.use(router.routes())

const port = 3000
app.listen(port, ()=>{
  console.log("监听: ", port)
})
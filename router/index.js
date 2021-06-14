const Router = require('koa-router')
const App = new Router()

App.get('/emit', async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = 'emit'
  await next()
})


App.get('/check-form', async (ctx, next) => {
  ctx.response.status = 200
  
  // todo: 校验逻辑
  ctx.response.body = JSON.stringify({
    code: 0,
    data: {
      AAA: 12313
    },
    message: ''
  });
  
  await next()
})


module.exports = App
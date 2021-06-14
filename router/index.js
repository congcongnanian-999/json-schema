const Router = require('koa-router')
const App = new Router()
const { validate } = require('../src/index.js')


App.get('/emit', async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = 'emit'
  await next()
})


App.get('/check-form', async (ctx, next) => {
  
  const data = ctx.request.query
  
  // data.age = Number(data.age)
  
  const {valid, errors} = validate(data)
  console.log("errors", errors)
  console.log(valid)
  
  // todo: 校验逻辑
  ctx.response.status = 200
  ctx.response.body = JSON.stringify({
    code: valid ? 0 : 5, // 0 false，  1 = 成功
    message: errors && errors[0] && errors[0].message || ''
  });
  
  await next()
})


module.exports = App
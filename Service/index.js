const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/test',ctx=>{
  ctx.response.body = 'hello world';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{
  console.log('listen on port 3000');
});
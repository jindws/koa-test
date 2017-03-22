const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {
    let url = ctx.url
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    // 从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    // ctx.body = `
    //   <dl>
    //     <dd>url:${url}</dd>
    //     <dd>req_query:${JSON.stringify(req_query)}</dd>
    //     <dd>req_querystring:${JSON.stringify(req_querystring)}</dd>
    //     <dd>ctx_query:${JSON.stringify(ctx_query)}</dd>
    //     <dd>ctx_querystring:${JSON.stringify(ctx_querystring)}</dd>
    //   </dl>
    // `

    ctx.body ={
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3000)
console.log('[demo] request get is starting at port 3000')

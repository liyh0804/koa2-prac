const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    console.log(ctx.request);
    await next();
});
app.use(bodyParser());

//add url route:
router.get('/hello/:name', async(ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello ${name}!</h1>`;
});

router.get('/', (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome ${name}</h1>`;
    } else {
        ctx.response.body = `<h1>Login Failed</h1>
            <p><a href="/">Try again</a></p>`;
    }
});

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000....');
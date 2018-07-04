const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const nunjucks = require('nunjucks');
const templating = require('./middlewares/templating');
const isProduction = process.env.NODE_ENV === 'production';

const app = new Koa();

//1. 记录URL以及页面的执行时间
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    const start = new Date().getTime();
    await next();
    const execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});
//2. 处理静态文件
if (!isProduction) {
    let staticFiles = require('./middlewares/static-file');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

//3. 解析POST请求
app.use(bodyParser());

//4. 负责给ctx加上render()来使用numjucks
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// 处理URL router middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000....');
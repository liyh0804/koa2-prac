const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var autoescape = opts.autoescape === undefined ? true : opts.autoescape;
    var noCache = opts.noCache || false;
    var watch = opts.watch || false;
    var throwOnUndefined = opts.throwOnUndefined || false;
    var env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader('views', {
            noCache,
            watch,
        }), {
            autoescape,
            throwOnUndefined,
        });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

var s = env.render('hello.html', {name: 'liyahui'});
console.log(s);

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});
app.use(bodyParser());

// add router middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000....');
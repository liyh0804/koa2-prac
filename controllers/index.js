// var fn_index = async (ctx, next) => {
//     ctx.response.body = `<h1>Index</h1>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value="koa"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// };

// var fn_signin = async (ctx, next) => {
//     var
//         name = ctx.request.body.name || '',
//         password = ctx.request.body.password || '';
//     // console.log(`signin with name: ${name}, password: ${password}`);
//     if (name === 'koa' && password === '12345') {
//         ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//     } else {
//         ctx.response.body = `<h1>Login failed!</h1>
//         <p><a href="/">Try again</a></p>`;
//     }
// };

// module.exports = {
//     'GET /': fn_index,
//     'POST /signin': fn_signin,
// };

// ctx中没有render方法，假设应该这样使用，最后一步调用ctx.render(view, model)完成页面输出
const fn_index = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome',
    })
}

module.exports = {
    'GET /': fn_index,
};
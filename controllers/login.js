const fn_signin = async (ctx, next) => {
    const { email = '', password = '' } = ctx.request.body;
    if (email === 'admin@example.com' && password === '123456') {
        // login success:
        ctx.render('signin-ok.html', {
            title: 'Sign In OK',
            name: 'Mr Koa2'
        });
    } else {
        // login failed
        ctx.render('signin-failed.html', {
            title: 'Sign In Failed'
        });
    }
};

module.exports = {
    'POST /signin': fn_signin,
};
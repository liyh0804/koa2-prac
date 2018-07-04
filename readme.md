1、模版引擎Nunjucks
  本质上只需要一个构造函数：
    function render(view, model) {
        // TODO: ...
    }

2、安装
    npm install nunjucks
3、编写render 【参考nunjucks文档：http://mozilla.github.io/nunjucks/】


4、性能
    nunjucks使用同步IO读取模版文件（Nunjucks会缓存以读取的文件内容，只需要配置noCache: false）
    开发环境关闭cache，生产环境打开cache


MVC:
1.controllers

2.views

3.static 
    <link rel="stylesheet" href="/static/css/bootstrap.css">
    koa中编写一个middleware，处理/static/开头的URL
    （1）创建一个static-file.js，处理静态文件的middleware
    

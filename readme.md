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

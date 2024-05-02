/*
* vue 脚手架基础配置文件
* 在这里配置了项目的入口
* 关闭语法检查
* 配置代理服务器
* */
module.exports = {
    pages: {
        index: {
            entry: 'src/main.js'
        }
    },
    lintOnSave: false,
    devServer: {
        proxy: 'http://localhost:5000'
    }
}

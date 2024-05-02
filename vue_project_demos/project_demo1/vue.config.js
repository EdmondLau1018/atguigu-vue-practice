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
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    devServer: {
        //  添加请求头  请求代理服务器的时候请求路径有这个请求头 才通过代理服务发送请求
        proxy: {
            '/studentsApi': {
                target: 'http://localhost:5000',    // 代理目标的基础路径
                pathRewrite: {'^/studentsApi':''},  //  通过 重写请求地址的方式 将代理服务器转发的请求路径进行重写  配置的方式是正则
                ws: true,
                changeOrigin: true,     //  控制请求头中的 origin 字段是否与 目标服务器一致
            }
        }
    }
}

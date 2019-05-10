## 服务器配置方法
请将服务器的根目录设置为
```
**/website(项目名)/dist
```

##安装方法
##
```
npm i gulp -g //全局安装gulp

npm install //安装依赖

启动 gulp dev //开发环境

看到 website/dist文件夹

打开浏览器 打开localhost
```

##打包方法

若要部署在服务器上，请修改 prod.config.js中的apiPath，必须加上http://

```
运行 gulp prod //生产打包
```
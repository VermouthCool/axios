# axios 分析
## 1.HTTP请求报文
    1.请求行 请求方式/url
    2.请求头 由name：value组成   如content-type/cookie/host
    3.请求体  
## 2.HTTP响应报文
    1.响应行 响应码/对应的文本
    2.响应头 content-type/set-cookie
    3.响应体 
## 3.post的请求体文本参数
    1.content-type：application/x-www-form-urlencoded;charset=utf-8
    用于键值对的连接  参数的键值用=连接
    name = jian&age=18
    2.content-type：application/json;charset=utf-8 app.use(express.json())
## 4.常见的状态码
    1.200 OK            请求成功
    2.201 Created       已创建新的资源
    3.401 Unauthorized  未授权/请求需要用户的身份认证
    4.404 Not Found     无法根据用户端找到对应的资源
    5.500 Internal Server Error 服务器内部错误
## 5.axios的特点
    1.react和vue都使用axios发送Ajax请求
    2.基于Promise的异步请求库
    3.浏览器使用
    4.支持响应和请求的拦截
    5.支持请求取消
    6.请求和响应的数据转换
    7.批量发送多个请求 使用Promise.all()
    8.axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端。简单的理解就是ajax的封装

    它本身具有以下特征：

     a.从浏览器中创建 XMLHttpRequest
     b.从 node.js 发出 http 请求
     c.支持 Promise API
     e.拦截请求和响应
     f.转换请求和响应数据
    g.取消请求
    h.自动转换JSON数据
    i.客户端支持防止 CSRF/XSRF
## 6.axios和Axios的关系和instance
    1.语法里axios不是Axios的实例 但是实际上就是Axios的实例
    只要是url形式的默认会以content-type：url传递的 data是对象的形式就会以json的形式传递
    
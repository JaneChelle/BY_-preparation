HTTP 超文本传输协议

默认HTTP的端口号为80，HTTPS的端口号为443
### HTTP/1.0
HTTP/1.0 版的主要缺点是，每个TCP连接只能发送一个请求。发送数据完毕，连接就关闭，如果还要请求其他资源，就必须再新建一个连接。
### HTTP/1.1
HTTP1.1是默认支持持久化连接的。HTTP1.0若要支持持久化连接需要显示指定Keep-alived报文头。
+ 持久化连接
    + 即TCP连接默认不关闭，可以被多个请求复用，不用声明Connection: keep-alive
    + 客户端和服务器发现对方一段时间没有活动，就可以主动关闭连接。不过，规范的做法是，客户端在最后一个请求时，发送Connection: close，明确要求服务器关闭TCP连接。
+ 管线化技术
    + 即在同一个TCP连接里面，客户端可以同时发送多个请求
+ 1.1版还新增了许多动词方法：PUT、PATCH、HEAD、 OPTIONS、DELETE。
### HTTP/2.0
+ 多路复用技术
+ header压缩
+ 新的二进制格式
    + HTTP1.x的解析是基于文本
    + HTTP2.0的协议解析决定采用二进制格式
+ 服务端推送

### HTTP2.0的多路复用和HTTP1.X中的长连接复用有什么区别？
+ **HTTP/1.*** 一次请求-响应，建立一个连接，用完关闭；每一个请求都要建立一个连接
+ **HTTP1.1** 若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会，一旦有某请求超时等，后续请求只能被阻塞
+ **HTTP2.0** 多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行


DNS 的作用就是通过域名查询到具体的 IP

DNS在区域传输的时候使用TCP协议，其他时候使用UDP协议。

**DNS 是基于 UDP 做的查询**

    客户端向DNS服务器查询域名，一般返回的内容都不超过512字节，用UDP传输即可。不用经过三次握手，这样DNS服务器负载更低，响应更快。

因为 IP 存在数字和英文的组合（IPv6），很不利于人类记忆，所以就出现了域名

+ 操作系统会首先在本地缓存中查询 IP
+  没有的话会去系统配置的 DNS 服务器中查询
+  如果这时候还没得话，会直接去 DNS 根服务器查询，这一步查询会找出负责 com 这个一级域名的服务器
+  然后去该服务器查询 google 这个二级域名
+ 接下来三级域名的查询其实是我们配置的，你可以给 www 这个域名配置一个 IP，然后还可以给别的三级域名配置一个 IP

以上介绍的是 DNS 迭代查询，还有种是递归查询

区别就是:
+ 迭代查询是由客户端去做请求，
+ 递归查询是由系统配置的 DNS 服务器做请求，得到结果后将数据返回给客户端。
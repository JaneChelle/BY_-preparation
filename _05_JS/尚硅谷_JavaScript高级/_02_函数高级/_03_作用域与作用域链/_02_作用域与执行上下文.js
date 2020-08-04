/*
1. 区别1
    * 全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了。而不是在函数调用时
    * 全局执行上下文环境是在全局作用域确定之后, js代码马上执行之前创建
    * 函数执行上下文是在调用函数时, 函数体代码执行之前创建
2. 区别2
    * 作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化
    * 执行上下文是动态的, 调用函数时创建, 函数调用结束时就会自动释放
3. 联系
    * 执行上下文(对象)是从属于所在的作用域
    * 全局上下文环境==>全局作用域
    * 函数上下文环境==>对应的函数使用域
 */
/*
    1. 每个函数function都有一个prototype，即显式原型(属性)
    2. 每个实例对象都有一个__proto__，可称为隐式原型(属性)
    3. 对象的隐式原型的值为其对应构造函数的显式原型的值
    5. 总结:
        * 函数的prototype属性: 在定义函数时自动添加的, 默认值是一个空Object对象
        * 对象的__proto__属性: 创建对象时自动添加的, 默认值为构造函数的prototype属性值
        * 程序员能直接操作显式原型, 但不能直接操作隐式原型(ES6之前)
 */

// 定义一个构造函数
function Fun() {
    // 内部语句: this.prototype = {}
}

// 1. 每个函数function都有一个prototype，即显式原型属性, 默认指向一个空的Object对象
console.log(Fun.prototype);
// 2. 每个实例对象都有一个__proto__，可称为隐式原型(属性)
// 创建实例对象
let fun = new Fun(); // 内部语句: this.__proto__ = Fn.prototype
// fun.__proto__ = undefined;
console.log(fun.__proto__);
// 3. 对象的隐式原型的值为其对应构造函数的显式原型的值
console.log(Fun.prototype === fun.__proto__);
// 给原型添加方法
Fun.prototype.test = function () {
    console.log('王福坤坤你是不是个智障障');
};
// 通过实例调用原型的方法
fun.test();
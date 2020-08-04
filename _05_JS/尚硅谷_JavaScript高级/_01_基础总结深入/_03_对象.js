/*
1. 什么是对象?
    * 多个数据的封装体
    * 用来保存多个数据的容器
    * 一个对象代表现实中的一个事物
2. 为什么要用对象?      * 统一管理多个数据
3. 对象的组成
    * 属性： 属性名(字符串)和属性值(任意)组成
    * 方法： 一种特别的属性(属性值是函数)
4. 如何访问对象内部数据?
    * .属性名：编码简单, 有时不能用
    * ["属性名]：编码麻烦, 能通用
5. 问题: 什么时候必须使用['属性名']的方式?
    * 属性名包含特殊字符: - 空格
    * 属性名不确定
 */
let p = {
    name: 'match',
    age: 12,
    setName: function (name) {
        this.name = name
    },
    setAge: function (age) {
        this.age = age
    }
};
p.setName('BY&K');
p['setAge'](18);
console.log(p.name, p['age']);

console.log('++++++++++++++++++++++++++++++++');

// 1. 给p对象添加一个属性: content-type: text/json
// p.content - type = 'text/json';  // 不能用
p['content-type'] = 'text/json';
console.log(p['content-type']);

// 2. 属性名不确定
let propName = 'Shelly';
let value = 18;
p.propName = value;
p[propName] = value;

console.log(p);

### vue实现数据双向绑定主要是：
+ 采用 **数据劫持** 结合 **发布者-订阅者模式** 的方式，数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变
+ 核心( Vue2.0 )：通过Object.defineProperty（）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。

### 为什么Vue3.0不再使用defineProperty实现数据监听
1. Object.defineProperty 真的无法监测数组下标的变化吗？<br />
&emsp;&emsp;Object.defineProperty 对数组和对象的表现一致，并非不能监控数组下标的变化，vue2.x中无法通过数组索引来实现响应式数据的自动更新是vue本身的设计导致的，不是 defineProperty 的锅.
2. 分析 Vue2.x 中对数组 Observe 部分源码
3. 对比Object.defineProperty和 Proxy
    1. Object.defineProperty只能劫持对象的属性，而Proxy是直接代理对象。<br />
        + 由于 Object.defineProperty 只能对属性进行劫持，需要遍历对象的每个属性，如果属性值也是对象，则需要深度遍历。而 Proxy 直接代理对象，不需要遍历操作。
    2. Object.defineProperty对新增属性需要手动进行Observe。<br />
        + 由于 Object.defineProperty 劫持的是对象的属性，所以新增属性时，需要重新遍历对象，对其新增属性再使用 Object.defineProperty 进行劫持。
        + 也正是因为这个原因，使用vue给 data 中的数组或对象新增属性时，需要使用 vm.$set 才能保证新增的属性也是响应式的。
    3.  Proxy支持13种拦截操作，这是defineProperty所不具有的
    4. 新标准性能红利 
        + Proxy 作为新标准，长远来看，JS引擎会继续优化 Proxy ，但 getter 和 setter 基本不会再有针对性优化。
    5. Proxy兼容性差

### 总结：
+ Object.defineProperty 对数组和对象的表现一直，并非不能监控数组下标的变化，vue2.x中无法通过数组索引来实现响应式数据的自动更新是vue本身的设计导致的，不是 defineProperty 的锅。
+ Object.defineProperty 和 Proxy 本质差别是，defineProperty 只能对属性进行劫持，所以出现了需要递归遍历，新增属性需要手动 Observe 的问题。
+ Proxy 作为新标准，浏览器厂商势必会对其进行持续优化，但它的兼容性也是块硬伤，并且目前还没有完整的polifill方案。
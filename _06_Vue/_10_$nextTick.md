JS中有两种任务类型：
+ 微任务（microtask）和宏任务（macrotask）
+ 在ES6中，microtask称为 jobs，macrotask称为 task。

+ 宏任务： script （主代码块）、setTimeout 、setInterval 、setImmediate 、I/O 、UI rendering
+ 微任务：process.nextTick（Nodejs） 、promise 、Object.observe 、MutationObserver

+ process.nextTick 优先级永远大于 promise.then
+ MessageChannel属于宏任务，优先级是：MessageChannel->setTimeout
<hr />

### 全面解析Vue.nextTick实现原理
官方文档的解释：
+ 可以在DOM更新完毕之后执行一个回调
+ 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
<hr />
**nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用nextTick，则可以在回调中获取更新后的 DOM**
<hr />
异步说明：（Vue 是异步执行 DOM 更新）
+ Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。
+ Vue在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
+ 同一事件循环中的代码执行完毕 -> DOM 更新 -> nextTick callback触发
+ 在同一事件循环中，只有所有的数据更新完毕，才会调用nextTick
+ 在同一事件循环中，如果存在多个nextTick，将会按最初的执行顺序进行调用
+ 只有同步环境执行完毕，DOM渲染完毕之后，才会处理异步callback


尽管MVVM框架并不推荐访问DOM，但有时候确实会有这样的需求，尤其是和第三方插件进行配合的时候，免不了要进行DOM操作。而nextTick就提供了一个桥梁，确保我们操作的是更新后的DOM。

能监听到DOM改动的API好像只有MutationObserver了

MutationObserver是HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内容、子节点等的改动，是一个功能强大的利器，

### 应用场景
+ 在Vue生命周期的created()钩子函数进行DOM操作一定要放到Vue.nextTick()的回调函数中。

+ 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
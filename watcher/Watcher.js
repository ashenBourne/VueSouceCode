/*
 * @Description:依赖，这里不足的是，只能对已有的对象属性进行读取及设置，对于新增/删除的属性就无从下手了。
 * vue为解决这个办法，添加了一个全局方法$set与$delete
 * @Autor: shen
 * @Date: 2020-07-30 13:00:59
 * @LastEditTime: 2020-07-30 14:03:16
 */
// 这里先实现一个lodash中一个小方法：把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
const bailRE = /[^\w.$]/
// 这里利用了函数柯里化
function parsePath(path) {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}
// 这里的watcher实例化就是Dep中的sub
export default class Watcher {
  // vm就是监听对象，path对象路径，cb回调函数
  constructor(vm, path, cb) {
    this.vm = vm
    this.cb = cb
    // 这里的getter是一个函数，利用call来出发get方法
    this.getter = parsePath(path)
    this.value = this.get()
  }
  get() {
    // 将此实例加入Dep中的subs，作为依赖
    window.target = this
    let vm = this.vm
    // 触发Observe 中的get方法
    let value = this.getter.call(vm, vm)
    // 释放target
    window.target = undefined
    return value
  }
  // 在set中激活回调
  update() {
    const oldValue = this.value
    this.value = this.get()
    // 激活回调函数
    this.cb.call(this.vm, this.value, oldValue)
  }
}

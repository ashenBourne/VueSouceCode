/*
 * @Description:依赖收集器
 * @Autor: shen
 * @Date: 2020-07-30 12:43:31
 * @LastEditTime: 2020-07-30 12:55:14
 */
export default class Dep {
  constructor() {
    this.subs = []
  }
  // 新增一个依赖具体方法
  addSub(sub) {
    this.subs.push(sub)
  }
  // 删除一个依赖
  removeSub(sub) {
    remove(this.subs, sub)
  }
  // 添加一个依赖
  depend() {
    if (window.target) {
      this.addSub(window.target)
    }
  }
  // 通知更新所有相关的依赖
  notify() {
    // 拷贝一份
    const subs = this.subs.slice()
    for (let item of subs) {
      item.update()
    }
  }
}
/**
 * @description:删除一个依赖
 * @param {Array} arr 数组
 * @param {} item arr中的单个item
 * @return {Array} 返回删除之后的数组
 */
function remove(arr, item) {
  if (arr.length > 0) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/*
 * @Description:Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象
 * @Autor: shen
 * @Date: 2020-07-30 10:45:30
 * @LastEditTime: 2020-07-30 14:07:52
 */
import Dep from './Dep'
export default class Observer {
  constructor(value) {
    this.value = value
    def(value, '__ob__', this)
    // 数组是不一样的处理规则
    if (Array.isArray(value)) {
      // 当value为数组时的逻辑
    } else {
      this.walk(value)
    }
  }
  /**
   * walk是对象中的每个属性都变为可监控
   * @param { Object } obj 对象
   */
  walk(obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}
/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
function defineReactive(obj, key, value) {
  if (arguments.length === 2) {
    value = obj[key]
  }
  if (typeof value === 'object') {
    new Observer(value)
  }
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 依赖收集
      dep.depend()
      return value
    },
    set(newVal) {
      if (value === newVal) {
        return
      }
      value = newVal
      dep.notify()
    },
  })
}

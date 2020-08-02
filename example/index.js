/*
 * @Description:实例方法篇
 * @Autor: shen
 * @Date: 2020-08-02 09:44:23
 * @LastEditTime: 2020-08-02 09:45:31
 */
// set、del都是在别的文件中定义好的
export function stateMixin(Vue) {
  Vue.prototype.$set = set
  Vue.prototype.$delete = del
  Vue.prototype.$watch = function (expOrFn, cb, options) {}
}

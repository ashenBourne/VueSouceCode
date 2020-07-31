<!--
 * @Description:虚拟dom
 * @Autor: shen
 * @Date: 2020-07-30 15:15:20
 * @LastEditTime: 2020-07-31 14:47:02
-->

## 虚拟 dom

真实的 dom 节点是十分庞大的，操作 dom 也是十分消耗性能的，利用虚拟 dom-diff，比对数据，看视图中哪些地方需要更新，只更新对应的地方即可。是以 JS 的计算性能来换取操作真实 DOM 所消耗的性能。

## VNode 的作用

我们在视图渲染之前，把写好的 template 模板先编译成 VNode 并缓存下来，等到数据发生变化而需要重新渲染的时候，我们把数据发生变化后生成的 VNode 与前一次缓存的 VNode 进行对比，找出差异，然后生成新的 DOM，进行特定位置视图更新。

## 可描述的节点类型

1. 注释节点
2. 文本节点
3. 元素节点
4. 组件节点
5. 函数式组件节点
6. 克隆节点

## 以元素节点为例

```javascript
// 真实DOM节点
<div id='a'><span>节点文本</span></div>

// VNode节点
{
  tag:'div',
  data:{},
  children:[
    {
      tag:'span',
      text:'节点文本'
    }
  ]
}
```

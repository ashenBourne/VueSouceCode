<!--
 * @Description:抽象语法树
 * @Autor: shen
 * @Date: 2020-08-02 09:10:39
 * @LastEditTime: 2020-08-02 09:18:10
-->

## 具体流程

### 综述：将一堆字符串模板解析成抽象语法树（AST），处理之后，用处理后的 AST 来生成 render 函数，具体分为三个流程：

1. 模板解析阶段：将一堆字符串模板解析成抽象语法树（AST）；
2. 优化阶段：遍历 AST，找出其中的静态节点，打上标记；
3. 代码生成阶段：将 AST 生成 render 函数；

### 这三个阶段在源码中分别对应三个模块，下面给出三个模块的源代码在源码中的路径

1. 模板解析阶段——解析器——源码路径：src/compiler/parser/index.js;
2. 优化阶段——优化器——源码路径：src/compiler/optimizer.js;
3. 代码生成阶段——代码生成器——源码路径：src/compiler/codegen/index.js; 其对应的源码如下

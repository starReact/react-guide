## JSX语法

### 介绍
- facebook起草的JS语法方案
- 本质是一个JS对象，通过babel编译会被解析为react.createElement方法
- JSX元素遵循XML规范
    - xml对大小写敏感
    - 必须正确的嵌套
    - 必须有根元素
- 每个JSX表达式，有且只能有一个根结点

### JSX中嵌套表达式
```jsx
    <h1>{a}</h1>
    { /*注释*/ }
```
- 表达式书写在{}中，会作为内容的一部分
- 理论上可以{}中可以书写任意的JS表达式
    - null、undefined、false、true不会显示
    - 不能书写普通的对象（不能作为子元素出现）
    - 数组会被遍历，将遍历的结果渲染
- 注释写法```js {/**/}```
- JSX表达式也可以作为元素的属性
- style属性要使用普通对象，css类名使用classname而非class（React 一开始的理念就是与浏览器的 DOM API 保持一直而不是 HTML）
- 属性的标识符使用小驼峰命名规范

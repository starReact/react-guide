## hello world

React 提供两个工具库
- react核心库（提供react的核心功能， 例如react组件的创建、组件生命周期的创建等...）
- reactDom (将reactElement 转换为组件实例/真实的DOM；将组件状态的变化应用到DOM树上面)

React.createElement API
```js
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

    const dom = document.querySelector("#root");
        
    const text = React.createElement('span', {className: 'span'}, 'NFT 5');

    const img = React.createElement("img", {src: './NFT5.png'});

    const card = React.createElement("div", {style: {width: 300, padding: 10, display: 'flex', flexDirection: 'column', alignItem: 'center', textAlign: 'center'}}, img, text);

    ReactDOM.render(card, dom);
```

JSX语法
```js
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">
        const h1 = <h1>hello world</h1>; 
        // 语法糖 实际上还是会被编译为react.createElement();
        ReactDOM.render(h1, document.getElementById('root'));
    </script>
```


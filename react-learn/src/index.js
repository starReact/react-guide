import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function TestFunComp(props) {
  // props.title = "导航菜单"
  props.title.name = 2
  return <div>我是一个组件， 我负责渲染一个{props.title.name}</div>
}

class TestClassComp extends React.Component {
  render() {
      return <div>我是一个组件， 我负责渲染一个{this.props.title}</div>
  }
}

const h = <h1>我是标题</h1> // react元素

const App = <div>
  App组件
  {/* {TestFunComp()}
  {new TestClassComp().render()} */}
  <TestFunComp title={{name: '1'}} />
  {/* <TestFunComp  title={2} /> */}
  <TestClassComp  title="表格1"/>
  <TestClassComp  title="表格2"/>
</div>

root.render(
  <React.StrictMode>
    { App }
  </React.StrictMode>
);

reportWebVitals();

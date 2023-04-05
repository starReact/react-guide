import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let a = 100;
let b = 100;

const url = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fcc161dee-9b86-43bd-aeb5-7400f8f02b68%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682653724&t=b13ee47ff747ccdf95f7ce8fcdaa10bd';
const alt = "哈士奇"

function sum(a, b) {
  return a + b;
}

const App = <div>
  <h1>hello world {a} * {b} = {a*b} {null}{undefined}{true}{false}{sum(a, b)}</h1>
  <img src={url} alt={alt} />
</div>

root.render(
  <React.StrictMode>
    { App }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

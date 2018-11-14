import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Life from "./pages/demo/Life";
import Admin from "./admin";
import Home from "./pages/route_demo/route1/Home";
import IRouter from "./pages/route_demo/route3/router";
// import IRouter from "./pages/route_demo/route2/router";

ReactDOM.render(<IRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

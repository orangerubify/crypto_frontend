import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StockExchange from './pages/StockExchange';

ReactDOM.render(
  (<Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/stock_exchanges/:id" component={StockExchange} />
    </div>
  </Router>),
  document.getElementById('root')
)

registerServiceWorker();

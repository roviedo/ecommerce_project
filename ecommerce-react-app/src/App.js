import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products';

const Home = () => (
  <div class="block-content">
    <h1 class="site-title ">
      <a href="/" class="site-title-link">
          Raul &amp; Co. 
      </a>
    </h1>
    <figure>
      <blockquote>
        <span>“</span>Products and product detail pages using Django and React, supporting cast include Django REST, React Router, React Masonry amongst others.<span>”</span>
      </blockquote>
    </figure>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/products'>Products</a></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    )
  }
}

export default App;

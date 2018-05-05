import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Category from './Category';
import Products from './Products';

import logo from "./logo.svg";
import "./App.css";

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);



class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="navbar-nav">
            <li>
              <Link exact={true} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/category" component={Category} />
          <Route path="/:id" render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;

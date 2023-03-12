import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Products from "./products/Products";
import Services from "./services/Services";

import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import PageNotFoun from "./PageNotFound";

const RoutingNavigationEx1 = () => {
  return (
    <>
      {/* <h5>Routing and navigation demo</h5> */}
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Products</Link>
        <Link to="/services">Services</Link>

        <Switch>
          {/* http://localhost:3000/ */}
          <Route path="/" exact={true}>
            <Home />
          </Route>

          {/* http://localhost:3000/about */}
          <Route path="/about-us">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/product">
            <Products />
          </Route>

          <Route path="/services">
            <Services />
          </Route>

          <Route path="*">
            <PageNotFoun />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default RoutingNavigationEx1;

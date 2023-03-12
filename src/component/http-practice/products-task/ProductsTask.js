import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Categories from "./Categories";
import ProductSubCat from "./ProductSubCat";

const ProductsTask = () => {
  //   const url = "https://fakestoreapi.com/products/";
  return (
    <>
      <BrowserRouter>
        <Categories />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/electronics" />
          </Route>
          <Route path="/:cat">
            <ProductSubCat />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default ProductsTask;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categories from "./Categories";
import data from "./data.json";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

const ProductTask = () => {
  return (
    <>
      {/* <h1>Product Task</h1> */}
      <BrowserRouter>
        <section style={{ display: "flex" }}>
          <div
            style={{
              width: "25%",
              backgroundColor: "cyan",
              height: "90vh",
              padding: 10,
              marginRight: 5,
            }}
          >
            <Categories items={Object.keys(data)} />
          </div>

          <div
            style={{
              backgroundColor: "chartreuse",
              height: "90vh",
              padding: 10,
              flexGrow: 1,
            }}
          >
            <Switch>
              <Route path="/:id/:category">
                <ProductDetails items={data} />
              </Route>
              <Route path="/:category">
                <ProductList items={data} />
              </Route>
            </Switch>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
};

export default ProductTask;

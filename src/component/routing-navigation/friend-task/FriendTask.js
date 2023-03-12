import React from "react";
import FriendDetails from "./FriendDetails";
import FriendMenu from "./FriendMenu";
import data from "./data.json";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const FriendTask = () => {
  return (
    <>
      {/* <h1>Friend Task Component</h1> */}
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
            <FriendMenu items={data} />
          </div>
          <div
            style={{
              backgroundColor: "chartreuse",
              flexGrow: 1,
              height: "90vh",
            }}
          >
            <Switch>
              <Route path="/:id">
                <FriendDetails items={data} />
              </Route>
            </Switch>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
};

export default FriendTask;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AlbumMenu from "./AlbumMenu";
import AlbumPhotos from "./AlbumPhotos";

const AlbumsTask = () => {
  return (
    <>
      {/* <h1>Albums Task</h1> */}

      <BrowserRouter>
        <section style={{ display: "flex" }}>
          <div
            style={{
              width: "25%",
              backgroundColor: "crimson",
              //   height: "100vh",
              padding: 10,
              marginRight: 5,
            }}
          >
            <h3 style={{ color: "white", fontStyle: "italic" }}>Album List</h3>
            <AlbumMenu path="/:id" />
          </div>
          <div
            style={{
              backgroundColor: "chartreuse",
              //   flexGrow: 1,
              width: "75%",
              //   height: "100vh",
            }}
          >
            <Switch>
              <Route path="/:id">
                <AlbumPhotos />
              </Route>
            </Switch>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
};

export default AlbumsTask;

import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Home from "./Home";
// import Profile from "./Profile";

const Home = React.lazy(() => import("./Home"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const Profile = React.lazy(() => import("./Profile"));

const LazyLoading = () => {
  return (
    <>
      <h1>Lazy Loading</h1>

      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>

        <Suspense fallback={<h3>Loading .... </h3>}>
          <Switch>
            <Route path="/" component={Home} exact>
              Home
            </Route>
            <Route path="/dashboard" component={Dashboard}>
              Dashboard
            </Route>

            <Route path="/profile" component={Profile}>
              Profile
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default LazyLoading;

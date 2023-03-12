import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";

const ProtectedRoutes = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const ProtectedRoute = ({ children, ...props }) => {
    return isAuthenticated ? (
      <Route {...props}>{children}</Route>
    ) : (
      <Redirect to="/login" />
    );
  };

  return (
    <>
      <h1>
        Protected Routes - Welcome
        {isAuthenticated ? "  Toppers Skills" : "  Guest"}
      </h1>
      <button onClick={() => setAuthenticated(true)}>Login</button>
      <button onClick={() => setAuthenticated(false)}>Logout</button>

      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <ProtectedRoutes path="/dashboard">
            <Dashboard />
          </ProtectedRoutes>

          <ProtectedRoutes path="/profile">
            <Profile />
          </ProtectedRoutes>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default ProtectedRoutes;

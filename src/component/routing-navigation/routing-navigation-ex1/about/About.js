import React from "react";
import { useRouteMatch } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import Overview from "./Overview";
import Team from "./Team";

const About = () => {
  const { url, path } = useRouteMatch();

  return (
    <>
      <h1>About component</h1>

      {/* <Link to="/about/">Overview</Link> */}
      <Link to={`${url}`}>Overview</Link>
      <Link to={`${url}/team`}>Team</Link>
      <Switch>
        <Route path={`${path}`} exact={true}>
          <Overview />
        </Route>
        <Route path={`${path}/team`}>
          <Team />
        </Route>
      </Switch>
    </>
  );
};

export default About;

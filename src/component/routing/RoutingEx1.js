// import React from "react";
// import { Route, Switch, Link, useRouteMatch } from "react-router-dom";

// const RoutingEx1 = () => {
//   const { url, path } = useRouteMatch();
//   return (
//     <>
//       <Link to={`${url}/home`}>Home Page</Link>
//       <Link to={`${url}/about`}>About Page</Link>

//       <Switch>
//         <Route path={`${path}/`} exact>
//           <Home />
//         </Route>
//         <Route path={`${path}/team`}>
//           <About />
//         </Route>
//       </Switch>
//       {/*
//         <Route path="/home">
//           <Home />
//         </Route>

//         <Route path="/about">
//           <About />
//         </Route> */}
//     </>
//   );
// };

// function Home() {
//   return (
//     <>
//       <h1>Home Page</h1>
//       <p>This is home page of website</p>
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <h1>About Page</h1>
//       <p>This is about page of website</p>
//     </>
//   );
// }
// export default RoutingEx1;

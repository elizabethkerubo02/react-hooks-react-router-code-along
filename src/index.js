import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

// function App() {
//   return <Home />;
// }

function Login(){
  return(
    <div>
    <h1>Login Page</h1>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/">
    <Home/>
  </Route>
  <Route path="/login">
    <Login/>

  </Route>
  </Switch>
  </BrowserRouter>,
 document.getElementById("root"));



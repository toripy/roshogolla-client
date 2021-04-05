
import React, { createContext, useState } from "react";
import Home from "./components/Home/Home"
import Order from "./components/Order/Order"
import Admin from "./components/Admin/Admin"
import Header from "./components/Header/Header"
import Login from "./components/Login/Login"
import Details from "./components/Details/Details"
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();
function App( props ) {
  const [loggedInUser, setLoggedInUser] = useState( {} );
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/details">
            <Details />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

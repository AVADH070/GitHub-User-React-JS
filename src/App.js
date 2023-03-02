import React from "react";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from './pages/PrivateRoute'
import { Switch, Route } from "react-router-dom";
import AuthWrapper from './pages/AuthWrapper'
function App() {
  return (
    <>
      <AuthWrapper>
        <Switch>
          <PrivateRoute exact path='/'>
            <Home></Home>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </AuthWrapper>
    </>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlaces from "./places/pages/UpdatePlaces";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Users from "./users/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlaces />
          </Route>
          <Redirect to="" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

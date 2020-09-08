// External imports
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Internal imports
import Dashboard from "./components/navigation/Dashboard"
import SignUp from "./components/auth/SignUp"
import SignIn from "./components/auth/SignIn"

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        );
    }
}

export default App;
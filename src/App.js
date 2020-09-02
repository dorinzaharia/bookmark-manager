// External imports
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Internal imports
import Dashboard from "./components/Navigation/Dashboard"
import SignUp from "./components/SignUp"

class App extends Component {

    render() {
        return (
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                {/* <Route exact path="/" component={SignUp} /> */}
                
            </Switch>
        );
    }
}

export default App;
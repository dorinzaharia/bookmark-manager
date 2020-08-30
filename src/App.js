// External imports
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Internal imports
import Dashboard from "./components/Navigation/Dashboard"

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
            </Switch>
        );
    }
}

export default App;
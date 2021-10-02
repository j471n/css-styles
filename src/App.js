import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Importing Routes
import Home from "./Routes";
import BoxShadow from "./Routes/BoxShadow";
import Buttons from "./Routes/Buttons";

function App() {



    return (

        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/box-shadow">
                    <BoxShadow />
                </Route>
                <Route exact path="/buttons">
                    <Buttons />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

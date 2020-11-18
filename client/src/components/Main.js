import React, { Component, Fragment} from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Directory from "./Directory";
import Favorites from "./Favorites";
import Contact from "./Contact";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    render() {
        return(
            <Fragment>
                <Header />
                <div class="main">
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/directory">
                        <Directory />
                    </Route>
                    <Route exact path="/favorites">
                        <Favorites />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Main;
import React, { Component, Fragment} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Directory from "./Directory";
import Hiking from "./Hiking";
import Biking from "./Biking";
import Kayaking from "./Kayaking";
import Fishing from "./Fishing";
import Camping from "./Camping";
import RockClimbing from "./RockClimbing";
import Favorites from "./Favorites";
import Contact from "./Contact";

class Main extends Component {

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
                        <Route path="/directory/hiking">
                            <Hiking />
                        </Route>
                        <Route path="/directory/biking">
                            <Biking />
                        </Route>
                        <Route path="/directory/kayaking">
                            <Kayaking />
                        </Route>
                        <Route path="/directory/fishing">
                            <Fishing />
                        </Route>
                        <Route path="/directory/camping">
                            <Camping />
                        </Route>
                        <Route path="/directory/rockclimbing">
                            <RockClimbing />
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
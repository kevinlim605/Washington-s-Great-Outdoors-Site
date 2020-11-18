import React, { Component, Fragment} from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Directory from "./Directory";

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
                <Switch>
                    <Route exact path="/directory" render={() => <Directory/>} />
                    <Redirect to="/home" />
                </Switch>
                <div className="main container">
                    <div className="row">
                        <div className="col">
                            <Link to="/directory">
                                Hello
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Main;
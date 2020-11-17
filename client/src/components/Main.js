import React, { Component, Fragment} from "react";
import Header from "./Header";
import Footer from "./Footer";

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
                <div className="main container">
                    <div className="row">
                        <div className="col">
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                            <h1>Body Section</h1>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Main;
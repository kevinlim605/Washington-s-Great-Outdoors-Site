import React, {Component} from "react";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    render() {
        return(
            <h1>Hello World!</h1>
        )
    }
}

export default Main;
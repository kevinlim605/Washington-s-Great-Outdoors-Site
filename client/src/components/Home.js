import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return( 
        <div>
            <Link to="/about">
                <h1>About</h1>
            </Link>
            <Link to="/directory">
                <h1>Directory</h1>
            </Link>
            <Link to="/favorites">
                <h1>Favorites</h1>
            </Link>
            <Link to="/contact">
                <h1>Contact</h1>
            </Link>
        </div>
    )
}

export default Home;
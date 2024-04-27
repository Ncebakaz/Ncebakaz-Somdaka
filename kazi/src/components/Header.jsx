import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link className="site-logo" to="/">Kazi</Link>
            <nav>
                <Link to="about">About</Link>
            </nav>
        </header>
    )
}
import {Component} from "react";
import React from "react";

const logo = require("../logo.svg") as string;

class Header extends Component<any, { title: string }> {

    constructor(props: any) {
        super(props);
        this.state = {
            title: "Todo List"
        };
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">
                    <img src={logo} className="App-logo" alt="logo"/>
                    {this.state.title}
                </span>
            </nav>
        )
    }
}

export default Header;

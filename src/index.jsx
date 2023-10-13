import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    function = () => {
        this.setState({ name: "nini" }, () => {
            window.alert(this.state.name);
        });
    }

    render() {
        const centerStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        };

        return (
            <Fragment>
                <div style={centerStyle}>
                <button type="button" className="btn btn-danger" onClick={this.function}>დააკლიკე</button>
                </div>
            </Fragment>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.render(<App />, root);

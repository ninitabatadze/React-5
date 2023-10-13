import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    function = () => {

        window.alert("Nini");

    }

    render() {
        const centerStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        };

        return (
            <fragment style={centerStyle}>
                <button type="button" className="btn btn-danger" onClick={this.function}>დააკლიკე</button>
            </fragment>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);

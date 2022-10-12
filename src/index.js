import React from "react";
import Greeting from "./Components/Greeting";
import { createRoot } from "react-dom/client";

import "./Styles/index.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container p-5">
                <Greeting user={"Name goes here"} />
            </div>
        );
    }
}

// React Render Function
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
import React from "react";
import Greeting from "./Components/Greeting";
import { createRoot } from "react-dom/client";
import { io } from "socket.io-client";

import "./Styles/index.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const socket = io("localhost:3000");
        socket.on('connect', () => console.log(`Connected to socket ${socket.id}`));
        socket.on('disconnect', () => console.log(`Disconnected from socket ${socket.id}`));
        // socket.on('mongodb', (data) => console.log(data));
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
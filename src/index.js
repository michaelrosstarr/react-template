import React from "react";
import Greeting from "./Components/Greeting";
import { createRoot } from 'react-dom/client';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Greeting user={"Name goes here"} />
        );
    }
}

// React Render Function
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
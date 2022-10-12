import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h2> Hello React! </h2>
            </div>
        );
    }
}
ReactDOM.render(
    <Greeting />,
    document.getElementById("root")
);
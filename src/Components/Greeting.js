import React from "react";
import PropTypes from "prop-types";

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2 className="text-light"> Hello  {this.props.user}! </h2>
            </div>
        );
    }
}

Greeting.propTypes = {
    user: PropTypes.string,
}

export default Greeting;
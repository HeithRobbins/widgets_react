import React from "react";


export default class Toggle extends React.Component {
    constructor() {
        super()
        this.state = {
            currentHello: "Hello"
        }
    }
    handleToggle = () => {
        if (this.state.currentHello === "Hello") {
            this.setState({
                currentHello: "Hey"
            });
        } else {
            this.setState({
                currentHello: "Hello"
            });
        }
    };
    render() {
        return (
            <div className="ToggleMe">
                {this.state.currentHello}
                <br />
                <button onClick={() => this.handleToggle()}>Toggle</button>
            </div>
        );
    }
}

import React, { Component } from "react";

export default class Hide extends Component {
    constructor() {
        super()
        this.state = {
            hideMe: "Hide Me"
        }
    }
    handleHideMe = () => {
        if (this.state.hideMe === "Hide Me") {
            this.setState({
                hideMe: " "
            });
        } else {
            this.setState({
                hideMe: "Hide Me"
            });
        }
    };
    render() {
        return (
            <div className="HideMe">
                {this.state.hideMe}
                <br />
                <button onClick={() => this.handleHideMe()}>Toggle</button>
            </div>
        );
    }
}
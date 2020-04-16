import React from "react";
export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    handleCrementer = increment => {
        this.setState({
            count: this.state.count + increment
        });
    };
    render() {
        return (
            <div className="AddSub">
                <h2>{this.state.count}</h2>
                <button onClick={() => this.handleCrementer(1)}>Add</button>
                <button onClick={() => this.handleCrementer(-1)}>Sub</button>
            </div>
        );
    }
}
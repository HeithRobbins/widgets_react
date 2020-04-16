import React, { Component } from "react";

export default class FontSizeChangerButton extends Component {
    constructor(props) {
        super();
        this.state = {
            size: 10
        };
    }
    handleCrementer = increment => {
        this.setState({
            size: this.state.size + increment
        });
    };
    render() {
        return (
            <div className="App">
                <div>
                    <h2
                        style={{
                            fontSize: `${
                                this.state.size === 0 ? "normal" : this.state.size
                                }px`
                        }}
                    >
                        {this.state.size}
                    </h2>
                    <button onClick={() => this.handleCrementer(+1)}>Add</button>
                    <button onClick={() => this.handleCrementer(-1)}>Sub</button>
                </div>
            </div>
        );
    }
}

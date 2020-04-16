import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


export default class NavigationComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className='nav-link-wrapper'>
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/counter" activeClassName="nav-link-active">Counter</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/toggle" activeClassName="nav-link-active">Toggle</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/hide" activeClassName="nav-link-active">Hide</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/size" activeClassName="nav-link-active">Size</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/color" activeClassName="nav-link-active">Color</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to="/clock" activeClassName="nav-link-active">Clock</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
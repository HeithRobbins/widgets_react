import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FontSizeChangerButton from "./fontsizechanger";
import hideMe from "./hideMe";
import HelloGoodbye from "./helloGoodbye";
import Clock from "./Clock";
import ColorChanger from "./colorchanger";
import PushMeAround from "./pushMeAround";
import Counter from "./counter";
import NavigationComponent from "./Navbar";

// import "../../style/main.css";/

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationComponent />
            <Switch>
              <Route exact path='/counter' component={Counter} />
              <Route exact path='/hide' component={hideMe} />
              <Route exact path='/toggle' component={HelloGoodbye} />
              <Route exact path='/size' component={FontSizeChangerButton} />
              <Route exact path='/color' component={ColorChanger} />
              <Route exact path='/clock' component={Clock} />
              <Route exact path='/clock' component={PushMeAround} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

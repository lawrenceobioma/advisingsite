import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, withRouter, Router } from 'react-router-dom';
import Pages from './pages';
import './App.css';

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      verified: false
    };
  }

  access = () => {
    //changing value of verified if user logs in or out

    var newVer = !this.state.verified;
    this.setState({ verified: newVer })

    //console.log("HERE");
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/login"> {/* if the user is not verified, send them to login page*/}
            {this.state.verified ? <Pages.Home /> : <><Pages.Login access={() => this.access()} /></>}
          </Route>
        </Switch>
      </ >
    );
  }
}

export interface IAppProps { }

export interface IAppState {

  verified: any
}

export default App;

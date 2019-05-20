import React, { Component } from 'react';
import './App.css';
import './externals/css/uikit.css'
import Login from './components/login';
import SignUp from './components/signUp';
import {Router, Route,Switch,IndexRoute} from 'react-router';

import RunningProject from './components/runningProject';




class App extends Component {



  render() {
    return (
      <div className="App">
         <Login/> 
        {/* <Router>
          <Switch>
            <Route path={"/login"} Component={Login}/>

            <Route path={"/signUp"} Component={SignUp}/>
          </Switch>
        </Router> */}

      </div>
    );
  }
}

export default App;

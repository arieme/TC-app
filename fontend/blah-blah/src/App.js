import React, { Component } from 'react';


import './App.css';
import './external/css/uikit.css';

import Menu from './menu/menu';

import Group from './menu/group';
import Bar from './menu/bar';
import Header from  './acceuil/header';
import Section from  './acceuil/section';
import Login from './component/login';
import SignUp from './component/signUp';


class App extends Component {
  componentWillMount()
  {
      console.log('I ll  be mounting')
  }

  componentDidMount(){
    console.log("mounted")
  }
  render() {
    console.log("it's rending")
    return (

      <div className="App">
        {/*<Header/>
        <Section/>*/}
        {/*<Login/>*/
        }
        <Header/>
        <Section/>

        
       {/*} <Menu/>
        <Group/>*/}

     
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {createStackNavigator, stackNavigator } from 'react-navigation';
import Login from './components/login'
import SignUp from './components/signUp'

const Navigation = createStackNavigator({
    login: {screen : Login},
    signUp: {screen : SignUp}
},
{
    initialRouteName : 'login'
});

export default Navigation;
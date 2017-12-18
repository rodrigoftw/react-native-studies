import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyABSVjeyOAOndCvY19cmiotgrW9O7lXEbQ',
      authDomain: 'auth-e29e8.firebaseapp.com',
      databaseURL: 'https://auth-e29e8.firebaseio.com',
      projectId: 'auth-e29e8',
      storageBucket: 'auth-e29e8.appspot.com',
      messagingSenderId: '230736343917'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
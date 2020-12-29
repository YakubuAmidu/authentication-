import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDFHX-erPdzlRy7TbjeMyLiUwhtIeHBSOo',
      authDomain: 'authentication-da727.firebaseapp.com',
      projectId: 'authentication-da727',
      storageBucket: 'authentication-da727.appspot.com',
      messagingSenderId: '608455794954',
      appId: '1:608455794954:web:86d4e4d362b0db0227daf3',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;

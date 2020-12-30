import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null,
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDFHX-erPdzlRy7TbjeMyLiUwhtIeHBSOo',
      authDomain: 'authentication-da727.firebaseapp.com',
      projectId: 'authentication-da727',
      storageBucket: 'authentication-da727.appspot.com',
      messagingSenderId: '608455794954',
      appId: '1:608455794954:web:86d4e4d362b0db0227daf3',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

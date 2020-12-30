import React, {Component} from 'react';
import {Text, TouchableHighlightBase} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = {
    email: ' ',
    password: ' ',
    error: ' ',
  };

  onButtonPress() {
    const {email, password} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({error: 'Authentication failed'});
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChange={(email) => this.setState({email})}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChange={(password) => this.setState({password})}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 15,
    color: 'red',
    alignSelf: 'center',
  },
};

export default LoginForm;

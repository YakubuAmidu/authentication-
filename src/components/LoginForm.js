import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = {
    text: ' ',
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.text}
            onChange={(text) => this.setState({text})}
          />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

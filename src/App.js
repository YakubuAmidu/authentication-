import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;

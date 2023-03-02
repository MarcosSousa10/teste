/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from './src/components/Button';
export default class App extends Component {
  state={
    contador:80
  }
  apertou= ()=>{
    this.setState({contador: this.state.contador+1})
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView>
          <Text>{this.state.contador}</Text>
          <TouchableOpacity onPress={this.apertou}>
        <Text>Somar</Text>
      </TouchableOpacity>
          <Button title="marcos" >
            <Text>Button</Text>
          </Button>
          <Text>teste</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

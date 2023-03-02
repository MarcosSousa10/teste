/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Button from './src/components/Button';
export default class App extends Component {
  state={
    contador:80,
    name: "marcos",
    personagens:[]
  }
  apertou= ()=>{
    this.setState({contador: this.state.contador+1})
  }
  mudouNome= nome=>{
    this.setState({name:nome})
  }
  async componentWillUnmount(){
    try{
      const response = await fetch("https://swapi.co/api/people/?format=json");
      const dataJson = await response.json();

      this.setState({personagens: dataJson.results});
    }catch(error){
      Alert(error);
    }
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView>
          <Text>{this.state.name}</Text>
          <Text>{this.state.contador}</Text>
          <TextInput
                placeholder  ='Nome:'
                editable={true} 
                value={this.state.name} onChangeText ={ nome=>this.mudouNome(nome)}
                />
          <TouchableOpacity onPress={this.apertou}>
        <Text>Somar</Text>
      </TouchableOpacity>
      {this.state.personagens.map(personagen =>{
        return <Text key={personagen.name}>{personagen.name}</Text>;
      })}
          <Button title="marcos" >
            <Text>Button</Text>
          </Button>
          <Text>teste</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

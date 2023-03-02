/* eslint-disable prettier/prettier */
import React, { Component  } from 'react';
import {
  Text,
  View, TouchableOpacity, Alert
} from 'react-native';
import PropTypes from 'prop-types';
export default class Button extends Component {
  static propTypes = {
    alert: PropTypes.string
  }
  static defaultProps={
    alerta:"Valor padrão"
  }
  render() {
 
    return (
      <TouchableOpacity onPress={() => {
        Alert.alert(this.props.alerta)
      }}>
        <View>
          <Text>{this.props.title}</Text>
          {this.props.children}
        </View>
      </TouchableOpacity>
    );
  }
}


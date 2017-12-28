import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput,FlatList } from 'react-native';
import { Button,
  FormLabel,
  FormInput,
  FormValidationMessage,
 } from 'react-native-elements'

import { connect } from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render(){
    return(
      <View>
        <Text> Aqui {this.props.todos.length}</Text>
      </View>
    );
  }
}

const mapStateToProps = state =>({
  todos: state.ToDoList
})

export default connect(mapStateToProps)(Counter)

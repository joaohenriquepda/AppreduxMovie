import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


 export default class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '',
      error:''
    };
  }

  press = () =>{
    alert("PRESS")
  }

  errorHandler(code, message) {
  this.setState({
    error: !code ? null :
      {
        code,
        message,
      }
  })
}


  render(){
    return(
    <View>
      <FormLabel>Name ToDo</FormLabel>
      <TextInput
        shake={this.state.error}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

        <Button
          raised
          icon={{name: 'add'}}
          onPress={()=>{
            this.press()
          }}
          title="Add new ToDo"
          />
    </View>
    );
  }
}

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import * as todoActions from '../actions/ToDos'

class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '',
      error:''
    };


  }

  press = () =>{
    alert(this.props )
    console.log(this.props)

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
const mapDispatchToProps = dispatch=>
  bindActionCreators(todoActions,dispatch);


export default connect(null,mapDispatchToProps)(ToDoList)

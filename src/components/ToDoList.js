import React, { Component } from 'react';
import { Button } from 'react-native'

export default class ToDoList extends Component {

  onPressButton= ()=>{
    alert("ddd")
  }

  render(){
    return(

      <View>
            <Buttom
            onPress={onPressButton}
            title="Add"
            />
      </View>
    );
  }
}

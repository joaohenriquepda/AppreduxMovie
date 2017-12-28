import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput,FlatList } from 'react-native';
import { Button,
  FormLabel,
  FormInput,
  FormValidationMessage,
 } from 'react-native-elements'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from '../actions/ToDos'

class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error:'',
    };

  }

  addTodo = () =>{
    this.props.addToDo(this.state.text);
    this.setState({text:''})
  }

  render(){
    return(
    <View style={styles.container}>
    <FlatList
      data={this.props.todos}
      renderItem={({item}) => <Text>{item.text}</Text>}
    />

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
            this.addTodo()
          }}
          title="Add new ToDo"
          />
    </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.ToDoList
})

const mapDispatchToProps = dispatch=>
  bindActionCreators(todoActions,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

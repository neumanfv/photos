/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';


class App extends Component {
  

  render() {

    const comments = [{
        nickname:'Joana Alves',
        comment:'Excelente foto'
    },{
      nickname:'Cris Pastel',
      comment:'Muito melhor'
    }]
   
      return (
        <View style={{flex:1}}>
        <Header/>
        <Post image={require('./assets/imgs/fence.jpg')}
        comments={comments}/>
        
        </View>

      )
  }
}


export default App;

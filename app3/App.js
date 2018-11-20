/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Button, Text, View} from 'react-native';

export default class app3 extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '' }
  }

  jokenpo(escolhaUsuario){
    this.setState({ escolhaUsuario : escolhaUsuario }); //alteração de uma variável de estado - this.setState({ variável : valor })
  }
  
  render(){
    return (
      <View>
        <Text>Escolha do computador</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button title="pedra" onPress={ () => {this.jokenpo('pedra')}}/> 
        <Button title="papel" onPress={ () => {this.jokenpo('papel')}}/>
        <Button title="tesoura" onPress={ () => {this.jokenpo('tesoura')}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => app3);

/*colocando () => {...} - encapsula a função, pra que ela seja executada apenas quando clicar no botão*/
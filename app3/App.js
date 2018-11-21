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

    this.state = { escolhaUsuario : '', 
                   escolhaComputador : '',
                   resultado : '' 
                 }
  }

  jokenpo(escolhaUsuario){

    //gera número aleatório (0, 1, 2)
    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Usuário ganhou';
      } else{
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Usuário ganhou';
      } else{
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Usuário ganhou';
      } else{
        resultado = 'Computador ganhou';
      }
    }

    this.setState({ escolhaUsuario : escolhaUsuario, 
                    escolhaComputador : escolhaComputador,
                    resultado : resultado
                  }); //alteração de uma variável de estado - this.setState({ variável : valor })
  }
  
  render(){
    return (
      <View>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
        <Button title="pedra" onPress={ () => {this.jokenpo('pedra')}}/> 
        <Button title="papel" onPress={ () => {this.jokenpo('papel')}}/>
        <Button title="tesoura" onPress={ () => {this.jokenpo('tesoura')}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => app3);

/*colocando () => {...} - encapsula a função, pra que ela seja executada apenas quando clicar no botão*/
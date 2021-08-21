import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Modal } from 'react-native';
import Entrar from './src/Entrar'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  };
  entrar = (visible) => {
    this.setState({ modalVisible: visible });
  };
  sair = (visible) => {
    this.setState({ modalVisible: visible })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Entrar" onPress={() => this.entrar(true)} />

        <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
          <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Entrar fechar={() => this.sair(false)} />
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },


});
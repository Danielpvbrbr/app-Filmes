import React, { Component } from 'react';
import Pessoa from './components/Pessoas'
import {
  View,
  StyleSheet,
  FlatList,

} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'Daniel', idade: 50, email: 'danil@gmail.com' },
        { id: '2', nome: 'cida', idade: 30, email: 'cida@gmail.com' },
        { id: '3', nome: 'amanda', idade: 80, email: 'amanda@gmail.com' },
        { id: '4', nome: 'pedro', idade: 15, email: 'paulo@gmail.com' },
        { id: '5', nome: 'jao', idade: 18, email: 'paulo@gmail.com' },
      ]
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />
    
      </View>
    )
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  

});


import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* scrollEnabled => usado para bloquear o scroll */}
        {/* showsVerticalScrollIndicator={false} => usado para rolagem para baixo */}

        {/* horizontal={true}  => rolagem horizontal*/}
        {/* showsHorizontalScrollIndicator={false} => usado para rolagem para lateral */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>

      </View>
    )
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,

  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
  }

});
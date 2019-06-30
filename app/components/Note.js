/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  AppRegistry,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteDeleteText}>{this.props.val.date}</Text>
        <Text style={styles.noteDeleteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <Text style={styles.deleteButtonText}>-D-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,

    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#004e92"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#000"
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 100,
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: "#004e92",
    fontSize: 15
  },
  noteButton: {
    borderRadius: 50,
    backgroundColor: "red"
  },
  deleteButtonText: {
    color: "#FFF"
  }
});

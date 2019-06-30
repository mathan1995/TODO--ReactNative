/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from "react-native";
import Note from "./app/components/Note";
import { throwStatement } from "@babel/types";

export default class App extends Component {
  state = {
    noteArray: [],
    noteText: ""
  };

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>-NOTER-</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.addNote.bind(this)}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            style={styles.textInput}
            placeholder=" ADD TASK "
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
  //METHOD FOR ADD NEW NOTE
  addNote() {
    // alert(this.state.noteText);
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        note: this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  }

  //METHOD FOR DELETE NOTE
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.1,
    backgroundColor: "#004e92",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#000",
    borderBottomColor: "#000",
    borderBottomWidth: 10
  },
  headerText: {
    color: "#FFF",
    fontSize: 24,
    padding: 56
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0
  },
  addButton: {
    backgroundColor: "#004e92",
    fontSize: 50,
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    fontSize: 24,
    color: "#FFF"
  },
  textInput: {
    alignSelf: "stretch",
    color: "#FFF",
    fontSize: 20,
    padding: 20,
    paddingTop: 46,
    backgroundColor: "#004e92",
    borderTopWidth: 2,
    borderTopColor: "#000"
  }
});

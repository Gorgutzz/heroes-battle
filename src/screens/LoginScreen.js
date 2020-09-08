import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: ""
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.main}>
          <CustomText styles={styles.label}>Enter username</CustomText>
          <TextInput
            style={styles.textInput}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />

          <TouchableOpacity onPress={this.login} style={styles.button}>
            <CustomText styles={styles.buttonText}>Sign in</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  login = () => {
    let username = this.state.username;

    if (username) {
      this.props.navigation.navigate("HeroSelect", {
        username
      });
    }
  };
}

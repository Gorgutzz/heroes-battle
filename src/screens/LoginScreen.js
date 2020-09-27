import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

import CustomText from "../components/CustomText";

import { Audio } from "expo";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: ""
  };

  constructor(props) {
    super(props);
    this.backgroundSound = null;
  }

  async componentDidMount() {
    try {
      this.backgroundSound = new Audio.Sound();
      await this.backgroundSound.loadAsync(
        require("")
      );
      await this.backgroundSound.setIsLoopingAsync(true);
      await this.backgroundSound.playAsync();
    } catch (error) {
      console.log("error loading background sound: ", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require("../assets/images/heroes/captain-america.gif")} />
          <CustomText styles={styles.headerText}>Hero Battles</CustomText>
        </View>

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
      this.props.navigation.navigate("TeamSelect", {
        username
      });

      this.backgroundSound.stopAsync();
    }
  };
}

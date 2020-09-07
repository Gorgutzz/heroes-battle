import React, { Component } from "react";
import { View, TouchableOpacity, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CustomText from "../components/CustomText";
import HeroSprite from "../components/HeroSprite";
import HealthBar from "../components/HealthBar";
import ActionList from "../components/ActionList";
import MovesList from "../components/MovesList";
import HeroList from "../components/HeroList";

class BattleScreen extends Component {
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
  }

  render() {

    return (
      <View style={styles.container}>
        <CustomText>Battle Screen</CustomText>
      </View>
    );
  }
}

export default BattleScreen;

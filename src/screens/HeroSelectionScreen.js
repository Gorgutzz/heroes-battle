import React, { Component } from "react";
import { View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";

import CustomText from "../components/CustomText";
import HeroList from "../components/HeroList";
import ActionList from "../components/ActionList";


class HeroSelectionScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { selected_hero } = this.props;
    return (
      <View style={styles.container}>
        <CustomText>Team Selection Screen</CustomText>
      </View>
    );
  }

  confirmHero = () => {
  };
}


export default HeroSelectionScreen;

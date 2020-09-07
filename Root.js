import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import BattleScreen from "./src/screens/BattleScreen";
import CharacterSelectionScreen from "./src/screens/CharacterSelectionScreen";

import Reactotron from "reactotron-react-native";


Reactotron.configure({ host: "YOUR_INTERNAL_IP_ADDRESS" })
  .useReactNative()
  .connect();

console.ignoredYellowBox = ["Setting a timer"];


const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    CharSelect: CharacterSelectionScreen,
    Battle: BattleScreen
  },
  {
    initialRouteName: "Login"
  }
);

class Router extends Component {
  render() {
    return <RootStack />;
  }
}

export default Router;

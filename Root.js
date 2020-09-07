import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import Reactotron from "reactotron-react-native";

Reactotron.configure({ host: "YOUR_INTERNAL_IP_ADDRESS" })
  .useReactNative()
  .connect();

console.ignoredYellowBox = ["Setting a timer"];

const RootStack = createStackNavigator(

);

class Router extends Component {
  render() {
    return <RootStack />;
  }
}

export default Router;

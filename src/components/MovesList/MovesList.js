import React, { Component } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import CustomText from "../CustomText";

import { connect } from "react-redux";
import {
  setMove,
  setOpponentHeroHealth,
  removeHeroFromOpponentTeam,
  setOpponentHero,
  setMessage
} from "../../actions";

import getMoveEffectivenessAndDamage from "../../helpers/getMoveEffectivenessAndDamage";

import { Audio } from "expo";

class MovesList extends Component {

}


export default MovesList;

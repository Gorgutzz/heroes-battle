import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

import { connect } from "react-redux";

import { Ionicons } from "@expo/vector-icons";

import { Audio } from "expo";

import CustomText from "../components/CustomText";
import HeroSprite from "../components/HeroSprite";
import HealthBar from "../components/HealthBar";
import ActionList from "../components/ActionList";
import MovesList from "../components/MovesList";
import HeroList from "../components/HeroList";

import hero_data from "../data/hero_data.js";
import moves_data from "../data/moves_data";

import uniqid from "../helpers/uniqid";
import randomInt from "../helpers/randomInt";
import shuffleArray from "../helpers/shuffleArray";

import {
  setOpponentTeam,
  setMove,
  setOpponentPokemon,
  setPokemonHealth,
  removePokemonFromTeam,
  setMessage,
  removePokemonFromOpponentTeam
} from "../actions";

class BattleScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.opponents_channel = null;

    this.backgroundSound = null;
  }

  async componentDidMount() {
    const {
      setOpponentTeam,
      setOpponentHero,

      navigation,
      team,
      setMove,
      removePokemonFromOpposingTeam,
      setMessage,
      setPokemonHealth,
      removePokemonFromTeam
    } = this.props;
    let pusher = navigation.getParam("pusher");

    const { username, pokemon_ids, team_member_ids } = navigation.getParam(
      "opponent"
    );

    let opponent_pokemon_ids = pokemon_ids.split(",");
    let opponent_team_member_ids = team_member_ids.split(",");

    let opponent_team_data = pokemon_data.filter(item => {
      return opponent_pokemon_ids.indexOf(item.id.toString()) !== -1;
    });

    opponent_team_data = opponent_team_data.map((item, index) => {
      let hp = 500;

      let shuffled_moves = shuffleArray(item.moves);
      let selected_moves = shuffled_moves.slice(0, 4);

      let moves = moves_data.filter(item => {
        return selected_moves.indexOf(item.id) !== -1;
      });

      return {
        ...item,
        current_hp: hp,
        total_hp: hp,
        moves: moves,
        is_selected: false
      };
    });

    let sorted_opponent_team = [];
    opponent_hero_ids.forEach((id, index) => {
      let team_member = opponent_team_data.find(
        item => id == item.id.toString()
      );
      team_member.team_member_id = opponent_team_member_ids[index];
      sorted_opponent_team.push(team_member);
    });

    setOpponentTeam(sorted_opponent_team);
    setOpponentPokemon(sorted_opponent_team[0]);

    this.opponents_channel = pusher.subscribe(`private-user-${username}`);
    this.opponents_channel.bind("pusher:subscription_error", status => {
      Alert.alert(
        "Error",
        "Subscription error occurred. Please restart the app"
      );
    });

    this.opponents_channel.bind("pusher:subscription_succeeded", data => {
      const first_turn = navigation.getParam("first_turn");

      if (first_turn != "you") {
        setMessage("Please wait for you turn...");
        setMove("wait-for-turn");
      }
    });

    let my_channel = navigation.getParam("my_channel");

    my_channel.bind("client-switched-pokemon", async ({ team_member_id }) => {
      let pokemon = sorted_opponent_team.find(item => {
        return item.team_member_id == team_member_id;
      });

      setMessage(`Opponent changed Hero to ${hero.label}`);
      setOpponentHero(hero);

      try {
        let crySound = new Audio.Sound();
        await crySound.loadAsync(hero.cry);
        await crySound.playAsync();
      } catch (error) {
        console.log("error loading cry: ", error);
      }

      setTimeout(() => {
        setMove("select-move");
      }, 1500);
    });

    my_channel.bind("client-hero-attacked", data => {
      setHeroHealth(data.team_member_id, data.health);
      setMessage(data.message);

      setTimeout(() => {
        setMove("select-move");
      }, 1500);

      if (data.health < 1) {
        let fainted_hero = team.find(item => {
          return item.team_member_id == data.team_member_id;
        });

        setTimeout(async () => {
          setHeroHealth(data.team_member_id, 0);

          setMessage(`${fainted_hero.label} fainted`);
          removeHeroFromTeam(data.team_member_id);

          try {
            let crySound = new Audio.Sound();
            await crySound.loadAsync(fainted_hero.cry);
            await crySound.playAsync();
          } catch (error) {
            console.log("error loading cry: ", error);
          }
        }, 1000);

        setTimeout(() => {
          setMove("select-hero");
        }, 2000);
      }
    });

    try {
      this.backgroundSound = new Audio.Sound();
      await this.backgroundSound.loadAsync(
        require("../assets/sounds/background/rival.mp3")
      );
      await this.backgroundSound.setIsLoopingAsync(true);
      await this.backgroundSound.playAsync();
    } catch (error) {
      console.log("error loading background sound: ", error);
    }
  }



export default BattleScreen;

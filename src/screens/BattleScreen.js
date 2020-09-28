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
  setOpponentHero,
  setHeromonHealth,
  removeHeroFromTeam,
  setMessage,
  removeHeroFromOpponentTeam
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
      removeHeroFromOpposingTeam,
      setMessage,
      setHeroHealth,
      removeHeroFromTeam
    } = this.props;
    let pusher = navigation.getParam("pusher");

    const { username, hero_ids, team_member_ids } = navigation.getParam(
      "opponent"
    );

    let opponent_hero_ids = hero_ids.split(",");
    let opponent_team_member_ids = team_member_ids.split(",");

    let opponent_team_data = hero_data.filter(item => {
      return opponent_hero_ids.indexOf(item.id.toString()) !== -1;
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
    setOpponentHero(sorted_opponent_team[0]);

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

    my_channel.bind("client-switched-hero", async ({ team_member_id }) => {
      let hero = sorted_opponent_team.find(item => {
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

  render() {
    const {
      team,
      move,
      move_display_text,
      hero,
      opponent_hero,
      backToMove,

      message
    } = this.props;

    return (
      <View style={styles.container}>
        <CustomText styles={[styles.headerText]}>Fight!</CustomText>

        <View style={styles.battleGround}>
          {opponent_hero && (
            <View style={styles.opponent}>
              <HealthBar
                currentHealth={opponent_hero.current_hp}
                totalHealth={opponent_hero.total_hp}
                label={opponent_hero.label}
              />
              <HeroFullSprite
                hero={opponent_hero.label}
                spriteFront={opponent_hero.front}
                spriteBack={opponent_hero.back}
                orientation={"front"}
                isAlive={opponent_hero.current_hp > 0}
                currentHealth={opponent_hero.current_hp}
              />
            </View>
          )}

          {hero && (
            <View style={styles.currentPlayer}>
              <HealthBar
                currentHealth={hero.current_hp}
                totalHealth={hero.total_hp}
                label={hero.label}
              />

              <HeroFullSprite
                hero={hero.label}
                spriteFront={hero.front}
                spriteBack={hero.back}
                orientation={"back"}
                isAlive={hero.current_hp > 0}
                currentHealth={hero.current_hp}
              />
            </View>
          )}
        </View>

        <View style={styles.controls}>
          <View style={styles.controlsHeader}>
            {(move == "select-hero" || move == "select-hero-move") && (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  backToMove();
                }}
              >
                <Ionicons name="md-arrow-round-back" size={20} color="#333" />
              </TouchableOpacity>
            )}

            {move != "wait-for-turn" && (
              <CustomText styles={styles.controlsHeaderText}>
                {move_display_text}
              </CustomText>
            )}

            {move == "wait-for-turn" && (
              <CustomText styles={styles.message}>{message}</CustomText>
            )}
          </View>

          {move == "select-move" && <ActionList />}

          {move == "select-hero" &&
            this.opponents_channel && (
              <HeroList
                data={team}
                scrollEnabled={false}
                numColumns={2}
                action_type={"switch-hero"}
                opponents_channel={this.opponents_channel}
              />
            )}

          {hero &&
            this.opponents_channel &&
            move == "select-hero-move" && (
              <MovesList
                moves={hero.moves}
                opponents_channel={this.opponents_channel}
              />
            )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ battle }) => {
  const {
    team,
    move,
    move_display_text,
    hero,
    opponent_team,
    opponent_hero,

    message
  } = battle;
  return {
    team,
    move,
    move_display_text,
    hero,
    opponent_team,
    opponent_hero,

    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    backToMove: () => {
      dispatch(setMove("select-move"));
    },
    setOpponentTeam: team => {
      dispatch(setOpponentTeam(team));
    },
    setOpponentHero: hero => {
      dispatch(setOpponentHero(hero));
    },

    setMessage: message => {
      dispatch(setMessage(message));
    },
    setHeroHealth: (team_member_id, health) => {
      dispatch(setHeroHealth(team_member_id, health));
    },
    setMove: move => {
      dispatch(setMove(move));
    },
    removeHeroFromTeam: team_member_id => {
      dispatch(removeHeroFromTeam(team_member_id));
    },
    removeHeroFromOpposingTeam: team_member_id => {
      dispatch(removeHeroFromOpposingTeam(team_member_id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleScreen);

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerText: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center"
  },
  battleGround: {
    flex: 8,
    padding: 12,
    flexDirection: "column"
  },
  currentPlayer: {
    alignSelf: "flex-start",
    alignItems: "center"
  },
  opponent: {
    alignSelf: "flex-end",
    alignItems: "center"
  },
  controls: {
    flex: 3,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#404040"
  },
  controlsHeader: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 10
  },
  backButton: {
    paddingLeft: 5,
    paddingRight: 5
  },
  controlsHeaderText: {
    paddingTop: 5
  },
  message: {
    fontSize: 15
  }
};

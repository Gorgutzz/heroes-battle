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
  render() {
    const { moves } = this.props;

    return (
      <FlatList
        data={moves}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={this.selectMove.bind(this, item)}
          >
            <CustomText styles={styles.label}>{item.title}</CustomText>
          </TouchableOpacity>
        )}
      />
    );
  }

  selectMove = async item => {
    const {
      moves,
      opponent_hero,
      setOpponentHeroHealth,

      backToMove,
      hero,
      setMessage,
      setMove,
      removeheroFromOpponentTeam,
      setOpponenthero,
      opponents_channel
    } = this.props;

    let { effectiveness, damage } = getMoveEffectivenessAndDamage(
      item,
      opponent_hero
    );
    let health = opponent_hero.current_hp - damage;

    let message = `${hero.label} used ${item.title}! ${effectiveness}`;

    setMessage(message);

    opponents_channel.trigger("client-hero-attacked", {
      team_member_id: opponent_hero.team_member_id,
      message: message,
      health: health
    });

    setOpponentheroHealth(opponent_hero.team_member_id, health);

    if (health < 1) {
      setOpponentHeroHealth(opponent_hero.team_member_id, 0);
      removeHeroFromOpponentTeam(opponent_hero.team_member_id);

      try {
        let crySound = new Audio.Sound();
        await crySound.loadAsync(opponent_hero.cry);
        await crySound.playAsync();
      } catch (error) {
        console.log("error loading cry: ", error);
      }
    }

    setTimeout(() => {
      setMessage("Please wait for your turn...");
      setMove("wait-for-turn");
    }, 1500);
  };
}

const mapStateToProps = ({ battle }) => {
const { opponent_hero, hero } = battle;

  return {
    opponent_hero,
    hero
  };
};

const mapDispatchToProps = dispatch => {
  return {
    backToMove: () => {
      dispatch(setMove("select-move"));
    },
    setOpponentHeroHealth: (team_member_id, health) => {
      dispatch(setOpponentHeroHealth(team_member_id, health));
    },
    removeHeroFromOpponentTeam: team_member_id => {
      dispatch(removeHeroFromOpponentTeam(team_member_id));
    },
    setOpponenthero: () => {
      dispatch(setOpponentHero());
    },

    setMessage: message => {
      dispatch(setMessage(message));
    },
    setMove: move => {
      dispatch(setMove(move));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovesList);

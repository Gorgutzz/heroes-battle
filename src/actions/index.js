import {
  SELECT_HERO,
  SET_TEAM,
  SET_OPPONENT_TEAM,
  SET_MOVE,
  SET_HERO,
  SET_OPPONENT_HERO,
  SET_HERO_HEALTH,
  SET_OPPONENT_HERO_HEALTH,
  SET_MESSAGE,
  REMOVE_HERO_FROM_TEAM,
  REMOVE_HERO_FROM_OPPONENT_TEAM
} from "./types";

export const selectHero = (id, hero_data, is_selected) => {
  return {
    type: SELECT_HERO,
    id,
    hero_data,
    is_selected
  };
};

export const setTeam = team => {
  return {
    type: SET_TEAM,
    team
  };
};

export const setOpponentTeam = team => {
  return {
    type: SET_OPPONENT_TEAM,
    team
  };
};

export const setMove = move => {
  return {
    type: SET_MOVE,
    move
  };
};

export const setHero = hero => {
  return {
    type: SET_HERO,
    hero
  };
};

export const setOpponentHero = hero => {
  return {
    type: SET_OPPONENT_HERO,
    hero
  };
};

export const setHeroHealth = (team_member_id, health) => {
  return {
    type: SET_HERO_HEALTH,
    team_member_id,
    health
  };
};

export const setOpponentHeroHealth = (team_member_id, health) => {
  return {
    type: SET_OPPONENT_HERO_HEALTH,
    team_member_id,
    health
  };
};

export const setMessage = message => {
  return {
    type: SET_MESSAGE,
    message
  };
};

export const removeHeroFromTeam = team_member_id => {
  return {
    type: REMOVE_HERO_FROM_TEAM,
    team_member_id
  };
};

export const removeHeroFromOpponentTeam = team_member_id => {
  return {
    type: REMOVE_HERO_FROM_OPPONENT_TEAM,
    team_member_id
  };
};

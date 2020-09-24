import {
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
} from "../actions/types";

const move_display_text = {
  "wait-for-turn": "",
  "select-move": "Select your move",
  "select-hero": "Which Hero will you use?",
  "select-hero-move": "Which attack will you use?"
};

const default_move = "select-move";

const INITIAL_STATE = {
  move: default_move,
  move_display_text: move_display_text[default_move],
  hero: null,
  opponent_hero: null,
  team: [],
  opponent_team: [],
  message: ""
};

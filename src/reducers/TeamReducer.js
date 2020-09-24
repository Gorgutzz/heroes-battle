import { SELECT_HERO } from "../actions/types";

import hero_data from "../data/hero_data";

const INITIAL_STATE = {
  hero: hero_data,
  selected_hero: []
};

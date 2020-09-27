import { SELECT_HERO } from "../actions/types";

import hero_data from "../data/hero_data";

const INITIAL_STATE = {
  hero: hero_data,
  selected_hero: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_HERO:
      let hero = [...state.hero];
      let selected_hero = [...state.selected_hero];

      const is_selected = action.is_selected;

      if (state.selected_hero.length < 6 || is_selected) {
        hero = hero.map(item => {
          if (item.id == action.id) {
            item.is_selected = !is_selected;
          }
          return item;
        });

        if (is_selected) {
          const index_to_remove = selected_hero.findIndex(
            item => item.id == action.id
          );
          selected_hero.splice(index_to_remove, 1);
        } else {
          selected_hero.push(action.hero_data);
        }
      }

      return { ...state, hero, selected_hero };

    default:
      return state;
  }
};

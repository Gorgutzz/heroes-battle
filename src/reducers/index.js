import { combineReducers } from "redux";
import BattleReducer from "./BattleReducer";

export default combineReducers({
  battle: BattleReducer
});

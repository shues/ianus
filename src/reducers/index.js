import { combineReducers } from "redux";

const curr = (state = "⌛", action) => {
  switch (action.type) {
    case "MENU_CLICK":
      return action.curr;
    default:
      return state;
  }
};

const controlElements = (state = ["⌛", "📝", "#", "?", "⚙"], action) => {
  return state;
};

export default combineReducers({
  curr,
  controlElements,
});

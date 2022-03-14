import * as actionTypes from "./action.js";
const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.ADD_FIVE:
      return { ...state, counter: state.counter + action.playload };
    case actionTypes.REMOVE_FIVE:
      return { ...state, counter: state.counter - action.playload };
    case actionTypes.RESET:
      return { counter: initialState.counter };
    default:
      return state;
  }
};
export default reducer;

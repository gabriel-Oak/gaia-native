import MainActionTypes from "./mainActionsTypes";

const INITIAL_STATE = {
  title: 'Gaia'
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MainActionTypes.SET_TITLE:
      return { ...state, title: action.title }
    default:
      return state;
  }
}

export default mainReducer;

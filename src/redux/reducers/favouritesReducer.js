import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  content: [],
};
const favouritesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,

        content: state.content.concat(action.payload),
      };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,

        content: state.content.filter((fav) => {
          if (fav._id === action.payload) {
            return false;
          } else {
            return true;
          }
        }),
      };
    default:
      return state;
  }
};

export default favouritesReducers;

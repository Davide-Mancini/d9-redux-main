const initialState = {
  favourites: {
    content: [],
  },
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.concat(action.payload),
        },
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((fav) => {
            if (fav._id === action.payload) {
              return false;
            } else {
              return true;
            }
          }),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;

import { GET_SEARCHED_JOB } from "../actions";

const initialState = {
  search: [],
};
const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCHED_JOB:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducers;

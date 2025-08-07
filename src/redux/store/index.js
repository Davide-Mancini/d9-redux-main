import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducers from "../reducers/favouritesReducer";
import searchReducers from "../reducers/searchReducer";

const combinedReducers = combineReducers({
  content: favouritesReducers,
  search: searchReducers,
});
const store = configureStore({
  reducer: combinedReducers,
});
export default store;

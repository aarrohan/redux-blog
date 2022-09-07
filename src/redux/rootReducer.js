// Dependencies
import { combineReducers } from "redux";

// Reducers
import articlesReducer from "./articles/reducer";

// Root Reducer
const rootReducer = combineReducers({
  articles: articlesReducer,
});

// Export
export default rootReducer;

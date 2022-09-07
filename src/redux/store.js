// Dependencies
import { createStore } from "redux";

// Root Reducer
import rootReducer from "./rootReducer";

// Store
const store = createStore(rootReducer);

// Export
export default store;

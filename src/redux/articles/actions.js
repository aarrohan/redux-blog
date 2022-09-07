// Action Types
import {
  FILTER_BY_QUERY,
  FILTER_BY_CATEGORIES,
  FILTER_BY_AUTHORS,
} from "./actionTypes";

// Actions
const filterByQuery = (payload) => {
  return {
    type: FILTER_BY_QUERY,
    payload,
  };
};

const filterByCategories = (payload) => {
  return {
    type: FILTER_BY_CATEGORIES,
    payload,
  };
};

const filterByAuthors = (payload) => {
  return {
    type: FILTER_BY_AUTHORS,
    payload,
  };
};

// Export
export { filterByQuery, filterByCategories, filterByAuthors };

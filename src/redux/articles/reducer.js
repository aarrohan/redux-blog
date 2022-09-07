// Action Types
import {
  FILTER_BY_QUERY,
  FILTER_BY_CATEGORIES,
  FILTER_BY_AUTHORS,
} from "./actionTypes";

// Initial State
const initialState = {
  filters: {
    query: "",
    categories: [],
    authors: [],
  },
  articles: [
    {
      category: "Marketing",
      author: "Learn with Sumit",
      authorProfileImage:
        "https://avatars.githubusercontent.com/u/73503432?v=4",
      image:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      title: "Boost your conversion rate with SEO",
      readTime: "6 min",
      date: "11 Jul, 2022",
    },
    {
      category: "Marketing",
      author: "Abdullah Al Reza Rohan",
      authorProfileImage:
        "https://avatars.githubusercontent.com/u/76879321?v=4",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      title: "Grow audience with Facebook PR",
      readTime: "4 min",
      date: "13 Jul, 2022",
    },
    {
      category: "Coding & Programming",
      author: "Learn with Sumit",
      authorProfileImage:
        "https://avatars.githubusercontent.com/u/73503432?v=4",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      title: "HTML Tips & Tricks",
      readTime: "10 min",
      date: "18 Jul, 2022",
    },
  ],
};

// Reducer
const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Filter by Query
    case FILTER_BY_QUERY:
      return {
        ...state,
        filters: {
          ...state.filters,
          query: action.payload.query,
          categories: [...state.filters.categories],
          authors: [...state.filters.authors],
        },
        articles: [...state.articles],
      };

    // Filter by Categories
    case FILTER_BY_CATEGORIES:
      const categoryExists = state.filters.categories.includes(
        action.payload.category
      );

      if (!categoryExists) {
        // Add
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: [...state.filters.categories, action.payload.category],
            authors: [...state.filters.authors],
          },
          articles: [...state.articles],
        };
      } else {
        // Remove
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: state.filters.categories.filter(
              (category) => category !== action.payload.category
            ),
            authors: [...state.filters.authors],
          },
          articles: [...state.articles],
        };
      }

    // Filter by Authors
    case FILTER_BY_AUTHORS:
      const authorExists = state.filters.authors.includes(
        action.payload.author
      );

      if (!authorExists) {
        // Add
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: [...state.filters.categories],
            authors: [...state.filters.authors, action.payload.author],
          },
          articles: [...state.articles],
        };
      } else {
        // Remove
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: [...state.filters.categories],
            authors: state.filters.authors.filter(
              (author) => author !== action.payload.author
            ),
          },
          articles: [...state.articles],
        };
      }

    // Default
    default:
      return state;
  }
};

// Export
export default articlesReducer;

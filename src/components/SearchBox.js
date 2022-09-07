import React, { useCallback } from "react";

// Dependencies
import { useDispatch } from "react-redux";

// Actions
import { filterByQuery } from "../redux/articles/actions";

// Search Box
const SearchBox = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Functions
  const debounce = (func) => {
    let timer;

    return (...args) => {
      const context = this;

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (event) => {
    dispatch(
      filterByQuery({
        query: event.target.value,
      })
    );
  };

  const debouncedHandleChange = useCallback(debounce(handleChange), []);

  return (
    <React.Fragment>
      <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input
          className="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          placeholder="Search"
          onChange={debouncedHandleChange}
        />
        <img
          className="inline h-6 cursor-pointer"
          src="/assets/search.svg"
          alt="Search"
        />
      </div>
    </React.Fragment>
  );
};

// Export
export default SearchBox;

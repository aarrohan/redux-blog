import React from "react";

// Dependencies
import { useDispatch } from "react-redux";

// Actions
import { filterByCategories, filterByAuthors } from "../redux/articles/actions";

// Article
const Article = ({ filters, article }) => {
  // Dispatch
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={article.image}
            alt=""
          />
        </div>

        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p
              className="text-sm font-medium text-indigo-600 cursor-pointer"
              onClick={() => {
                if (!filters.categories.includes(article.category)) {
                  dispatch(
                    filterByCategories({
                      category: article.category,
                    })
                  );
                }
              }}
            >
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {article.category}
              </span>
            </p>

            <p className="block mt-1">
              <p className="text-xl font-semibold text-gray-900">
                {article.title}
              </p>
            </p>
          </div>

          <div className="mt-6 flex items-center">
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => {
                if (!filters.authors.includes(article.author)) {
                  dispatch(
                    filterByAuthors({
                      author: article.author,
                    })
                  );
                }
              }}
            >
              <img
                className="h-10 w-10 rounded-full"
                src={article.authorProfileImage}
                alt=""
              />
            </div>

            <div className="ml-3">
              <p
                className="text-sm font-medium text-gray-900 cursor-pointer"
                onClick={() => {
                  if (!filters.authors.includes(article.author)) {
                    dispatch(
                      filterByAuthors({
                        author: article.author,
                      })
                    );
                  }
                }}
              >
                {article.author}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">{article.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{article.readTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

// Export
export default Article;

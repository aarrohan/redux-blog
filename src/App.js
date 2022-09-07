import React from "react";

// Dependencies
import { useDispatch, useSelector } from "react-redux";

// Actions
import { filterByCategories, filterByAuthors } from "./redux/articles/actions";

// Components
import SearchBox from "./components/SearchBox";
import Article from "./components/Article";

// App
const App = () => {
  // States
  const articlesState = useSelector((state) => state.articles);

  // Dispatch
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {/* Search Box */}
      <SearchBox />

      {/* Articles */}
      <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              ALL BLOGS ARE HERE
            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>

          {articlesState.filters.categories.length > 0 ? (
            <div className="mt-5 flex">
              <p className="text-sm font-medium">Categories: &nbsp;</p>

              {articlesState.filters.categories.map((category, index) => {
                return (
                  <p
                    className="text-sm font-medium text-indigo-600 cursor-pointer"
                    key={index}
                    onClick={() => {
                      dispatch(
                        filterByCategories({
                          category,
                        })
                      );
                    }}
                  >
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {category} &nbsp; <span>x</span>
                    </span>
                    &nbsp;
                  </p>
                );
              })}
            </div>
          ) : null}

          {articlesState.filters.authors.length > 0 ? (
            <div className="mt-5 flex">
              <p className="text-sm font-medium">Authors: &nbsp;</p>

              {articlesState.filters.authors.map((author, index) => {
                return (
                  <p
                    className="text-sm font-medium text-indigo-600 cursor-pointer"
                    key={index}
                    onClick={() => {
                      dispatch(
                        filterByAuthors({
                          author,
                        })
                      );
                    }}
                  >
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {author} &nbsp; <span>x</span>
                    </span>
                    &nbsp;
                  </p>
                );
              })}
            </div>
          ) : null}

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {articlesState.articles
              .filter((article) => {
                if (articlesState.filters.query.length > 0) {
                  let articleTitle = article.title.toLowerCase();

                  return (
                    articleTitle.indexOf(
                      articlesState.filters.query.toLowerCase()
                    ) > -1
                  );
                }

                return true;
              })
              .filter((article) => {
                if (articlesState.filters.categories.length > 0) {
                  return articlesState.filters.categories.includes(
                    article.category
                  );
                }

                return true;
              })
              .filter((article) => {
                if (articlesState.filters.authors.length > 0) {
                  return articlesState.filters.authors.includes(article.author);
                }

                return true;
              })
              .map((article, index) => {
                return (
                  <Article
                    key={index}
                    filters={articlesState.filters}
                    article={article}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

// Export
export default App;

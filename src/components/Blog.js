import React, { useRef, useEffect, useState, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./Blog.css";
import { CalendarDateRangeIcon, TagIcon } from "@heroicons/react/24/outline";

function Blog() {
  const location = useLocation();
  const tagsPost1 = ["blog"];

  const tags = ["blog", "css"];
  const [searchText, setSearchText] = useState("");
  const [filterTags, setFilterTags] = useState(tags);
  const [filterTag, setFilterTag] = useState("");
  const [isTagsListVisible, setIsTagsListVisible] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdown = useRef(null);
  const themeModeInitial = location?.state?.themeMode
    ? location.state.themeMode
    : "light";
  const [themeMode, setThemeMode] = useState(themeModeInitial);

  const handleKey = () => {
    if (searchText.trim() === "") {
      setIsTagsListVisible(false);
      setFilterTag("");
      return;
    }
    let filteredTags = tags.filter((tag) =>
      tag.includes(searchText.toLowerCase()),
    );
    setFilterTags(filteredTags);
    if (filteredTags.length > 0) {
      setIsTagsListVisible(true);
    } else {
      setIsTagsListVisible(false);
    }
  };

  const selectTag = (item) => {
    setSearchText(item);
    setIsTagsListVisible(false);
    setFilterTag(item);
  };

  const handleClickOutside = (event) => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setIsTagsListVisible(false);
    }
  };

  const isPostVisible = (tagList) => {
    if (filterTag === "") {
      return true;
    }
    return tagList.includes(filterTag);
  };

  const toggleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  const clearTagSearch = () => {
    setSearchText("");
    setFilterTag("");
  };

  const toggleSearch = () => {
    if (search) {
      clearTagSearch();
    }
    setSearch(!search);
  };

  useEffect(() => {
    if (location?.state?.themeMode) {
      setThemeMode(location.state.themeMode);
    }
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog Template</title>
        <meta name="description" content="blog template" />
        <meta name="keywords" content="blog" />
        <meta name="author" content="Marco Cella" />
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="Blog Template" />
        <meta property="og:description" content="blog template" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={themeMode === "dark" ? "dark" : "light"}>
        <Navigation
          page="blob"
          themeMode={themeMode}
          onThemeChange={toggleThemeMode}
          onSearchChange={toggleSearch}
        ></Navigation>
        <div className="flex flex-col items-center content min-h-[calc(100vh-172px)] dark:bg-slate-custom1">
          {search && (
            <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 mx-0">
              <div className="mt-4 flex justify-items-start content relative">
                <input
                  type="text"
                  id="searchInput"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyUp={handleKey}
                  placeholder=""
                  autoComplete="off"
                  className="w-[calc(100%-40px)] p-4 ps-10 pr-10 text-sm lg:text-base px-4 py-2 border border-gray-300 rounded-lg dark:bg-slate-custom2 dark:text-gray-custom1 focus:outline-none focus:ring-2 focus:ring-blue-500 float-left"
                />
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                {searchText !== "" && (
                  <button
                    type="button"
                    className="relative inset-y-0 -inset-x-8 flex items-center pe-3"
                    onClick={clearTagSearch}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                )}
                {isTagsListVisible && (
                  <ul
                    ref={dropdown}
                    className="w-5/12 bg-white1 absolute z-10 mt-10 text-sm lg:text-base border border-gray-300 rounded-lg dark:bg-slate-custom2 dark:text-gray-custom1 shadow-lg max-h-48 overflow-y-auto"
                  >
                    {filterTags.map((item, index) => (
                      <li
                        key={`tag-${index}`}
                        onClick={() => selectTag(item)}
                        className="px-4 py-1 hover:bg-gray-200 hover:dark:bg-gray-600 cursor-pointer text-left"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="line-break"></div>
            </div>
          )}

          {isPostVisible(tagsPost1) && (
            <Fragment>
              <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 mx-0">
                <Link to="/Post1" state={{ themeMode: themeMode }}>
                  <div className="mt-16 flex justify-items-start content">
                    <p className="font-semibold text-left text-lg lg:text-2xl w-full md:w-full dark:text-gray-custom1">
                      Example post
                    </p>
                    <div className="line-break"></div>
                    <span className="flex items-center">
                      <CalendarDateRangeIcon className="h-6 w-6 stroke-orange-400 mr-2 text-gray-custom3 dark:text-gray-400" />
                      <time className="text-gray-custom2 text-left text-sm lg:text-base w-full md:w-full dark:text-gray-custom4">
                        Aug 24, 2024
                      </time>
                    </span>
                    <div className="line-break"></div>
                    <p className="mt-4 text-left text-base lg:text-lg line-clamp-3 prose dark:prose-dark dark:prose-invert">
                      The following is an example post. The first paragraph of the
                      article serves as content for the card in the Blog page.
                    </p>
                  </div>
                </Link>
                <div className="mt-4 flex items-center text-left">
                  <TagIcon className="h-5 w-5 stroke-orange-400 mr-1 text-gray-custom3 dark:text-gray-400" />
                  {tagsPost1.map((item, index) => (
                    <span
                      key={`tag-${index}`}
                      className="m-1 px-1.5 py-0.5 border rounded border-gray-custom3 text-gray-custom2 dark:border-gray-400 dark:text-gray-custom4 text-xs lg:text-sm font-medium text-left text-base prose"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="line-break"></div>
            </Fragment>
          )}
          <div className="mb-16"></div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Blog;

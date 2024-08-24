import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./Blog.css";

function Blog() {
  const tagsPost1 = ["blog", "css"];

  const tags = ["blog", "css"];
  const [searchText, setSearchText] = useState("");
  const [filterTags, setFilterTags] = useState(tags);
  const [filterTag, setFilterTag] = useState("");
  const [isTagsListVisible, setIsTagsListVisible] = useState(false);
  const dropdown = useRef(null);

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

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      <Navigation page="blob"></Navigation>
      <div className="flex justify-center content">
        <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-4/12 mx-0">
          <div className="mt-4 flex justify-items-start content relative">
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
            <input
              type="text"
              id="searchInput"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={handleKey}
              placeholder="Tags"
              autoComplete="off"
              className="w-4/12 p-4 ps-10 text-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {isTagsListVisible && (
              <ul
                ref={dropdown}
                className="w-5/12 bg-white1 absolute z-10 mt-10 text-sm border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto"
              >
                {filterTags.map((item, index) => (
                  <li
                    key={`tag-${index}`}
                    onClick={() => selectTag(item)}
                    className="px-4 py-1 hover:bg-gray-200 cursor-pointer text-left"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="line-break"></div>

        {isPostVisible(tagsPost1) && (
          <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-4/12 mx-0">
            <Link to="/post1">
              <div className="mt-16 flex justify-items-start content">
                <p className="font-semibold text-left text-lg w-full md:w-full">
                  Example post
                </p>
                <div className="line-break"></div>
                <time className="text-gray-custom2 text-left text-sm w-full md:w-full">
                  Aug 24, 2024
                </time>
                <div className="line-break"></div>
                <p className="mt-4 text-left text-base line-clamp-3 prose">
                  The following is an example post. The first paragraph of the article 
                  serves as content for the card in the Blog page.
                </p>
              </div>
            </Link>
            <div className="mt-4 mb-16 text-left">
              {tagsPost1.map((item, index) => (
                <span
                  key={`tag-${index}`}
                  className="leading-7 mt-4 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 text-left text-base prose w-11/12 md:w-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;

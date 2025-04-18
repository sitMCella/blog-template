import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  const [themeMode, setThemeMode] = useState(props.themeMode);

  const toggleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
    props.onThemeChange();
  };

  const toggleSearch = () => {
    props.onSearchChange();
  };

  useEffect(() => {
    setThemeMode(props.themeMode);
  });

  return (
    <div>
      <nav className="sticky top-0 bg-gray-custom1 dark:bg-slate-custom3 flex justify-center">
        <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 mx-0 flex justify-left header">
          <div className="my-4">
            <span className="my-1.5 m-4">
              <span className="corner-bottm-left text-gray-900 dark:text-white1"></span>
              <span className="text-gray-900 dark:text-white1 m-2 tracking-wide text-lg">
                Blog Name
              </span>
              <span className="corner-top-right text-gray-900 dark:text-white1"></span>
            </span>
          </div>
          <div className="line-break"></div>
          <div className="w-full min-w-full">
            <div className="float-left">
              <Link to="/blog" state={{ themeMode: themeMode }}>
                <button
                  type="button"
                  className={`text-gray-900 focus:outline-none border-none hover:bg-gray-100 focus:bg-gray-100 font-medium rounded-full text-sm lg:text-base px-3 py-1.5 me-2 mb-2 dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:border-gray-100 ${props.page !== "blob" && "dark:text-gray-100 hover:dark:text-gray-900 dark:bg-slate-custom2"} ${props.page === "blob" && "bg-gray-100 dark:bg-gray-custom4"}`}
                >
                  Blog
                </button>
              </Link>
              <Link to="/profile" state={{ themeMode: themeMode }}>
                <button
                  type="button"
                  className={`text-gray-900 focus:outline-none border-none hover:bg-gray-100 focus:bg-gray-100 font-medium rounded-full text-sm lg:text-base px-3 py-1.5 me-2 mb-2 dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:border-gray-100 ${props.page !== "profile" && "dark:text-gray-100 hover:dark:text-gray-900 dark:bg-slate-custom2"} ${props.page === "profile" && "bg-gray-100 dark:bg-gray-custom4"}`}
                >
                  Profile
                </button>
              </Link>
            </div>
            <div className="flex float-right h-full items-center text-gray-900 dark:text-gray-100">
              {props.page == "blob" && (
                <button type="button" className="mr-4" onClick={toggleSearch}>
                  <svg
                    className="size-4 mb-2"
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
                </button>
              )}
              <button type="button" onClick={toggleThemeMode}>
                {themeMode === "light" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 mb-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
                {themeMode === "dark" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 mb-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

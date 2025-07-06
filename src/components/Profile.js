import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./Profile.css";

function Profile() {
  const location = useLocation();
  const themeModeInitial = location.state
    ? location?.state?.themeMode
    : "light";
  const [themeMode, setThemeMode] = useState(themeModeInitial);

  const toggleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  useEffect(() => {
    if (location?.state?.themeMode) {
      setThemeMode(location.state.themeMode);
    }
  }, [location]);

  return (
    <div className={themeMode === "dark" ? "dark" : "light"}>
      <Navigation
        page="profile"
        themeMode={themeMode}
        onThemeChange={toggleThemeMode}
      ></Navigation>
      <div className="flex flex-col items-center content min-h-[calc(100vh-172px)] dark:bg-slate-custom1">
        <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 mx-0">
          <div className="mt-4 flex justify-items-start content relative">
            <p className="font-semibold text-left text-lg lg:text-2xl w-full md:w-full dark:text-gray-custom1">
              About me
            </p>
            <div className="line-break"></div>
            <p className="leading-7 mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert w-full">
              The following is the Profile page.
            </p>
            <div className="line-break"></div>
            <p className="leading-7 mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert w-full">
              Add content.
            </p>
          </div>
          <div className="mt-4 flex justify-items-start content relative">
            <p className="font-semibold text-left text-lg lg:text-2xl w-full md:w-full dark:text-gray-custom1">
              Elsewhere
            </p>
            <div className="line-break"></div>
            <p className="mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert">
              <a
                className="underline"
                href="link1"
                target="_blank"
                rel="noreferrer"
              >
                Link1
              </a>
            </p>
            <div className="line-break"></div>
            <p className="mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert">
              <a
                className="underline"
                href="link2"
                target="_blank"
                rel="noreferrer"
              >
                Link2
              </a>
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Profile;

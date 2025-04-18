import React, { useEffect, useState } from "react";

function Footer(props) {
  const [themeMode, setThemeMode] = useState(props.themeMode);

  const toggleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
    props.onThemeChange();
  };

  useEffect(() => {
    setThemeMode(props.themeMode);
  });

  return (
    <div>
      <nav className="sticky top-0 bg-gray-custom1 dark:bg-slate-custom3 flex justify-center">
        <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 mx-0 flex justify-left header">
          <div className="my-4">
            <span>
              <span className="text-gray-900 dark:text-white1 tracking-wide text-sm lg:text-base">
                &#169; Marco Cella • all rights reserved
              </span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;

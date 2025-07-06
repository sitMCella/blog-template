import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";
import "prismjs/components/prism-javascript";
import { CalendarDateRangeIcon, TagIcon } from "@heroicons/react/24/outline";
import image from "./images/image.jpg";
import "./css/Post1.css";

function Post1() {
  const location = useLocation();
  const themeModeInitial = location?.state?.themeMode
    ? location.state.themeMode
    : "light";
  const [themeMode, setThemeMode] = useState(themeModeInitial);
  const tags = ["blog"];

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
    window.scrollTo(0, 0);
    Prism.hooks.add("before-highlight", function (env) {
      env.code = env.element.innerText;
    });
    Prism.highlightAll();
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Example Blog Post</title>
        <meta name="description" content="example blog post" />
        <meta name="keywords" content="blog, example" />
        <meta name="author" content="Marco Cella" />
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="Example Blog Post" />
        <meta property="og:description" content="example blog post" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={themeMode === "dark" ? "dark" : "light"}>
        <Navigation
          themeMode={themeMode}
          onThemeChange={toggleThemeMode}
        ></Navigation>
        <div className="flex flex-col items-center content min-h-[calc(100vh-172px)] dark:bg-slate-custom1">
          <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 mx-0">
            <div className="mt-16 mb-4 flex justify-items-start content">
              <h1 className="font-semibold text-left text-lg lg:text-2xl w-full md:w-full dark:text-gray-custom1">
                Example Blog Post
              </h1>
              <div className="line-break"></div>
              <span className="flex items-center">
                <CalendarDateRangeIcon className="h-6 w-6 stroke-orange-400 mr-2 text-gray-custom3 dark:text-gray-400" />
                <time className="text-gray-custom2 text-left text-sm lg:text-base w-full md:w-full dark:text-gray-custom4">
                  Aug 24, 2024
                </time>
              </span>
              <div className="line-break"></div>
              <div className="articleBody">
                <p className="leading-7 mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert w-full">
                  The following is an example post. The first paragraph of the
                  article serves as content for the card in the Blog page.
                </p>
                <p className="leading-7 mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert w-full">
                  This web site uses a custom blog design and is built using
                  React and Tailwind CSS [1].
                </p>
                <p className="leading-7 mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert w-full">
                  The GitHub repository of the project is the following:
                  <br />
                  <a
                    className="underline"
                    href="https://github.com/sitMCella/blog-template"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sitMCella/blog-template
                  </a>
                </p>
                <div className="leading-7 mt-4 text-center w-full image-container">
                  <img src={image} alt="Image" className="image"></img>
                </div>
                <p className="leading-7 mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert w-full">
                  The web application uses Prism.js [2] to display the code
                  snippets.
                </p>
                <pre className="mt-4 text-left h-68 w-full">
                  <code className="language-javascript">
                    function greetUser(name) &#123;
                    <br />
                    &nbsp;&nbsp;if (!name) &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello, stranger!");
                    <br />
                    &nbsp;&nbsp;&#125; else &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log(`Hello,
                    $&#123;name&#125;!`);
                    <br />
                    &nbsp;&nbsp;&#125;
                    <br />
                    &#125;
                    <br />
                    <br />
                    greetUser("Alice");
                  </code>
                </pre>
                <p className="leading-7 mt-4 text-left text-base lg:text-lg prose dark:prose-dark dark:prose-invert w-full">
                  [1]{" "}
                  <a
                    className="underline"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    tailwindcss
                  </a>
                  <br />
                  [2]{" "}
                  <a
                    className="underline"
                    href="https://prismjs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    prismjs
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center text-left">
              <TagIcon className="h-5 w-5 stroke-orange-400 mr-1 text-gray-custom3 dark:text-gray-400" />
              {tags.map((item, index) => (
                <span
                  key={`tag-${index}`}
                  className="m-1 px-1.5 py-0.5 border rounded border-gray-custom3 text-gray-custom2 dark:border-gray-400 dark:text-gray-custom4 text-xs lg:text-sm font-medium text-left text-base prose"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-16"></div>
          <div></div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Post1;

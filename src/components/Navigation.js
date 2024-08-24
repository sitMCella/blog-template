import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div>
      <nav className="sticky top-0 bg-gray-custom1 flex justify-center">
        <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-4/12 mx-0 flex justify-left header">
          <div className="my-3">
            Blog title
          </div>
          <div className="line-break"></div>
          <div>
            <span>
              <Link to="/blog">
                <button
                  type="button"
                  className={`text-gray-900 focus:outline-none border-none hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:text-gray-900 dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:border-gray-100 dark:focus:bg-gray-100 dark:active:bg-gray-100 ${props.page === "blob" && "bg-gray-100 dark:bg-gray-100"}`}
                >
                  Blog
                </button>
              </Link>
              <Link to="/profile">
                <button
                  type="button"
                  className={`text-gray-900 focus:outline-none border-none hover:bg-gray-100 focus:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:text-gray-900 dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:border-gray-100 dark:focus:bg-gray-100 dark:active:bg-gray-100 ${props.page === "profile" && "bg-gray-100 dark:bg-gray-100"}`}
                >
                  Profile
                </button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

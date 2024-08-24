import Navigation from "./Navigation";
import "./Profile.css";

function Profile() {
  return (
    <div>
      <Navigation page="profile"></Navigation>
      <div className="flex justify-center content">
        <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-5/12 xl:w-4/12 mx-0">
          <div className="mt-16 flex justify-items-start content">
            <p className="font-semibold text-left text-lg w-full md:w-full">
              About me
            </p>
            <div className="line-break"></div>
            <p className="leading-7 mt-4 text-left text-base prose w-11/12 md:w-full">
              The following is the Profile page.
            </p>
          </div>
          <div className="mt-16 flex justify-items-start content">
            <p className="font-semibold text-left text-lg w-full md:w-full">
              Elsewhere
            </p>
            <div className="line-break"></div>
            <p className="mt-4 text-left text-base prose">
              <a
                className="underline"
                href="some link"
              >
                Link to
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import Navigation from "../Navigation";

function Post1() {
  const tags = ["blog", "css"];

  return (
    <div>
      <Navigation></Navigation>
      <div className="flex justify-center content">
        <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-5/12 xl:w-4/12 mx-0">
          <div className="mt-16 mb-4 flex justify-items-start content">
            <p className="font-semibold text-left text-lg w-full md:w-full">
            Example post
            </p>
            <div className="line-break"></div>
            <time className="text-gray-custom2 text-left text-sm w-full md:w-full">
              Aug 24, 2024
            </time>
            <div className="line-break"></div>
            <div>
              <p className="leading-7 mt-4 text-left text-base prose w-11/12 md:w-full">
              The following is an example post. The first paragraph of the article 
              serves as content for the card in the Blog page.
              </p>
              <p className="leading-7 mt-4 text-left text-base prose w-11/12 md:w-full">
                This web site uses a custom blog design and is built using React
                and Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="mt-4 mb-16 text-left">
            {tags.map((item, index) => (
              <span
                key={`tag-${index}`}
                className="leading-7 mt-4 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 text-left text-base prose w-11/12 md:w-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post1;

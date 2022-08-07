import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="px-2 pt-32 bg-gray-100 md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span className="block">
            characters list Of <br />
            <span className="block mt-1 text-purple-500 lg:inline lg:mt-0">
              Game of Thrones characters
            </span>
          </span>
        </h1>
        <p className="w-full mx-auto text-base text-left text-gray-500 md:max sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          Award winning pages that will take your game to the next level!
        </p>
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
          <button className="flex items-center w-full px-7 py-3 mb-3 text-lg text-white bg-purple-500 rounded-md md:mb-0 hover:bg-purple-700 md:w-auto">
            <Link to="/Users">Go to  </Link>
          </button>
        </div>
      </div>
      <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
        <img
          alt="hero img"
          src="https://cdn.devdojo.com/images/november2020/hero-image.png"
        />
      </div>
    </section>
  );
}

export default Home;

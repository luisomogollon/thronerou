import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="px-2 pt-32 bg-gray-100 md:px-0">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl md:text-center">
          <span className="block">
            Characters list of <br />
            <span className="block mt-1  text-center text-3xl text-purple-500 lg:inline lg:mt-0">
              Game Of Thrones
            </span>
          </span>
        </h1>
        <p className="w-full  text-center  font-hairline  text-gray-500 md:max sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
          Practice connected Apis and features of React Router Dom
        </p>
        <div className="inline-flex">
          <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 px-6 rounded">
            <Link to="/Users">Go to </Link>
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

import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { PersonaContext } from "../context/personContext";

function ActoresGame() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [actores, setlistadoActores] = useState([]);
  const { setter } = useContext(PersonaContext);
  const filter = searchParams.get("filter") ?? "";

  useEffect(() => {
    const obtenerPersonajes = async () => {
      const url = "https://thronesapi.com/api/v2/Characters";
      const result = await axios.get(url);
      setlistadoActores(result.data);
    };

    obtenerPersonajes();
  }, []);

  const handlefilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  return (
    <div>
      <h1 className="text-center mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
        {" "}
        Game of Thrones Characters
      </h1>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className=" mx-2 my-4 flex justify-justify-between space-y-52 ">
            <input
              type="text"
              value={searchParams.get("filter")}
              onChange={handlefilter}
              id="default-search"
              className="block  p-2 pl-10 w-50  justify-center  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="filter"
              required
            />
          </div>
        </div>
      </form>
      <ul className=" grid w-full bg-gray-100 grid-cols-2 gap-10 sm:grid-cols-3  lg:grid-cols-4 relative p-10">
        {actores.length === 0 && <p>cargando...</p>}
        {actores
          .filter((persona) => {
            if (!filter) return true;
            const name = persona.fullName.toLowerCase();
            return name.includes(filter.toLocaleLowerCase());
          })
          .map((persona, i) => {
            return i < 8 ? (
              <li key={i}>
                <h1 className="space-y-1 text-lg font-bold leading-10">
                  {" "}
                  <Link to={persona.id.toString()}>
                    {" "}
                    Name: {persona.fullName}{" "}
                  </Link>
                </h1>
                <h5 className="space-y-1 text-ms font-medium  leading-3 text-blue-600 ">
                  {persona.lastName}
                </h5>
                <Link
                  onClick={() => setter(persona)}
                  to={persona.id.toString()}
                >
                  <img
                    className=" shadow-xl rounded-full rounded-tr-none hover:shadow-2xl bg-purple-400 relative p-2  mt-3 space-y-2 text-center hover:scale-105 transition-all transform duration-500"
                    src={persona.imageUrl}
                    alt="Actores"
                  />
                </Link>
              </li>
            ) : null;
          })}
      </ul>
    </div>
  );
}

export default ActoresGame;

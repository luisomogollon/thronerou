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
      <h1 className="text-center mt-1 pt-10 p-10 text-4xl  font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
        {" "}
        Game of Thrones Characters
      </h1>

      <div className="flex justify-center">
        <div className="mb-7 xl:w-96">
          <input
            type="text"
            value={searchParams.get("filter")}
            onChange={handlefilter}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="default-search"
            placeholder="filter"
          />
        </div>
      </div>

      <ul className=" grid w-full bg-gray-100 grid-cols-2  gap-10 sm:grid-cols-3  lg:grid-cols-4 relative p-11">
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
                    Name: {persona.firstName}{" "}
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

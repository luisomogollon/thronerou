/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PersonaContext } from "../context/personContext";

export function Persona() {
  const { persona } = useContext(PersonaContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(persona).length) {
      navigate("/users  ");
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="w- p-1 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <img
            className="w- object-cover rounded-t-md"
            src={persona.imageUrl}
            alt=""
          />
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700">{persona.fullName}</h1>
            <h1 className="text-1xl font-semibold text-gray-700">
              House: {persona.family}
            </h1>
            <h1 className="text-1xl font-semibold text-gray-700">
              Title: {persona.title}
            </h1>
            <p className="text-sm mt-2 text-gray-700">Data Base</p>
            <div className="mt-3 space-x-4 flex p-1">
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
                <span className="block h-6 w-6 bg-green-400 rounded-full"> </span>
              </div>
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
                <span className="block h-6 w-6 bg-blue-400 rounded-full"> </span>
              </div>
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                <span className="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
              </div>
            </div>
            <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
              <button className="block text-xl font-semibold text-gray-700 cursor-auto"></button>
              <button className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
                <Link to="/Users">back </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Persona;

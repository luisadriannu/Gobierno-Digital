import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import typeColors from "../utilities/typeColors";
import capitalizeFirstLetter from "../utilities/capitalizeFirstLetter";
import { Loading } from "./Loading";
import scrollTop from "../utilities/scrollTop";
import { useState } from "react";

export default function Card() {
  const [offset, setOffset] = useState(0);
  const limit = 20;

  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  let { data } = useFetch(url);

  const handlePrevious = () => {
    setOffset(Math.max(0, offset - limit));
  };

  const handleNext = () => {
    setOffset(offset + limit);
  };

  return (
    <>
      <div className="content-cards pt-4">
        {data ? (
          data.map((el, index) => {
            const pokemonType = el.types?.[0]?.type?.name;
            const colorClass = typeColors[pokemonType] || "bg-gray-200";

            const nameWithCapital = capitalizeFirstLetter(el.name);

            return (
              <NavLink
                onClick={scrollTop}
                to={`/details/${el.id}`}
                className={`rounded-xl h-64 flex items-center relative lg:hover:scale-[103%] transition duration-300 delay-75 ease-in-out ${colorClass}`}
                key={index}
              >
                <span className="absolute top-2 left-2 text-[#2E3057]">
                  #{el.id}
                </span>
                <div className="px-4 flex flex-col justify-center items-center">
                  <div>
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-black w-3 md:w-4"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M17 7l-10 10"></path>
                        <path d="M8 7l9 0l0 9"></path>
                      </svg>
                    </div>
                    <img
                      className="w-40"
                      src={el.sprites.front_default}
                      alt={el.name}
                    />
                  </div>
                  <span className="font-semibold text-sm">Nombre:</span>
                  <p className="text-[#2E3057] font-bold text-lg">
                    {nameWithCapital}
                  </p>
                </div>
              </NavLink>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <div className="flex justify-between p-4">
        <button
          className="p-4 bg-gray-300 rounded-full"
          onClick={() => {
            handlePrevious();
            scrollTop();
          }}
          disabled={offset === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M13.883 5.007l.058 -.005h.118l.058 .005l.06 .009l.052 .01l.108 .032l.067 .027l.132 .07l.09 .065l.081 .073l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059v12c0 .852 -.986 1.297 -1.623 .783l-.084 -.076l-6 -6a1 1 0 0 1 -.083 -1.32l.083 -.094l6 -6l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          className="p-4 bg-gray-300 rounded-full"
          onClick={() => {
            handleNext();
            scrollTop();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z"
              strokeWidth="0"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuExtend, setMenuExtend] = useState(false);

  const extendMenu = () => {
    setMenuExtend(!menuExtend);
  };

  return (
    <>
      <header className="fixed w-full z-[997] px-5 bg-white shadow-md mx-auto flex justify-center">
        <div className="py-6 w-[1000px] flex items-center">
          <button className="lg:hidden" onClick={extendMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
          <NavLink
            className="text-lg font-bold lg:block hidden text-center"
            to="/"
          >
            <span>Inicio</span>
          </NavLink>
          <h2 className="text-[#2E3057] text-4xl font-bold text-center w-full pr-6">
            Pokédex
          </h2>
        </div>
      </header>
      {menuExtend ? (
        <>
          <div
            onClick={extendMenu}
            className="top-0 left-0 z-[998] h-screen fixed w-full bg-[#00000065]"
          ></div>
          <div className="fixed top-0 left-0 z-[999] h-screen w-64 bg-white py-6 px-5 shadow-md">
            <button onClick={extendMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <div className="pt-4">
              <NavLink
                onClick={extendMenu}
                className="text-lg font-bold"
                to="/"
              >
                Inicio
              </NavLink>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

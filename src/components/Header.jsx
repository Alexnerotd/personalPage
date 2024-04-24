import { useState, useEffect, useRef } from "react";

const MenuTogler = () => {
  return (
    <>
      <div className="container-menu w-full h-full bg-rgba-black text-white">
        <div className="container-link h-full w-full flex items-center justify-evenly">
          <a
            href="/"
            className="border border-black rounded-md p-3 shadow-green-600 shadow-lg hover:bg-green-600"
          >
            Home
          </a>
          <a
            href="/"
            className="border border-black rounded-md p-3 shadow-violet-600 shadow-lg hover:bg-violet-600"
          >
            About
          </a>
          <a
            href="/"
            className="border border-black rounded-md p-3 shadow-blue-600 shadow-lg hover:bg-blue-600"
          >
            Projects
          </a>
          <a
            href="/"
            className="border border-black rounded-md p-3 shadow-red-600 shadow-lg hover:bg-red-600"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerMenuHidden = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container-navbar w-full h-24 flex bg-black text-white">
        <div className="container-title basis-1/2 flex h-full w-full items-center justify-center text-2xl font-semibold tracking-widest">
          <a href="/">NEROCODE</a>
        </div>
        <div className="container-button-togler basis-1/2 h-full w-full flex items-center justify-center">
          <button onClick={handlerMenuHidden}>
            <svg
              className="border rounded-md"
              width="80px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 12H20"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M5 17H20"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M5 7H20"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`container-menu-hidden w-full h-24 ${
          isOpen ? " " : "hidden"
        }`}
      >
        <MenuTogler />
      </div>
    </>
  );
};

export default Header;

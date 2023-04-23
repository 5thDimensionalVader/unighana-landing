import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap px-6 lg:px-[5rem] py-4 border-b-[1px] border-slate-500">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-medium text-xl tracking-tight">UniGhana</span>
      </div>
      <div className="lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-slate-500 hover:border-slate-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 8a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3z" />
          </svg>
        </button>
      </div>
      <div
        className={`flex justify-center w-full lg:flex lg:justify-end lg:w-auto ${
          isOpen ? "block" : "hidden"
        } transition duration-500 ease-in-out`}
      >
        <div className="inline-flex text-base lg:flex-grow">
          <a
            href="#about"
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-custom-red"
          >
            About Us
          </a>
          <a
            href="#schools"
            className="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-custom-red"
          >
            Schools
          </a>
          <a
            href="#contact"
            className="block lg:inline-block mt-4 lg:mt-0 hover:text-custom-red"
          >
            Contact
          </a>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

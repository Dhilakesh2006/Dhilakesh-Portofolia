import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
 
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl text-white focus:outline-none cursor-pointer"
        aria-label="close menu"
      >
        ✕
      </button>

      <div className="flex flex-col items-center space-y-6 text-gray-300">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          About
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Projects
        </a>

        <a
          href="#contacts"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Contacts
        </a>
      </div>
    </div>
  );
};

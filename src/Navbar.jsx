import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            My <span className="text-blue-500">Portofolio</span>
          </a>

        
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            ☰
          </div>

        
          <div className="hidden md:flex items-center space-x-8 text-gray-300">
            <a href="#home" className="hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="#contacts" className="hover:text-white transition-colors duration-300">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

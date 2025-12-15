import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./App.css";
import "./index.css";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/section/Home"
import { About } from "./components/section/About";
import { Project } from "./components/section/Project";
import { Contact } from "./components/section/Contact";

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-800 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

       <Home />
       <About />
       <Project />
       <Contact />
    
      </div>
    </>
  );
}

export default App;

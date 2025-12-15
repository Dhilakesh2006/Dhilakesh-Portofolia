import { LoadingOnScreen } from "../LoadingOnScreen";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-linear-to-b from-gray-900 via-black to-gray-900"
    >
      <LoadingOnScreen>
        <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="text-center z-10 px-6">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 
          bg-linear-to-r from-blue-400 to-cyan-600 
          bg-clip-text text-transparent animate-fadeDown"
        >
          Hi, I’m Dhilakesh
        </h1>

        <p
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto 
          animate-fadeUp delay-150  hover:translate-y-1 transition-all"
        >
          I'm a Full-stack Developer who loves building clean, scalable web
          applications, My goal is to build solutions that offer both
          exceptional performance and delightful user experiences.
        </p>

        <div className="flex justify-center space-x-6 animate-fadeUp delay-300">
          <a
            href="#projects"
            className="relative overflow-hidden bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold
            transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] group"
          >
            <span
              className="absolute inset-0 bg-white/10 translate-x-[-150%] group-hover:translate-x-[150%]
              transition-transform duration-700 ease-out"
            ></span>

            <span className="relative z-10">View Projects</span>
          </a>

          <a
            href="#contact"
            className="relative overflow-hidden border border-blue-400 text-blue-400 py-3 px-6 rounded-lg text-lg font-semibold
            transition-all duration-500 ease-out hover:scale-105 hover:bg-blue-500/20 hover:text-blue-300
            hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] group"
          >
            <span
              className="absolute inset-0 bg-blue-300/10 translate-x-[-150%] group-hover:translate-x-[150%]
              transition-transform duration-700 ease-out"
            ></span>

            <span className="relative z-10">Contact Me</span>
          </a>
        </div>
      </div>

      </LoadingOnScreen>
      
    </section>
  );
};

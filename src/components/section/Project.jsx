import React from "react";
import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";

export const Project = () => {
  const projects = [
    {
      title: "FoodDelivery App",
      desc: "A responsive real-world food delivery app with smooth browsing, secure checkout, and optimized performance.",
      tech: ["React.js", "MongoDB", "Node.js", "Express.js", "SQL"],
      link: "https://your-foodapp-link.com",
    },
    {
      title: "Social Media Platform",
      desc: "A modern social platform with posts, profiles, messaging, and real-time activity updates.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      link: "https://your-socialmedia-link.com",
    },
    {
      title: "AI-Powered Chat System",
      desc: "A smart chat app with real-time messaging and AI-driven responses using advanced LLM APIs.",
      tech: ["MongoDB", "Node.js", "Express.js", "React", "Socket.io", "OpenAI API"],
      link: "https://your-aichat-link.com",
    },
    {
      title: "MovieSearch App",
      desc: "A fast movie search app powered by external APIs with instant results and clean UI.",
      tech: ["React.js", "Node.js", "REST APIs"],
      link: "https://your-moviesearch-link.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <LoadingOnScreen>

       
        <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-3xl font-bold mb-6 text-center
  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
>
  Feautured Projects
</motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            whileHover={{ translateY: -5 }}
            className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-lg transition-all bg-white/5 backdrop-blur"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 text-sm underline hover:text-blue-300"
            >
              View Project
            </a>
          </motion.article>
        ))}
      </div>

      </LoadingOnScreen>
     
    </section>
  );
};

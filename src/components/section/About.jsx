import { motion } from "framer-motion";
import { LoadingOnScreen } from "../LoadingOnScreen";

export const About = () => {
  const FrontendSkills = ["HTML", "CSS", "Javascript", "Bootstrap", "React"];
  const BackendSkills = [
    "Python",
    "Django",
    "MongoDB",
    "Nodejs",
    "Express.js",
    "SQL",
    "GitHub",
  ];

  return (
     <LoadingOnScreen>
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
     
        <div className="max-w-3xl mx-auto px-4">

       
        <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-3xl font-bold mb-6 text-center
  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
>
  About Me
</motion.h2>


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 border-white/10"
        >
          <p className="text-gray-400 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

     
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold mb-4">Frontend</h3>

              <div className="flex flex-wrap gap-2">
                {FrontendSkills.map((tech, key) => (
                  <motion.span
                    key={key}
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full 
                    text-sm border border-blue-500/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl p-6 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold mb-4">Backend</h3>

              <div className="flex flex-wrap gap-2">
                {BackendSkills.map((tech, key) => (
                  <motion.span
                    key={key}
                    whileHover={{ scale: 1.1 }}
                    className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full 
                    text-sm border border-cyan-500/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all 
              h-full bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-300">Education</h3>

              <ul className="space-y-4">
                <li>
                  <strong className="text-white">
                    B.E - Computer Science & Engineering
                  </strong>
                  <p className="text-gray-400">
                    Mahendra College of Engineering, Salem (2023–Present)
                  </p>
                  <p className="text-gray-300 font-medium">CGPA: 8.11</p>
                </li>

                <li>
                  <strong className="text-white">
                    Higher Secondary Education
                  </strong>
                  <p className="text-gray-400">
                    Muhyidheeniya Matric Hr Sec School (2022–2023)  
                    <br /> Ramanathapuram
                  </p>
                </li>
                <li>
                    <strong className="text-white">
                        Secondary School Leaving Certificate
                    </strong>
                    <p className="text-gray-400">
                    Muhyidheeniya Matric Hr Sec School (2020–2021)  
                    <br /> Ramanathapuram

                    </p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all 
              h-full bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Work Experience
              </h3>

              <h4 className="text-white font-semibold">
                Internship — Stellera Edu Tech (2025–Present)
              </h4>

              <p className="text-gray-400 mt-2">
                Six-month internship as a Full-Stack Developer, working on real-time
                applications, backend APIs, and modern UI.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>

     
      
    </section>
     </LoadingOnScreen>
  );
};

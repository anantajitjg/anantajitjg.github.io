import { motion } from "framer-motion";
import { Code, Database, Layers, Briefcase, User, Lightbulb, CheckCircle2 } from "lucide-react";

const MainContent = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section variants={container} initial="hidden" animate="show" className="mb-12">
          <motion.div variants={item}>
            <div className="overflow-hidden border-none shadow-lg bg-card rounded-lg">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 pb-6 pt-6 px-6">
                <div className="flex items-center gap-2 mb-2">
                  <User className="text-primary" size={20} />
                  <h2 className="text-xl font-bold">Profile Summary</h2>
                </div>
                <div className="text-muted-foreground text-sm">Full-Stack Developer</div>
              </div>
              <div className="pt-6 px-6 pb-6">
                <p className="mb-4 text-muted-foreground">
                  As an experienced and solution-oriented Full-Stack Developer, I possess an unwavering passion for
                  coding and a knack for problem-solving. My expertise lies in conceptualizing, designing, developing,
                  and deploying high-quality, scalable web applications.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Proficient in both front-end and back-end technologies, I am well-versed in PHP and JavaScript
                  programming languages and skilled in managing MySQL database systems.
                </p>
                <p className="mb-4 text-muted-foreground">
                  My contributions to open-source projects, including WordPress, exemplify my passion for coding and
                  commitment to continuous learning.
                </p>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-md mt-6">
                  <p className="font-medium text-foreground">
                    Five times WordPress Core Contributor. Contributed to Betty, Kirk, Adderley, Misha, and Dolphy
                    (WordPress 6.2, March 29, 2023).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section variants={container} initial="hidden" animate="show" className="mb-12">
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <Briefcase className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
          </motion.div>

          <motion.div variants={item} className="grid gap-6">
            <div className="overflow-hidden border-none shadow-lg bg-card rounded-lg p-6">
              <p className="mb-4 text-muted-foreground">
                Development of highly scalable web applications leveraging both front- end and back-end technologies.
                Proficient with PHP (WordPress, Laravel), JavaScript (jQuery, React, Node.js), and database management
                (MySQL, PostgreSQL).
              </p>
              <p className="mb-4 text-muted-foreground">
                Developed web applications and mobile applications leveraging the latest and popular technology stack.
                Developed web applications using the Laravel framework along with Livewire full-stack framework, with
                MySQL as the database. Also facilitated API developments with Laravel, secured with Passport and
                Sanctum. Developed mobile applications using React Native.
              </p>
              <p className="mb-4 text-muted-foreground">
                Successfully managed the product development team and led the development of top-rated and popular
                WordPress plugins.
              </p>
              <p className="mb-4 text-muted-foreground">
                Devised and implemented innovative solutions as the lead developer, driving user engagement and
                satisfaction.
              </p>
              <p className="mb-4 text-muted-foreground">
                Implemented a more efficient development process and adhered to industry best practices, resulting in
                shorter development times, fewer bugs, and higher-quality code.
              </p>
              <p className="mb-4 text-muted-foreground">
                Provided technical guidance to team members as part of weekly technical sessions.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section variants={container} initial="hidden" animate="show" className="mb-12">
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <Code className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          </motion.div>

          <motion.div variants={item} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden border-none shadow-lg bg-card rounded-lg">
              <div className="pb-3 pt-4 px-4">
                <div className="flex items-center gap-2">
                  <Code className="text-primary" size={18} />
                  <h3 className="text-lg font-semibold">Languages & Tools</h3>
                </div>
              </div>
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={16} />
                    <span>PHP, JavaScript, Python, HTML, CSS, SQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={16} />
                    <span>Git, GitHub</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={16} />
                    <span>VS Code, Postman</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden border-none shadow-lg bg-card rounded-lg">
              <div className="pb-3 pt-4 px-4">
                <div className="flex items-center gap-2">
                  <Layers className="text-primary" size={18} />
                  <h3 className="text-lg font-semibold">Frameworks & Libraries</h3>
                </div>
              </div>
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={16} />
                    <span>jQuery, React, Bootstrap, Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={16} />
                    <span>Laravel, Livewire, WordPress</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={16} />
                    <span>React Native, Express (Node.js)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden border-none shadow-lg bg-card rounded-lg">
              <div className="pb-3 pt-4 px-4">
                <div className="flex items-center gap-2">
                  <Database className="text-primary" size={18} />
                  <h3 className="text-lg font-semibold">Databases</h3>
                </div>
              </div>
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={16} />
                    <span>MySQL, PostgreSQL</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <Lightbulb className="text-primary" size={24} />
            <h2 className="text-2xl font-bold text-foreground">Strengths</h2>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Full-Stack Development",
              "Laravel with Livewire Development",
              "WordPress Development",
              "API Integration",
              "Problem Solving",
              "Leadership",
              "Teamwork and Collaboration",
              "Product Development",
            ].map((strength, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-card border border-border rounded-lg p-4 flex items-center justify-center text-center shadow-sm transition-all duration-300"
              >
                <div className="px-3 py-1.5 text-sm font-medium text-primary">{strength}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default MainContent;
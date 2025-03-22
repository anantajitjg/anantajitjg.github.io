import { motion } from "framer-motion";
import { Github, Globe, Mail, Code } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-primary to-primary/80 text-white py-8 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Anantajit JG</h1>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:anantajitjg@gmail.com"
                className="flex items-center gap-1 hover:bg-white/20 px-2 py-1 rounded-md transition-colors"
              >
                <Mail size={16} />
                <span>anantajitjg@gmail.com</span>
              </a>
              <a
                href="https://anantajit.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:bg-white/20 px-2 py-1 rounded-md transition-colors"
              >
                <Globe size={16} />
                <span>anantajit.in</span>
              </a>
              <a
                href="https://github.com/anantajitjg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:bg-white/20 px-2 py-1 rounded-md transition-colors"
              >
                <Github size={16} />
                <span>github.com/anantajitjg</span>
              </a>
              <a
                href="https://profiles.wordpress.org/anantajitjg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:bg-white/20 px-2 py-1 rounded-md transition-colors"
              >
                <Code size={16} />
                <span>profiles.wordpress.org/anantajitjg</span>
              </a>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
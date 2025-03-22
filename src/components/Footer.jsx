import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-primary to-primary/80 text-white py-6 text-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-1">
          <p>&copy; {new Date().getFullYear()} Anantajit JG. All rights reserved.</p>
          <Heart size={16} className="text-red-400 animate-pulse" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
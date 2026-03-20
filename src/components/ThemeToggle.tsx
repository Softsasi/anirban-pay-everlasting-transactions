import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 rounded-full border border-border/40 bg-muted/20 flex items-center justify-center hover:bg-muted/40 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun size={15} className="text-accent" />
        ) : (
          <Moon size={15} className="text-primary" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import LogoMark from '../primitives/LogoMark';

const navLinks = ['Platform', 'Solutions', 'Integrations', 'Pricing', 'Enterprise'];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-10 py-5"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Aura AI</span>
            <span className="text-[10px] text-white/50 tracking-wide">Enterprise Voice Intelligence</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-white/70 hover:text-white transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="rounded-full bg-white text-black text-sm font-medium px-5 py-2.5 transition-all hover:bg-white/90 active:scale-[0.98]">
            Request a Demo
          </button>
        </div>

        <button className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
          <Menu className="w-4 h-4 text-white/70" />
        </button>
      </div>
    </motion.nav>
  );
}

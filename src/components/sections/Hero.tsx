import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const gradientStyle: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-root-noise)',
};

const eyebrowItems = ['Voice AI', 'Enterprise-Grade', 'Fully Customizable'];

export default function Hero() {
  return (
    <section className="relative z-10 pt-20 md:pt-32 pb-16 text-center flex flex-col items-center">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center gap-2 mb-6"
      >
        {eyebrowItems.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            <span className="text-xs font-medium text-white/50">{item}</span>
            {i < eyebrowItems.length - 1 && (
              <span className="w-1 h-1 rounded-full bg-white/30" />
            )}
          </span>
        ))}
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]"
      >
        <span className="block text-white">The Voice AI Platform</span>
        <span
          className="block animate-shiny mt-1"
          style={gradientStyle}
        >
          Built for Enterprise Scale.
        </span>
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-6 text-white/60 max-w-xl text-base md:text-lg leading-[1.6]"
      >
        Aura AI deploys intelligent voice agents that handle customer support, lead qualification,
        and internal workflows — with the reliability, security, and control your organization demands.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row items-center gap-4"
      >
        <button className="rounded-full bg-white text-black text-sm font-medium px-6 py-3 transition-all hover:bg-white/90 active:scale-[0.98]">
          Request a Demo
        </button>
        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors">
          Explore the Platform
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Trust signals */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-6 flex items-center gap-3 text-xs text-white/40"
      >
        <span>Trusted by 500+ organizations</span>
        <span className="w-1 h-1 rounded-full bg-white/30" />
        <span>SOC 2 Compliant</span>
        <span className="w-1 h-1 rounded-full bg-white/30" />
        <span>No credit card required</span>
      </motion.div>
    </section>
  );
}

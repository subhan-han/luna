import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        {/* Radial glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
            opacity: 0.3,
          }}
        />

        <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
          Ready to transform how your
          <br />
          organization communicates?
        </h2>

        <p className="relative mt-6 text-white/60 max-w-lg mx-auto text-base leading-[1.6]">
          Speak with our enterprise team to get a tailored walkthrough of Aura AI — and see exactly
          how it fits your existing infrastructure.
        </p>

        <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full sm:flex-1 rounded-full bg-white/10 border border-white/15 text-white text-sm px-5 py-3 placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
          />
          <button className="w-full sm:w-auto rounded-full bg-white text-black text-sm font-medium px-6 py-3 transition-all hover:bg-white/90 active:scale-[0.98] whitespace-nowrap">
            Request a Demo
          </button>
        </div>

        <p className="relative mt-4 text-xs text-white/40">
          Our team typically responds within one business day. No commitment required.
        </p>
      </motion.div>
    </section>
  );
}

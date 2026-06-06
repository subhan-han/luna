import { motion } from 'motion/react';
import { Headphones, TrendingUp, Users, Landmark } from 'lucide-react';

const solutions = [
  {
    icon: Headphones,
    title: 'Customer Support',
    desc: 'Resolve tier-1 inquiries instantly, reduce agent load, and deliver consistent support at any volume.',
  },
  {
    icon: TrendingUp,
    title: 'Sales & Lead Qualification',
    desc: 'Engage inbound leads in real time, qualify prospects, and route high-value opportunities to your team.',
  },
  {
    icon: Users,
    title: 'HR & Internal Operations',
    desc: 'Automate onboarding, employee FAQs, and internal helpdesk requests — freeing your teams for higher-value work.',
  },
  {
    icon: Landmark,
    title: 'Financial Services & Compliance',
    desc: 'Handle account inquiries and compliance-driven conversations with structured, auditable voice interactions.',
  },
];

export default function Solutions() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] text-white">
          Deployed across every function
          <br />
          of your business
        </h2>
        <p className="mt-5 text-white/60 max-w-lg mx-auto text-base leading-[1.6]">
          From the front line to back office — Aura AI adapts to the demands of any team, any industry.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {solutions.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="liquid-glass rounded-2xl p-6 flex gap-5"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d2ff]/20 to-[#0B2551]/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-[#00d2ff]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/60 leading-[1.6]">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

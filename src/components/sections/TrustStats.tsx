import { motion } from 'motion/react';
import { Building2, MessageSquare, TrendingDown } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '500+',
    label: 'Organizations',
    sub: 'across finance, healthcare, retail, and technology',
  },
  {
    icon: MessageSquare,
    value: '10M+',
    label: 'Conversations Handled',
    sub: 'monthly, with sub-second response latency',
  },
  {
    icon: TrendingDown,
    value: '40%',
    label: 'Average Cost Reduction',
    sub: 'in customer-facing operations within 90 days',
  },
];

export default function TrustStats() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Trusted by teams that can't afford downtime
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map(({ icon: Icon, value, label, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-5 h-5 text-white/70" />
            </div>
            <p className="text-4xl md:text-5xl font-bold text-white mb-1">{value}</p>
            <p className="text-sm font-semibold text-white/80 mb-1">{label}</p>
            <p className="text-xs text-white/50">{sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

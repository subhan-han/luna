import { motion } from 'motion/react';
import { Mic, Settings, Shield, Plug, Lock, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Human-Grade Conversational Voice',
    desc: 'Natural, context-aware dialogue that reflects your brand voice — not a generic bot experience.',
  },
  {
    icon: Settings,
    title: 'Fully Configurable Agents',
    desc: 'Define personas, workflows, and escalation logic tailored precisely to each business function.',
  },
  {
    icon: Shield,
    title: '99.9% Uptime Guarantee',
    desc: 'Enterprise SLAs backed by redundant infrastructure — your operations never stop, neither does Aura.',
  },
  {
    icon: Plug,
    title: 'Seamless System Integration',
    desc: 'Connect Aura to your CRM, helpdesk, ERP, or any internal system via REST API and native connectors.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security & Compliance',
    desc: 'SOC 2 Type II, data encryption at rest and in transit, role-based access controls, and full audit logs.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics & Reporting',
    desc: 'Monitor agent performance, conversation outcomes, and operational KPIs from a centralized dashboard.',
  },
];

export default function CoreCapabilities() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02] text-white">
          Everything your teams need.
          <br />
          One unified voice platform.
        </h2>
        <p className="mt-5 text-white/60 max-w-lg mx-auto text-base leading-[1.6]">
          Aura AI is purpose-built for enterprise environments — adaptable, auditable, and always on.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="liquid-glass rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-white/60 leading-[1.6]">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

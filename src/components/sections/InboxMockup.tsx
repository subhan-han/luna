import { motion } from 'motion/react';
import {
  Sparkles, Inbox, Star, Send, FileText, Archive, Trash2,
  Search, Reply, Forward, MoreHorizontal, Paperclip
} from 'lucide-react';

const sidebarNav = [
  { icon: Inbox, label: 'Inbox', count: 12, active: true },
  { icon: Star, label: 'Starred', count: 3, active: false },
  { icon: Send, label: 'Sent', count: null, active: false },
  { icon: FileText, label: 'Drafts', count: 2, active: false },
  { icon: Archive, label: 'Archive', count: null, active: false },
  { icon: Trash2, label: 'Trash', count: null, active: false },
];

const labels = [
  { name: 'Work', color: '#00d2ff' },
  { name: 'Personal', color: '#A4F4FD' },
  { name: 'Travel', color: '#f59e0b' },
  { name: 'Finance', color: '#10b981' },
];

const messages = [
  {
    from: 'Linear',
    subject: 'Weekly product digest',
    preview: 'Your team shipped 23 issues this week...',
    time: '9:41 AM',
    unread: true,
    active: true,
  },
  {
    from: 'Sophia Chen',
    subject: 'Re: Q3 roadmap review',
    preview: 'Thanks for sending the deck over. I had a few thoughts...',
    time: '8:12 AM',
    unread: true,
    active: false,
  },
  {
    from: 'Figma',
    subject: 'Marcus commented on your file',
    preview: 'Love the new direction on the landing hero.',
    time: 'Yesterday',
    unread: false,
    active: false,
  },
  {
    from: 'Stripe',
    subject: 'Payout of $12,480.00 sent',
    preview: 'Your payout is on its way to your bank...',
    time: 'Yesterday',
    unread: false,
    active: false,
  },
  {
    from: 'Vercel',
    subject: 'Deployment ready for aura-web',
    preview: 'Preview is live at aura-web-g3f.vercel.app',
    time: 'Mon',
    unread: false,
    active: false,
  },
  {
    from: 'GitHub',
    subject: '[aura/core] PR #482 approved',
    preview: 'david-lim approved your pull request.',
    time: 'Mon',
    unread: false,
    active: false,
  },
];

export default function InboxMockup() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
      >
        {/* Title bar */}
        <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-xs text-white/50">
            Aura — Inbox
          </span>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 h-[520px]">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-white/10 bg-black/30 p-4 flex flex-col gap-4">
            <button className="rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center gap-1.5 justify-center">
              <Sparkles className="w-3.5 h-3.5" />
              Compose with Aura
            </button>
            <nav className="flex flex-col gap-0.5">
              {sidebarNav.map(({ icon: Icon, label, count, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs cursor-default transition-colors ${
                    active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="flex-1">{label}</span>
                  {count != null && (
                    <span className="text-[10px] text-white/50">{count}</span>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-2">
              <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2 px-2">Labels</p>
              <div className="flex flex-col gap-1.5">
                {labels.map(({ name, color }) => (
                  <div key={name} className="flex items-center gap-2 px-2">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-xs text-white/60">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message list */}
          <div className="col-span-4 border-r border-white/10 flex flex-col">
            <div className="h-10 border-b border-white/10 flex items-center gap-2 px-3">
              <Search className="w-3.5 h-3.5 text-white/30" />
              <span className="text-xs text-white/30">Search mail</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.subject}
                  className={`px-3 py-3 border-b border-white/5 cursor-default transition-colors ${
                    msg.active ? 'bg-white/8' : 'hover:bg-white/5'
                  }`}
                  style={msg.active ? { backgroundColor: 'rgba(255,255,255,0.05)' } : {}}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-semibold ${msg.unread ? 'text-white' : 'text-white/70'}`}>
                      {msg.from}
                    </span>
                    <span className="text-[10px] text-white/40">{msg.time}</span>
                  </div>
                  <p className={`text-[11px] leading-tight mb-0.5 ${msg.unread ? 'text-white/90 font-medium' : 'text-white/60'}`}>
                    {msg.subject}
                  </p>
                  <p className="text-[10px] text-white/40 truncate">{msg.preview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reader */}
          <div className="col-span-5 flex flex-col">
            {/* Toolbar */}
            <div className="h-10 border-b border-white/10 flex items-center justify-between px-3">
              <div className="flex items-center gap-1">
                {[Reply, Forward, Archive, Trash2].map((Icon, i) => (
                  <button key={i} className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-white/60 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
              <button className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-white/60 transition-colors">
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Email content */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {/* Header */}
              <div>
                <h2 className="text-sm font-semibold text-white mb-3">Weekly product digest</h2>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                    L
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-white">Linear</span>
                      <span className="text-[10px] text-white/40">to me · 9:41 AM</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-white/60 px-2 py-0.5 rounded-full border border-white/10 flex-shrink-0">
                    Work
                  </span>
                </div>
              </div>

              {/* AI Summary */}
              <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: '#A4F4FD' }} />
                  <span className="text-xs font-medium text-white/80">Summary by Aura</span>
                </div>
                <p className="text-[11px] text-white/60 leading-[1.5]">
                  Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.
                </p>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-2 text-[12px] text-white/70 leading-[1.6]">
                <p>Hi team,</p>
                <p>
                  Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.
                </p>
                <p>
                  Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.
                </p>
                <p>
                  Let me know if you would like a deeper breakdown by project or contributor.
                </p>
                <p className="text-white/50">— The Linear team</p>
              </div>

              {/* Attachment */}
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 w-fit">
                <Paperclip className="w-3 h-3 text-white/50" />
                <span className="text-[11px] text-white/70">digest-may-6.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

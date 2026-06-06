import LogoMark from '../primitives/LogoMark';

const footerLinks = ['Platform', 'Security', 'Privacy Policy', 'Terms of Service', 'Contact Sales'];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <LogoMark className="w-6 h-6" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white/70">Aura AI — Intelligent Voice, Enterprise Ready.</span>
            <span className="text-[10px] text-white/40 mt-0.5">© 2025 Aura AI, Inc. All rights reserved.</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-xs text-white/50">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { ChevronRight } from 'lucide-react';
import AppleLogo from './AppleLogo';

interface AppleButtonProps {
  label?: string;
  full?: boolean;
}

export default function AppleButton({ label = 'Download Aura', full = false }: AppleButtonProps) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98]${full ? ' w-full' : ''}`}
    >
      <AppleLogo className="w-4 h-4" />
      {label}
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-px" />
    </button>
  );
}

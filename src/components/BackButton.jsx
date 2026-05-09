import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ label = 'Back' }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group mb-6"
    >
      <div className="w-8 h-8 rounded-xl bg-bg-elevated border border-border-default flex items-center justify-center group-hover:border-accent-purple/40 transition-all">
        <ArrowLeft size={15} className="text-text-secondary group-hover:text-accent-purple transition-colors" />
      </div>
      <span className="text-sm font-display font-medium">{label}</span>
    </button>
  );
}
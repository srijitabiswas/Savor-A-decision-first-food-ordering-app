import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Edit2, ChevronLeft } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-12 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="font-display font-bold text-text-primary text-2xl mb-6 pt-4">My Profile</h1>

        <div className="bg-white rounded-3xl border border-border-default shadow-card overflow-hidden">
          {/* Avatar */}
          <div className="bg-accent-purple/8 px-8 py-8 flex items-center gap-5 border-b border-border-default">
            <div className="w-20 h-20 rounded-2xl bg-accent-purple/15 border-2 border-accent-purple/30 flex items-center justify-center flex-shrink-0">
              <User size={36} className="text-accent-purple" />
            </div>
            <div>
              <h2 className="font-display font-bold text-text-primary text-xl">Guest User</h2>
              <p className="text-text-muted text-sm font-body mt-0.5">Member since May 2026</p>
              <button className="flex items-center gap-1.5 mt-2 text-accent-purple text-xs font-display font-semibold hover:underline">
                <Edit2 size={12} /> Edit profile
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="px-8 py-6 space-y-5">
            {[
              { icon: <User size={16} />, label: 'Full Name', value: 'Guest User' },
              { icon: <Mail size={16} />, label: 'Email', value: 'guest@savor.app' },
              { icon: <Phone size={16} />, label: 'Phone', value: '+91 98765 43210' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-bg-elevated flex items-center justify-center text-text-muted flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-text-muted text-[11px] font-display uppercase tracking-wider">{item.label}</p>
                  <p className="text-text-primary text-sm font-display font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate('/login')}
          className="w-full mt-4 py-3.5 bg-accent-purple text-white font-display font-bold text-sm rounded-2xl hover:bg-accent-purple-dim transition-all"
        >
          Login to your account
        </button>
      </div>
    </div>
  );
}
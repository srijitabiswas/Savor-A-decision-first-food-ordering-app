import React, { useState } from 'react';
import { Bell, Moon, Globe, Shield, ChevronRight } from 'lucide-react';

const SETTINGS = [
  {
    section: 'Preferences',
    items: [
      { icon: <Bell size={17} />, label: 'Push notifications', type: 'toggle', defaultOn: true },
      { icon: <Moon size={17} />, label: 'Dark mode', type: 'toggle', defaultOn: false },
      { icon: <Globe size={17} />, label: 'Language', type: 'select', value: 'English' },
    ],
  },
  {
    section: 'Account',
    items: [
      { icon: <Shield size={17} />, label: 'Privacy settings', type: 'link' },
      { icon: <Shield size={17} />, label: 'Change password', type: 'link' },
    ],
  },
];

function Toggle({ defaultOn }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-11 h-6 rounded-full transition-colors duration-200 relative flex-shrink-0 ${on ? 'bg-accent-purple' : 'bg-bg-elevated border border-border-default'}`}
    >
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${on ? 'left-6' : 'left-1'}`} />
    </button>
  );
}

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-12 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="font-display font-bold text-text-primary text-2xl mb-6 pt-4">Settings</h1>

        <div className="space-y-5">
          {SETTINGS.map((group) => (
            <div key={group.section}>
              <p className="text-text-muted text-[11px] font-display uppercase tracking-widest mb-2 px-1">
                {group.section}
              </p>
              <div className="bg-white rounded-2xl border border-border-default overflow-hidden">
                {group.items.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 px-5 py-4 ${i < group.items.length - 1 ? 'border-b border-border-default' : ''}`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-bg-elevated flex items-center justify-center text-text-muted flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="flex-1 font-display font-semibold text-text-primary text-sm">{item.label}</span>
                    {item.type === 'toggle' && <Toggle defaultOn={item.defaultOn} />}
                    {item.type === 'select' && (
                      <span className="text-text-muted text-xs font-body flex items-center gap-1">
                        {item.value} <ChevronRight size={13} />
                      </span>
                    )}
                    {item.type === 'link' && <ChevronRight size={15} className="text-text-muted" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-xs font-body mt-8">Savor v1.0.0</p>
      </div>
    </div>
  );
}

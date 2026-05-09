import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { MapPin, Plus, Trash2, Check } from 'lucide-react';

const DEFAULT_ADDRS = [
  { id: 'a1', label: 'Home', address: '12B, Lake Town, Kolkata 700089', selected: false },
  { id: 'a2', label: 'Work', address: 'Salt Lake Sector V, Kolkata 700091', selected: true },
];

export default function SavedAddresses() {
  const [addresses, setAddresses] = useState(DEFAULT_ADDRS);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ label: '', address: '' });

  const handleAdd = () => {
    if (!form.address.trim()) return;
    setAddresses((prev) => [...prev, { id: `a${Date.now()}`, ...form, selected: false }]);
    setForm({ label: '', address: '' });
    setAdding(false);
  };

  const handleDelete = (id) => setAddresses((prev) => prev.filter((a) => a.id !== id));

  const handleSelect = (id) =>
    setAddresses((prev) => prev.map((a) => ({ ...a, selected: a.id === id })));

  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-12 px-6">
      <div className="max-w-xl mx-auto">
        <BackButton label="Back" />
        <div className="flex items-center justify-between mb-6 pt-4">
          <h1 className="font-display font-bold text-text-primary text-2xl">Saved Addresses</h1>
          <button
            onClick={() => setAdding(true)}
            className="flex items-center gap-2 px-4 py-2 bg-accent-purple text-white text-sm font-display font-bold rounded-xl hover:bg-accent-purple-dim transition-all"
          >
            <Plus size={15} /> Add new
          </button>
        </div>

        <div className="space-y-3">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`bg-white rounded-2xl border p-4 flex items-start gap-4 transition-all ${
                addr.selected ? 'border-accent-purple/40 bg-accent-purple/5' : 'border-border-default'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${addr.selected ? 'bg-accent-purple/15' : 'bg-bg-elevated'}`}>
                <MapPin size={16} className={addr.selected ? 'text-accent-purple' : 'text-text-muted'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-text-primary text-sm mb-0.5">{addr.label || 'Other'}</p>
                <p className="text-text-muted text-xs font-body leading-relaxed">{addr.address}</p>
                {addr.selected && (
                  <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-display font-bold text-accent-purple uppercase tracking-wider">
                    <Check size={10} /> Default
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => handleSelect(addr.id)}
                  className={`text-xs font-display font-semibold px-2.5 py-1 rounded-lg transition-all ${
                    addr.selected ? 'bg-accent-purple text-white' : 'bg-bg-elevated text-text-muted hover:text-text-primary'
                  }`}
                >
                  {addr.selected ? 'Default' : 'Set default'}
                </button>
                <button onClick={() => handleDelete(addr.id)} className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-colors text-text-muted">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {adding && (
          <div className="mt-4 bg-white rounded-2xl border border-accent-purple/30 p-5">
            <h3 className="font-display font-bold text-text-primary text-sm mb-4">New Address</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Label (Home, Work, Other...)"
                value={form.label}
                onChange={(e) => setForm({ ...form, label: e.target.value })}
                className="w-full px-4 py-2.5 bg-bg-elevated border border-border-default rounded-xl text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
              />
              <textarea
                placeholder="Full address with pin code"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                rows={2}
                className="w-full px-4 py-2.5 bg-bg-elevated border border-border-default rounded-xl text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all resize-none"
              />
              <div className="flex gap-2">
                <button onClick={handleAdd} className="flex-1 py-2.5 bg-accent-purple text-white font-display font-bold text-sm rounded-xl hover:bg-accent-purple-dim transition-all">
                  Save Address
                </button>
                <button onClick={() => setAdding(false)} className="px-4 py-2.5 border border-border-default text-text-secondary text-sm font-display rounded-xl hover:bg-bg-elevated transition-all">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
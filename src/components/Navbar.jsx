import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, MapPin, ChevronDown, Plus, Check, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const DEFAULT_ADDRESSES = [
  { id: 'a1', label: 'Home', address: '12B, Lake Town, Kolkata 700089' },
  { id: 'a2', label: 'Work', address: 'Salt Lake Sector V, Kolkata 700091' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [addrOpen, setAddrOpen] = useState(false);
  const [addresses, setAddresses] = useState(DEFAULT_ADDRESSES);
  const [selectedAddr, setSelectedAddr] = useState(DEFAULT_ADDRESSES[0]);
  const [addingNew, setAddingNew] = useState(false);
  const [newAddrText, setNewAddrText] = useState('');
  const [newAddrLabel, setNewAddrLabel] = useState('');
  const dropdownRef = useRef(null);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAddrOpen(false);
        setAddingNew(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleAddAddress = () => {
    if (!newAddrText.trim()) return;
    const newAddr = {
      id: `a${Date.now()}`,
      label: newAddrLabel.trim() || 'Other',
      address: newAddrText.trim(),
    };
    setAddresses((prev) => [...prev, newAddr]);
    setSelectedAddr(newAddr);
    setNewAddrText('');
    setNewAddrLabel('');
    setAddingNew(false);
    setAddrOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border-default' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">

        {/* LEFT: back + logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-xl bg-bg-elevated flex items-center justify-center hover:bg-accent-purple-glow transition-colors mr-1"
            >
              <ChevronLeft size={18} className="text-text-secondary" />
            </button>
          )}
          <button onClick={() => navigate('/')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-accent-purple flex items-center justify-center shadow-purple-sm">
              <span className="text-bg-primary font-display font-bold text-sm">S</span>
            </div>
            <span className="font-display font-semibold text-text-primary text-lg tracking-tight hidden sm:block">
              Savor
            </span>
          </button>
        </div>

        {/* CENTER: Address selector */}
        <div className="flex-1 flex justify-center" ref={dropdownRef}>
          <div className="relative">
            <button
              onClick={() => setAddrOpen(!addrOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-bg-elevated border border-border-default hover:border-accent-purple/40 transition-all duration-200 max-w-[260px] group"
            >
              <MapPin size={14} className="text-accent-purple flex-shrink-0" />
              <div className="text-left min-w-0">
                <p className="text-[10px] font-display font-semibold text-accent-purple uppercase tracking-wider leading-none mb-0.5">
                  Deliver to · {selectedAddr.label}
                </p>
                <p className="text-text-primary text-xs font-body truncate max-w-[160px]">
                  {selectedAddr.address.split(',')[0]}
                </p>
              </div>
              <ChevronDown
                size={14}
                className={`text-text-muted flex-shrink-0 transition-transform duration-200 ${addrOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown */}
            {addrOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-bg-secondary border border-border-default rounded-2xl shadow-card overflow-hidden animate-fade-in z-50">
                <div className="px-4 pt-4 pb-2">
                  <p className="text-text-muted text-[11px] font-display uppercase tracking-widest mb-3">
                    Your Addresses
                  </p>

                  {addresses.map((addr) => (
                    <button
                      key={addr.id}
                      onClick={() => { setSelectedAddr(addr); setAddrOpen(false); }}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl mb-2 text-left transition-all ${
                        selectedAddr.id === addr.id
                          ? 'bg-accent-purple/15 border border-accent-purple/30'
                          : 'bg-bg-elevated border border-transparent hover:border-border-default'
                      }`}
                    >
                      <MapPin size={15} className={selectedAddr.id === addr.id ? 'text-accent-purple mt-0.5' : 'text-text-muted mt-0.5'} />
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-display font-semibold mb-0.5 ${selectedAddr.id === addr.id ? 'text-accent-purple' : 'text-text-primary'}`}>
                          {addr.label}
                        </p>
                        <p className="text-text-secondary text-xs font-body leading-relaxed">{addr.address}</p>
                      </div>
                      {selectedAddr.id === addr.id && (
                        <Check size={14} className="text-accent-purple mt-0.5 flex-shrink-0" />
                      )}
                    </button>
                  ))}

                  {/* Add new address */}
                  {!addingNew ? (
                    <button
                      onClick={() => setAddingNew(true)}
                      className="w-full flex items-center gap-2 p-3 rounded-xl border border-dashed border-border-default text-text-muted hover:border-accent-purple/40 hover:text-accent-purple transition-all mt-1"
                    >
                      <Plus size={15} />
                      <span className="text-sm font-display font-medium">Add another address</span>
                    </button>
                  ) : (
                    <div className="mt-2 p-3 bg-bg-elevated rounded-xl border border-border-default">
                      <input
                        type="text"
                        placeholder="Label (Home, Work...)"
                        value={newAddrLabel}
                        onChange={(e) => setNewAddrLabel(e.target.value)}
                        className="w-full bg-bg-card border border-border-default rounded-lg px-3 py-2 text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 mb-2"
                      />
                      <input
                        type="text"
                        placeholder="Full address"
                        value={newAddrText}
                        onChange={(e) => setNewAddrText(e.target.value)}
                        className="w-full bg-bg-card border border-border-default rounded-lg px-3 py-2 text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 mb-3"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={handleAddAddress}
                          className="flex-1 py-2 bg-accent-purple text-bg-primary text-xs font-display font-semibold rounded-lg hover:bg-accent-purple-dim transition-colors"
                        >
                          Save Address
                        </button>
                        <button
                          onClick={() => setAddingNew(false)}
                          className="px-3 py-2 bg-bg-card border border-border-default text-text-secondary text-xs font-display rounded-lg hover:border-border-default transition-colors"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-4 py-3 border-t border-border-default">
                  <p className="text-text-muted text-[11px] font-body text-center">
                    Delivery available in Kolkata & surroundings
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Cart */}
        <button
          onClick={() => navigate('/cart')}
          className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-elevated border border-border-default hover:border-accent-purple/40 transition-all duration-200 group flex-shrink-0"
        >
          <ShoppingBag size={17} className="text-text-secondary group-hover:text-accent-purple transition-colors" />
          <span className="text-sm font-body text-text-secondary group-hover:text-text-primary transition-colors hidden sm:block">
            Cart
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent-purple rounded-full text-[11px] font-display font-bold text-bg-primary flex items-center justify-center animate-fade-in shadow-purple-sm">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
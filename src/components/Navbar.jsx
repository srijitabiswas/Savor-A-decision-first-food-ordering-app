import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ShoppingBag, MapPin, ChevronDown, Menu, X,
  User, Heart, MapPinned, Settings, HelpCircle,
  LogOut, LogIn, ClipboardList, ChevronRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const ADDRESSES = [
  { id: 'a1', label: 'Home', address: '12B, Lake Town, Kolkata 700089' },
  { id: 'a2', label: 'Work', address: 'Salt Lake Sector V, Kolkata 700091' },
];

const MENU_ITEMS = [
  { icon: <User size={18} />, label: 'Profile', path: '/profile' },
  { icon: <MapPinned size={18} />, label: 'Saved Addresses', path: '/addresses' },
  { icon: <Heart size={18} />, label: 'Favorites', path: '/favorites' },
  { icon: <ClipboardList size={18} />, label: 'My Orders', path: '/orders' },
  { icon: <Settings size={18} />, label: 'Settings', path: '/settings' },
  { icon: <HelpCircle size={18} />, label: 'Help & Support', path: '/help' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useApp();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [addrOpen, setAddrOpen] = useState(false);
  const [selectedAddr, setSelectedAddr] = useState(ADDRESSES[1]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addrRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (addrRef.current && !addrRef.current.contains(e.target)) setAddrOpen(false);
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setAddrOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white border-b border-border-default shadow-sm'
            : 'bg-bg-primary border-b border-border-default'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

          {/* ── LEFT: Hamburger + Logo ── */}
          <div className="flex items-center gap-3">
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-bg-elevated transition-colors"
              aria-label="Menu"
            >
              <Menu size={20} className="text-text-primary" />
            </button>

            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-accent-purple flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">S</span>
              </div>
              <span className="font-display font-bold text-text-primary text-xl tracking-tight">
                Savor
              </span>
            </button>
          </div>

          {/* ── RIGHT: Address + Orders + Cart ── */}
          <div className="flex items-center gap-2">

            {/* Address pill */}
            <div ref={addrRef} className="relative">
              <button
                onClick={() => setAddrOpen(!addrOpen)}
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border-default bg-bg-elevated hover:border-accent-purple/40 transition-all"
              >
                <MapPin size={14} className="text-accent-purple flex-shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] font-display font-bold text-text-muted uppercase tracking-wider leading-none">
                    Deliver to
                  </p>
                  <p className="text-text-primary text-xs font-display font-semibold">
                    {selectedAddr.address.split(',')[0]}
                  </p>
                </div>
                <ChevronDown
                  size={13}
                  className={`text-text-muted transition-transform duration-200 ${addrOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Address dropdown */}
              {addrOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-border-default rounded-2xl shadow-card-hover animate-fade-in z-50">
                  <div className="p-4">
                    <p className="text-text-muted text-[11px] font-display uppercase tracking-widest mb-3">
                      Choose delivery address
                    </p>
                    {ADDRESSES.map((addr) => (
                      <button
                        key={addr.id}
                        onClick={() => { setSelectedAddr(addr); setAddrOpen(false); }}
                        className={`w-full flex items-start gap-3 p-3 rounded-xl mb-2 text-left transition-all ${
                          selectedAddr.id === addr.id
                            ? 'bg-accent-purple/10 border border-accent-purple/30'
                            : 'bg-bg-elevated border border-transparent hover:border-border-default'
                        }`}
                      >
                        <MapPin size={14} className={`mt-0.5 flex-shrink-0 ${selectedAddr.id === addr.id ? 'text-accent-purple' : 'text-text-muted'}`} />
                        <div>
                          <p className="text-text-primary text-sm font-display font-semibold">{addr.label}</p>
                          <p className="text-text-muted text-xs font-body">{addr.address}</p>
                        </div>
                      </button>
                    ))}
                    <button
                      onClick={() => { navigate('/addresses'); setAddrOpen(false); }}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-bg-elevated border border-dashed border-border-default hover:border-accent-purple/40 transition-all mt-1"
                    >
                      <span className="text-text-secondary text-sm font-display font-medium">Manage addresses</span>
                      <ChevronRight size={14} className="text-text-muted" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Orders */}
            <button
              onClick={() => navigate('/orders')}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border-default bg-bg-elevated hover:border-accent-purple/40 transition-all"
            >
              <ClipboardList size={16} className="text-text-secondary" />
              <span className="text-text-primary text-sm font-display font-medium">Orders</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate('/cart')}
              className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border-default bg-bg-elevated hover:border-accent-purple/40 transition-all"
            >
              <ShoppingBag size={16} className="text-text-secondary" />
              <span className="text-text-primary text-sm font-display font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent-purple rounded-full text-[11px] font-display font-bold text-white flex items-center justify-center shadow-purple-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── HAMBURGER MENU DRAWER ── */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-50 animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            ref={menuRef}
            className="fixed left-0 top-0 bottom-0 w-72 bg-white z-50 flex flex-col animate-slide-in-left shadow-card-hover"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-default">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-accent-purple flex items-center justify-center">
                  <span className="text-white font-display font-bold text-sm">S</span>
                </div>
                <span className="font-display font-bold text-text-primary text-lg">Savor</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-bg-elevated transition-colors"
              >
                <X size={18} className="text-text-secondary" />
              </button>
            </div>

            {/* User section */}
            <div className="px-5 py-4 border-b border-border-default">
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center">
                    <User size={22} className="text-accent-purple" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-text-primary text-sm">Hello, User!</p>
                    <p className="text-text-muted text-xs font-body">user@email.com</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => { navigate('/login'); setMenuOpen(false); }}
                    className="w-full py-2.5 bg-accent-purple text-white font-display font-bold text-sm rounded-xl hover:bg-accent-purple-dim transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { navigate('/register'); setMenuOpen(false); }}
                    className="w-full py-2.5 border border-border-default text-text-primary font-display font-semibold text-sm rounded-xl hover:border-accent-purple/40 transition-colors"
                  >
                    Create account
                  </button>
                </div>
              )}
            </div>

            {/* Menu items */}
            <nav className="flex-1 overflow-y-auto px-3 py-3">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => { navigate(item.path); setMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl mb-1 text-left transition-all ${
                    location.pathname === item.path
                      ? 'bg-accent-purple/10 text-accent-purple'
                      : 'text-text-secondary hover:bg-bg-elevated hover:text-text-primary'
                  }`}
                >
                  <span className={location.pathname === item.path ? 'text-accent-purple' : 'text-text-muted'}>
                    {item.icon}
                  </span>
                  <span className="font-display font-medium text-sm">{item.label}</span>
                  <ChevronRight size={14} className="ml-auto text-text-muted" />
                </button>
              ))}
            </nav>

            {/* Logout */}
            <div className="px-3 py-4 border-t border-border-default">
              {isLoggedIn ? (
                <button
                  onClick={() => { setIsLoggedIn(false); setMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors"
                >
                  <LogOut size={18} />
                  <span className="font-display font-medium text-sm">Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => { navigate('/login'); setMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-text-secondary hover:bg-bg-elevated transition-colors"
                >
                  <LogIn size={18} />
                  <span className="font-display font-medium text-sm">Login / Register</span>
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
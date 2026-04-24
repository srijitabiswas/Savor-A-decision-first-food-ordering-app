<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, ChevronLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border-default' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-xl bg-bg-elevated flex items-center justify-center hover:bg-accent-purple-glow transition-colors mr-1"
            >
              <ChevronLeft size={18} className="text-text-secondary" />
            </button>
          )}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-xl bg-accent-purple flex items-center justify-center shadow-purple-sm">
              <span className="text-white font-display font-bold text-sm">S</span>
            </div>
            <span className="font-display font-semibold text-text-primary text-lg tracking-tight">
              Savor
            </span>
          </button>
        </div>

        {/* Right */}
        <button
          onClick={() => navigate('/cart')}
          className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-elevated border border-border-default hover:border-accent-purple/40 transition-all duration-200 group"
        >
          <ShoppingBag size={17} className="text-text-secondary group-hover:text-accent-purple transition-colors" />
          <span className="text-sm font-body text-text-secondary group-hover:text-text-primary transition-colors hidden sm:block">
            Cart
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent-purple rounded-full text-[11px] font-display font-bold text-white flex items-center justify-center animate-fade-in shadow-purple-sm">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
=======
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, ChevronLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border-default' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-xl bg-bg-elevated flex items-center justify-center hover:bg-accent-purple-glow transition-colors mr-1"
            >
              <ChevronLeft size={18} className="text-text-secondary" />
            </button>
          )}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-xl bg-accent-purple flex items-center justify-center shadow-purple-sm">
              <span className="text-white font-display font-bold text-sm">S</span>
            </div>
            <span className="font-display font-semibold text-text-primary text-lg tracking-tight">
              Savor
            </span>
          </button>
        </div>

        {/* Right */}
        <button
          onClick={() => navigate('/cart')}
          className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-elevated border border-border-default hover:border-accent-purple/40 transition-all duration-200 group"
        >
          <ShoppingBag size={17} className="text-text-secondary group-hover:text-accent-purple transition-colors" />
          <span className="text-sm font-body text-text-secondary group-hover:text-text-primary transition-colors hidden sm:block">
            Cart
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent-purple rounded-full text-[11px] font-display font-bold text-white flex items-center justify-center animate-fade-in shadow-purple-sm">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
>>>>>>> ef71eadf7600c2495aeee12a49fb5ea83ef37f64
}
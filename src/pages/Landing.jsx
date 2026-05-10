import React, { useState, useEffect, useRef } from 'react';
import BackButton from '../components/BackButton';
import CraveAssistant from '../components/CraveAssistant';
import { useNavigate } from 'react-router-dom';
import {
  Search, TrendingUp, ArrowRight, Zap, Tag, Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { trendingSearches, cuisineCategories, dishes } from '../data/mockData';
import PriceRangeSlider from '../components/PriceRangeSlider';

// ── Offers data ────────────────────────────────────────────────────────────
const OFFERS = [
  { code: 'SAVE120', label: '50% OFF', sub: 'Up to ₹120 · Orders above ₹249', color: '#7C6CFF' },
  { code: 'SAVOR100', label: 'FLAT ₹100 OFF', sub: 'Orders above ₹499', color: '#7C6CFF' },
  { code: 'FOODIE40', label: '40% OFF', sub: 'Up to ₹150 · Orders above ₹349', color: '#7C6CFF' },
];

// ── Trust badges ───────────────────────────────────────────────────────────
const TRUST = [
  { icon: <Clock size={20} />, label: 'Fast delivery', sub: 'On-time or free' },
  { icon: <ThumbsUp size={20} />, label: 'Top rated', sub: 'Quality you can trust' },
  { icon: <Shield size={20} />, label: 'Safe & hygienic', sub: 'Food safety first' },
  { icon: <RefreshCw size={20} />, label: 'Easy returns', sub: 'No hassle refunds' },
];

// ── Popular cuisine groups ─────────────────────────────────────────────────
const CUISINE_GROUPS = [
  { label: 'North Indian', emoji: '🍛', count: '12 dishes', query: 'curry' },
  { label: 'Chinese', emoji: '🥡', count: '8 dishes', query: 'chinese' },
  { label: 'Italian', emoji: '🍝', count: '8 dishes', query: 'pasta' },
  { label: 'Biryani', emoji: '🍚', count: '4 dishes', query: 'biryani' },
  { label: 'South Indian', emoji: '🥥', count: '4 dishes', query: 'dosa' },
  { label: 'Japanese', emoji: '🍣', count: '3 dishes', query: 'sushi' },
];

// ── Live ticker ────────────────────────────────────────────────────────────
const LIVE_ORDERS = [
  'Someone in Ballygunge just ordered Chicken Biryani',
  'Someone in Salt Lake just ordered Truffle Carbonara',
  'Someone in New Town just ordered Dragon Roll',
  'Someone in Park Street just ordered Seekh Kebab',
  'Someone in Alipore just ordered Masala Dosa',
];

// ── Top picks (hardcoded best rated) ──────────────────────────────────────
const TOP_PICK_IDS = ['d1', 'd32', 'd5', 'd48'];

export default function Landing() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [liveIndex, setLiveIndex] = useState(0);
  const [liveVisible, setLiveVisible] = useState(true);
  const [copiedCode, setCopiedCode] = useState(null);
  const [craveOpen, setCraveOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true); // show on load
  const craveTooltipRef = useRef(null);

  useEffect(() => {
  // Auto-hide tooltip after 4 seconds
  const t = setTimeout(() => setShowTooltip(false), 4000);

  // Live order ticker
  const id = setInterval(() => {
    setLiveVisible(false);
    setTimeout(() => {
      setLiveIndex((i) => (i + 1) % LIVE_ORDERS.length);
      setLiveVisible(true);
    }, 400);
  }, 3500);

  // Single cleanup return — clears both
  return () => {
    clearTimeout(t);
    clearInterval(id);
  };
}, []);

  const handleFind = (query = inputValue) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query.trim() });
    navigate('/search');
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const topPicks = TOP_PICK_IDS.map((id) => dishes.find((d) => d.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-bg-primary">

      {/* ── Ambient glow ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/3 rounded-full blur-[100px]" />
      </div>

      {/* ── Live ticker ── */}
      <div className="relative z-10 border-b border-border-subtle bg-bg-secondary/60 backdrop-blur-sm mt-16">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center gap-3">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-[10px] font-display font-bold text-accent-purple uppercase tracking-widest">Live</span>
          </div>
          <p className={`text-text-muted text-xs font-body transition-opacity duration-300 truncate ${liveVisible ? 'opacity-100' : 'opacity-0'}`}>
            {LIVE_ORDERS[liveIndex]}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ══════════════════════════════════════════
            SECTION 1 — HERO
            Goal: make user search immediately
        ══════════════════════════════════════════ */}
        <div className="pt-14 pb-12 flex flex-col lg:flex-row items-start gap-10">

          {/* Left — headline + search */}
          <div className="flex-1 max-w-xl">

            {/* Stats */}
            <div className="flex items-center gap-5 mb-8 flex-wrap">
              {[
                { value: '56', label: 'Dishes' },
                { value: '15', label: 'Restaurants' },
                { value: '18', label: 'Cuisines' },
                { value: '~22min', label: 'Avg delivery' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <span className="font-display font-bold text-text-primary text-lg block leading-none">{value}</span>
                  <span className="text-text-muted text-[11px] font-body">{label}</span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-[1.05] mb-5">
              <span className="text-[clamp(2.6rem,5vw,4.2rem)] text-text-primary block">
                What do you
              </span>
              <span className="text-[clamp(2.6rem,5vw,4.2rem)] gradient-text block">
                want to eat?
              </span>
            </h1>

            <p className="text-text-secondary text-base font-body leading-relaxed mb-8 max-w-sm">
              Tell us your craving and budget. We'll surface the best dish — no scrolling, no guesswork.
            </p>

            {/* ── SEARCH BAR — Primary action ── */}
            {/* Search bar + Crave icon */}
<div
  className="w-full max-w-xl mb-5 anim-init animate-fade-up delay-200"
  style={{ animationFillMode: 'forwards' }}
>
  <div className="relative flex items-center gap-2">
    {/* Search input — slightly smaller */}
    <div className="relative flex-1 group">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-purple transition-colors duration-200"
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for biryani, pizza, momos..."
        className="w-full bg-white border border-border-default rounded-2xl pl-11 pr-28 py-3.5 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all duration-200 shadow-sm"
      />
      <button
        onClick={handleFind}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-display font-bold transition-all active:scale-95"
        style={{ background: '#D9A441', color: '#1A0A00' }}
      >
        Find <ArrowRight size={13} />
      </button>
    </div>

    {/* Crave Assistant icon button */}
    <div className="relative flex-shrink-0" ref={craveTooltipRef}>
      {/* Tooltip — shows on hover or auto on first visit */}
      {showTooltip && (
        <div
          className="absolute bottom-full right-0 mb-3 w-56 animate-fade-in"
          style={{ zIndex: 40 }}
        >
          <div
            className="rounded-2xl p-3.5 shadow-lg"
            style={{
              background: '#2D1B0E',
              border: '1px solid rgba(217,164,65,0.3)',
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles size={13} style={{ color: '#D9A441' }} />
              <span className="font-display font-bold text-xs" style={{ color: '#F5EFE6' }}>
                Can't decide?
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#C4AA88' }}>
              Ask Crave Assistant — I'll help you pick the best food for your craving and budget.
            </p>
            {/* Arrow pointing down-right */}
            <div
              className="absolute bottom-[-7px] right-5"
              style={{
                width: 0, height: 0,
                borderLeft: '7px solid transparent',
                borderRight: '7px solid transparent',
                borderTop: '7px solid rgba(217,164,65,0.3)',
              }}
            />
          </div>
        </div>
      )}

      {/* The icon button */}
      <button
        onClick={() => { setCraveOpen(true); setShowTooltip(false); }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm relative"
        style={{
          background: '#2D1B0E',
          border: '1.5px solid rgba(217,164,65,0.4)',
        }}
        title="Crave Assistant"
      >
        <Sparkles size={20} style={{ color: '#D9A441' }} />
        {/* Subtle pulse ring */}
        <span
          className="absolute inset-0 rounded-2xl animate-ping"
          style={{
            background: 'rgba(217,164,65,0.12)',
            animationDuration: '2.5s',
          }}
        />
      </button>
    </div>
  </div>
</div>

            {/* Trending chips */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-text-muted text-xs font-display uppercase tracking-widest">Trending:</span>
              {trendingSearches.slice(0, 6).map((term) => (
                <button
                  key={term}
                  onClick={() => handleFind(term)}
                  className="px-3 py-1.5 rounded-xl bg-bg-elevated border border-border-default text-text-secondary text-xs font-body hover:border-accent-purple/40 hover:text-text-primary transition-all"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Right — hero food image */}
          {/* Right — hero food image — bigger, aligned */}
<div className="flex-shrink-0 w-full lg:w-[480px] xl:w-[520px] relative hidden md:flex flex-col">
  <div className="relative w-full rounded-3xl overflow-hidden shadow-card-hover border border-border-default" style={{ height: '420px' }}>
    <img
      src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
      alt="Delicious food"
      className="w-full h-full object-cover"
    />
    {/* Floating badge — bottom left, no gradient */}
    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 shadow-card border border-border-default">
      <div className="w-10 h-10 rounded-xl bg-accent-purple flex items-center justify-center flex-shrink-0 shadow-purple-sm">
        <Zap size={18} className="text-white" />
      </div>
      <div>
        <p className="font-display font-bold text-text-primary text-sm">Decision-first</p>
        <p className="text-text-muted text-xs font-body">We pick the best for your budget</p>
      </div>
    </div>
  </div>

  {/* Stats row below image — aligns with content below on scroll */}
  <div className="grid grid-cols-3 gap-3 mt-3">
    {[
      { value: '22 min', label: 'Avg delivery' },
      { value: '4.6 ★', label: 'Avg rating' },
      { value: '₹49+', label: 'Starting from' },
    ].map(({ value, label }) => (
      <div key={label} className="bg-white rounded-2xl border border-border-default px-4 py-3 text-center">
        <p className="font-display font-bold text-text-primary text-sm">{value}</p>
        <p className="text-text-muted text-[11px] font-body">{label}</p>
      </div>
    ))}
  </div>
</div>
        </div>

        {/* ══════════════════════════════════════════
            DIVIDER
        ══════════════════════════════════════════ */}
        <div className="border-t border-border-subtle mb-12" />

        {/* ══════════════════════════════════════════
            SECTION 2 — BUDGET
            Goal: let user set price comfort zone
        ══════════════════════════════════════════ */}
        <div className="mb-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-display font-bold text-text-primary text-xl mb-1">Set your budget</h2>
              <p className="text-text-muted text-sm font-body">Drag to set your comfortable price range</p>
            </div>
            {(state.priceRange.min > 0 || state.priceRange.max < 10000) && (
              <button
                onClick={() => dispatch({ type: 'SET_PRICE_RANGE', payload: { min: 0, max: 10000 } })}
                className="text-xs text-accent-purple font-display hover:underline"
              >
                Reset
              </button>
            )}
          </div>
          <div className="bg-bg-secondary rounded-2xl border border-border-default p-6">
            <PriceRangeSlider />
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 3 — OFFERS
            Goal: secondary benefit, not primary
        ══════════════════════════════════════════ */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-text-primary text-xl mb-1">Best offers for you</h2>
              <p className="text-text-muted text-sm font-body">Tap to copy code · Applied at checkout</p>
            </div>
            <Tag size={16} className="text-text-muted" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {OFFERS.map((offer) => (
              <button
                key={offer.code}
                onClick={() => handleCopy(offer.code)}
                className="text-left p-4 bg-bg-secondary rounded-2xl border border-border-default hover:border-accent-purple/40 transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="font-display font-bold text-accent-purple text-base">{offer.label}</span>
                  <span className={`text-[10px] font-display font-bold px-2 py-1 rounded-lg border transition-all flex-shrink-0 ${
                    copiedCode === offer.code
                      ? 'bg-accent-purple text-white border-accent-purple'
                      : 'bg-bg-elevated border-border-default text-text-muted group-hover:border-accent-purple/40 group-hover:text-text-secondary'
                  }`}>
                    {copiedCode === offer.code ? '✓ Copied!' : offer.code}
                  </span>
                </div>
                <p className="text-text-muted text-xs font-body">{offer.sub}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 4 — POPULAR CUISINES
            Goal: browse by cuisine type
        ══════════════════════════════════════════ */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-text-primary text-xl mb-1">Popular cuisines</h2>
              <p className="text-text-muted text-sm font-body">Tap a cuisine to explore dishes</p>
            </div>
            <button
              onClick={() => handleFind('')}
              className="flex items-center gap-1 text-accent-purple text-xs font-display hover:underline"
            >
              See all <ChevronRight size={13} />
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {CUISINE_GROUPS.map((cuisine) => (
              <button
                key={cuisine.label}
                onClick={() => handleFind(cuisine.query)}
                className="flex flex-col items-center gap-2 p-4 bg-bg-secondary rounded-2xl border border-border-default hover:border-accent-purple/40 hover:bg-bg-elevated transition-all group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  {cuisine.emoji}
                </span>
                <span className="font-display font-semibold text-text-primary text-xs text-center leading-tight">
                  {cuisine.label}
                </span>
                <span className="text-text-muted text-[10px] font-body">{cuisine.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 5 — TOP PICKS
            Goal: social proof + reduce decision effort
        ══════════════════════════════════════════ */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-bold text-text-primary text-xl mb-1">Top picks for you</h2>
              <p className="text-text-muted text-sm font-body">Curated dishes you'll love</p>
            </div>
            <button
              onClick={() => handleFind('')}
              className="flex items-center gap-1 text-accent-purple text-xs font-display hover:underline"
            >
              See all <ChevronRight size={13} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {topPicks.map((dish) => (
              <button
                key={dish.id}
                onClick={() => navigate(`/dish/${dish.id}`)}
                className="text-left bg-bg-secondary rounded-2xl border border-border-default overflow-hidden hover:border-accent-purple/40 hover:shadow-card-hover transition-all group"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'; }}
                  />
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-accent-purple/90 px-2 py-0.5 rounded-lg">
                    <span className="text-white text-[10px] font-display font-bold">★ {dish.rating}</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-lg">
                    <span className="text-white text-[10px] font-body">{dish.deliveryTime}</span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-display font-semibold text-text-primary text-xs leading-snug mb-0.5 line-clamp-1">
                    {dish.name}
                  </p>
                  <p className="font-display font-bold text-accent-purple text-sm">₹{dish.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 7 — TRUST BADGES
            Goal: reassure before leaving page
        ══════════════════════════════════════════ */}
        <div className="border-t border-border-subtle py-10 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {TRUST.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-border-default flex items-center justify-center flex-shrink-0 text-accent-purple">
                  {item.icon}
                </div>
                <div>
                  <p className="font-display font-semibold text-text-primary text-sm">{item.label}</p>
                  <p className="text-text-muted text-xs font-body">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center pb-8">
          <p className="text-text-muted text-xs font-body">
            Smart food matching · No endless scrolling · Just great food
          </p>
        </div>

      </div>
      {craveOpen && <CraveAssistant onClose={() => setCraveOpen(false)} />}

    </div>

  );
}
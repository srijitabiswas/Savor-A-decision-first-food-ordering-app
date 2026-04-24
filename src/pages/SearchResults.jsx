import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, SlidersHorizontal, Star, Clock, Users,
  Shuffle, X, ChevronRight, Plus, Minus, Zap, TrendingUp,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { filterDishes, cuisineCategories, getRestaurantById } from '../data/mockData';
import PriceRangeSlider from '../components/PriceRangeSlider';

// ── Sort options ──────────────────────────────────────────────────────────────
const SORT_OPTIONS = [
  { value: 'rating',     label: 'Top Rated'         },
  { value: 'price_asc',  label: 'Price: Low → High' },
  { value: 'price_desc', label: 'Price: High → Low' },
  { value: 'delivery',   label: 'Fastest Delivery'  },
];

// ── Tag colour map ────────────────────────────────────────────────────────────
const TAG_COLORS = {
  'Best Seller': 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
  'High Rated':  'bg-accent-gold/10   text-accent-gold   border-accent-gold/30',
  'Best Value':  'bg-emerald-500/10   text-emerald-400   border-emerald-500/20',
  'Premium':     'bg-rose-400/10      text-rose-400      border-rose-400/20',
  'Quick Bite':  'bg-sky-400/10       text-sky-400       border-sky-400/20',
  'Healthy':     'bg-teal-400/10      text-teal-400      border-teal-400/20',
  'Trending':    'bg-violet-400/10    text-violet-400    border-violet-400/20',
};

// ── Inline mini DishCard ──────────────────────────────────────────────────────
function MiniCard({ dish, delay = 0, highlight = false }) {
  const navigate  = useNavigate();
  const { state, dispatch } = useApp();
  const restaurant = getRestaurantById(dish.restaurantId);
  const inCart     = state.cart.find((i) => i.id === dish.id);
  const tag        = dish.tags?.[0];
  const tagStyle   = TAG_COLORS[tag] || 'bg-text-muted/10 text-text-secondary border-text-muted/20';

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: dish });
  };

  return (
    <div
      onClick={() => navigate(`/dish/${dish.id}`)}
      className={`anim-init animate-fade-up group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ${
        highlight
          ? 'bg-bg-card border-accent-purple/25 hover:border-accent-purple/50 hover:shadow-purple'
          : 'bg-bg-card border-border-default hover:border-accent-purple/30 hover:shadow-card-hover'
      }`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-bg-secondary">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/70 via-transparent to-transparent" />
        {tag && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg border text-[11px] font-display font-semibold tracking-wide ${tagStyle}`}>
            {tag}
          </span>
        )}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg glass">
          <Star size={11} className="text-accent-gold fill-accent-gold" />
          <span className="text-[12px] font-display font-semibold text-text-primary">{dish.rating}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-text-primary text-[15px] leading-snug mb-0.5 group-hover:text-accent-purple transition-colors line-clamp-1">
          {dish.name}
        </h3>
        <p className="text-text-muted text-xs mb-3">{restaurant?.name}</p>
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-text-muted text-[12px]">
            <Clock size={12} />{dish.deliveryTime}
          </span>
          <span className="w-1 h-1 rounded-full bg-border-default" />
          <span className="flex items-center gap-1.5 text-text-muted text-[12px]">
            <Users size={12} />{dish.quantity}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-text-primary text-lg">₹{dish.price}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-display font-semibold transition-all duration-200 ${
              inCart
                ? 'bg-accent-purple text-white shadow-purple-sm'
                : 'bg-bg-elevated border border-border-default text-text-secondary hover:border-accent-purple/40 hover:text-accent-purple'
            }`}
          >
            <Plus size={13} />
            {inCart ? `${inCart.qty} added` : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Hero card (top pick) ──────────────────────────────────────────────────────
function HeroCard({ dish }) {
  const navigate   = useNavigate();
  const { state, dispatch } = useApp();
  const restaurant = getRestaurantById(dish.restaurantId);
  const inCart     = state.cart.find((i) => i.id === dish.id);

  return (
    <div
      onClick={() => navigate(`/dish/${dish.id}`)}
      className="relative cursor-pointer rounded-3xl overflow-hidden border border-accent-purple/30 bg-bg-card shadow-purple group animate-fade-up"
      style={{ animationFillMode: 'forwards' }}
    >
      {/* Background image */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/50 to-transparent" />

        {/* Best Match badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-accent-purple/90 backdrop-blur-sm shadow-purple">
          <Zap size={13} className="text-white" />
          <span className="text-white font-display font-bold text-xs tracking-wide uppercase">
            Best Match
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass">
          <Star size={13} className="text-accent-gold fill-accent-gold" />
          <span className="font-display font-bold text-text-primary text-sm">{dish.rating}</span>
          <span className="text-text-muted text-xs">({dish.ratingCount})</span>
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {dish.tags?.map((tag) => {
            const s = TAG_COLORS[tag] || '';
            return (
              <span key={tag} className={`px-2.5 py-1 rounded-lg border text-[11px] font-display font-semibold ${s}`}>
                {tag}
              </span>
            );
          })}
        </div>

        <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mb-1 group-hover:text-accent-purple transition-colors">
          {dish.name}
        </h2>
        <p className="text-text-secondary text-sm mb-4">{restaurant?.name} · {restaurant?.area}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-text-secondary text-sm">
              <Clock size={14} />{dish.deliveryTime}
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary text-sm">
              <Users size={14} />{dish.quantity}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-2xl text-text-primary">₹{dish.price}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: 'ADD_TO_CART', payload: dish });
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 ${
                inCart
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-accent-purple text-white hover:bg-accent-purple-dim shadow-purple-sm'
              }`}
            >
              {inCart ? (
                <>
                  <span>{inCart.qty}</span>
                  <span>in cart</span>
                </>
              ) : (
                <>
                  <Plus size={15} />
                  Add to cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Decide For Me modal ───────────────────────────────────────────────────────
function DecideModal({ dish, onClose, onAnother }) {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const restaurant = getRestaurantById(dish.restaurantId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-bg-secondary border border-accent-purple/30 rounded-3xl overflow-hidden max-w-md w-full shadow-purple animate-fade-up">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-bg-elevated flex items-center justify-center z-10"
        >
          <X size={15} className="text-text-secondary" />
        </button>

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1.5 bg-accent-purple px-3 py-1.5 rounded-xl">
              <Zap size={13} className="text-white" />
              <span className="text-white font-display font-bold text-xs">We chose this for you</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <h2 className="font-display font-bold text-xl text-text-primary mb-1">{dish.name}</h2>
          <p className="text-text-secondary text-sm mb-4">{restaurant?.name} · {restaurant?.area}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              <Star size={14} className="text-accent-gold fill-accent-gold" />
              <span className="font-display font-semibold text-text-primary text-sm">{dish.rating}</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-muted text-sm">
              <Clock size={14} />{dish.deliveryTime}
            </div>
            <div className="flex items-center gap-1.5 text-text-muted text-sm">
              <Users size={14} />{dish.quantity}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="font-display font-bold text-2xl text-text-primary">₹{dish.price}</span>
            <div className="flex gap-2">
              <button
                onClick={onAnother}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border-default text-text-secondary text-sm font-display hover:border-accent-purple/30 transition-all"
              >
                <Shuffle size={14} />
                Another
              </button>
              <button
                onClick={() => {
                  dispatch({ type: 'ADD_TO_CART', payload: dish });
                  onClose();
                  navigate(`/dish/${dish.id}`);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-purple text-white text-sm font-display font-semibold hover:bg-accent-purple-dim transition-all shadow-purple-sm"
              >
                <Plus size={14} />
                Yes, add it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Filter sidebar / panel ────────────────────────────────────────────────────
function FilterPanel({ open, onClose }) {
  const { state, dispatch } = useApp();

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-bg-secondary border-l border-border-default z-50 flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-default">
          <h2 className="font-display font-semibold text-text-primary flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-accent-purple" />
            Filters
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-bg-elevated flex items-center justify-center"
          >
            <X size={15} className="text-text-secondary" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-8">
          {/* Price range */}
          <div>
            <h3 className="font-display font-semibold text-text-primary text-sm mb-4">Price Range</h3>
            <PriceRangeSlider />
          </div>

          {/* Sort */}
          <div>
            <h3 className="font-display font-semibold text-text-primary text-sm mb-3">Sort by</h3>
            <div className="space-y-2">
              {SORT_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    state.sortBy === opt.value
                      ? 'bg-accent-purple/10 border-accent-purple/40'
                      : 'bg-bg-elevated border-border-default'
                  }`}
                >
                  <input
                    type="radio"
                    name="sort"
                    value={opt.value}
                    checked={state.sortBy === opt.value}
                    onChange={() => dispatch({ type: 'SET_SORT', payload: opt.value })}
                    className="accent-[#7C6CFF]"
                  />
                  <span className="text-sm font-body text-text-secondary">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-border-default">
          <button
            onClick={() => { dispatch({ type: 'RESET_FILTERS' }); onClose(); }}
            className="w-full py-3 rounded-xl border border-border-default text-text-secondary text-sm font-display font-medium hover:border-accent-purple/30 transition-colors"
          >
            Reset all filters
          </button>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function SearchResults() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('all');
  const [filterOpen, setFilterOpen]         = useState(false);
  const [decideModal, setDecideModal]       = useState(null);
  const [usedIds, setUsedIds]               = useState([]);

  // Filter dishes
  const allResults = useMemo(() => filterDishes({
    query:      state.searchQuery,
    priceRange: (state.priceRange.min > 0 || state.priceRange.max < 10000) ? state.priceRange : null,
    category:   activeCategory,
    sortBy:     state.sortBy,
  }), [state.searchQuery, state.priceRange, activeCategory, state.sortBy]);

  const topPick       = allResults[0]   || null;
  const runnerUps     = allResults.slice(1, 4);
  const restOfResults = allResults.slice(4);

  const hasActiveFilters =
    state.priceRange.min > 0 ||
    state.priceRange.max < 10000 ||
    state.sortBy !== 'rating' ||
    activeCategory !== 'all';

  // "Decide for me" — pick a random top dish
  const handleDecide = () => {
    const pool = allResults.filter((d) => !usedIds.includes(d.id)).slice(0, 10);
    if (pool.length === 0) { setUsedIds([]); return; }
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setUsedIds((prev) => [...prev, pick.id]);
    setDecideModal(pick);
  };

  const handleAnother = () => {
    const pool = allResults.filter(
      (d) => !usedIds.includes(d.id) && d.id !== decideModal?.id
    ).slice(0, 10);
    if (pool.length === 0) { setUsedIds([]); setDecideModal(null); return; }
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setUsedIds((prev) => [...prev, pick.id]);
    setDecideModal(pick);
  };

  // Visible categories based on results
  const visibleCats = useMemo(() => {
    const available = new Set(filterDishes({
      query: state.searchQuery,
      priceRange: (state.priceRange.min > 0 || state.priceRange.max < 10000) ? state.priceRange : null,
    }).map((d) => d.category));

    return cuisineCategories.filter(
      (c) => c.id === 'all' || available.has(c.id)
    );
  }, [state.searchQuery, state.priceRange]);

  return (
    <>
      <FilterPanel open={filterOpen} onClose={() => setFilterOpen(false)} />
      {decideModal && (
        <DecideModal
          dish={decideModal}
          onClose={() => setDecideModal(null)}
          onAnother={handleAnother}
        />
      )}

      <div className="min-h-screen bg-bg-primary pt-16 pb-24">
        {/* ── Sticky search + controls ─── */}
        <div className="sticky top-16 z-30 glass border-b border-border-default">
          <div className="max-w-6xl mx-auto px-6 py-3 flex gap-3 items-center">
            {/* Search input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                value={state.searchQuery}
                onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                placeholder="Search dishes, cuisines, restaurants..."
                className="w-full bg-bg-elevated border border-border-default rounded-xl pl-10 pr-4 py-2.5 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
              />
            </div>

            {/* Filter button */}
            <button
              onClick={() => setFilterOpen(true)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-display font-medium transition-all flex-shrink-0 ${
                hasActiveFilters
                  ? 'bg-accent-purple/15 border-accent-purple/50 text-accent-purple'
                  : 'bg-bg-elevated border-border-default text-text-secondary hover:border-accent-purple/30'
              }`}
            >
              <SlidersHorizontal size={15} />
              <span className="hidden sm:inline">Filter</span>
              {hasActiveFilters && (
                <span className="w-4 h-4 rounded-full bg-accent-purple text-white text-[10px] flex items-center justify-center font-bold">
                  !
                </span>
              )}
            </button>

            {/* Sort (desktop only) */}
            <select
              value={state.sortBy}
              onChange={(e) => dispatch({ type: 'SET_SORT', payload: e.target.value })}
              className="hidden sm:block appearance-none bg-bg-elevated border border-border-default rounded-xl px-4 py-2.5 text-text-secondary font-body text-sm focus:outline-none focus:border-accent-purple/60 cursor-pointer transition-all"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} className="bg-bg-secondary">
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-6">
          {/* ── Active filter chips ─── */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-5">
              {(state.priceRange.min > 0 || state.priceRange.max < 10000) && (
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-display font-medium">
                  ₹{state.priceRange.min.toLocaleString('en-IN')} – ₹{state.priceRange.max >= 10000 ? '10,000+' : state.priceRange.max.toLocaleString('en-IN')}
                  <button onClick={() => dispatch({ type: 'SET_PRICE_RANGE', payload: { min: 0, max: 10000 } })}>
                    <X size={11} />
                  </button>
                </span>
              )}
              {activeCategory !== 'all' && (
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-display font-medium">
                  {cuisineCategories.find((c) => c.id === activeCategory)?.label}
                  <button onClick={() => setActiveCategory('all')}><X size={11} /></button>
                </span>
              )}
              <button
                onClick={() => { dispatch({ type: 'RESET_FILTERS' }); setActiveCategory('all'); }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border-default text-text-muted text-xs font-display hover:text-text-secondary transition-colors"
              >
                <X size={11} /> Clear all
              </button>
            </div>
          )}

          {/* ── Category tabs ─── */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {visibleCats.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-display font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-accent-purple border-accent-purple text-white shadow-purple-sm'
                    : 'bg-bg-elevated border-border-default text-text-secondary hover:border-accent-purple/30 hover:text-text-primary'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {allResults.length === 0 ? (
            /* ── Empty state ─── */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-3xl bg-bg-secondary flex items-center justify-center mb-4">
                <Search size={32} className="text-text-muted" />
              </div>
              <h3 className="font-display font-semibold text-text-primary text-lg mb-2">No dishes found</h3>
              <p className="text-text-secondary text-sm mb-6 max-w-xs">
                Try adjusting your budget range or search for a different cuisine.
              </p>
              <button
                onClick={() => { dispatch({ type: 'RESET_FILTERS' }); setActiveCategory('all'); }}
                className="px-6 py-2.5 rounded-xl bg-accent-purple text-white text-sm font-display font-semibold hover:bg-accent-purple-dim transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              {/* ── Result count + Decide For Me ─── */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-text-muted text-sm font-body">
                    <span className="text-text-primary font-display font-semibold">{allResults.length}</span>
                    {' '}dish{allResults.length !== 1 ? 'es' : ''} found
                    {state.searchQuery && (
                      <> for <span className="text-text-primary">"{state.searchQuery}"</span></>
                    )}
                  </p>
                </div>
                <button
                  onClick={handleDecide}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-secondary border border-border-default text-text-secondary text-sm font-display font-medium hover:border-accent-purple/40 hover:text-accent-purple transition-all group"
                >
                  <Shuffle size={15} className="group-hover:rotate-180 transition-transform duration-500" />
                  <span className="hidden sm:inline">Decide for me</span>
                  <span className="sm:hidden">Decide</span>
                </button>
              </div>

              {/* ── HERO: Best Match ─── */}
              {topPick && (
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap size={15} className="text-accent-purple" />
                    <h2 className="font-display font-semibold text-text-primary">Your Best Match</h2>
                    <span className="ml-auto text-xs text-text-muted font-body">
                      Based on rating & relevance
                    </span>
                  </div>
                  <HeroCard dish={topPick} />
                </section>
              )}

              {/* ── Runner-ups ─── */}
              {runnerUps.length > 0 && (
                <section className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={15} className="text-accent-gold" />
                    <h2 className="font-display font-semibold text-text-primary">Also Consider</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {runnerUps.map((dish, i) => (
                      <MiniCard key={dish.id} dish={dish} delay={i * 80} highlight />
                    ))}
                  </div>
                </section>
              )}

              {/* ── All remaining results ─── */}
              {restOfResults.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-border-default" />
                    <span className="text-text-muted text-xs font-display uppercase tracking-widest px-3">
                      All {allResults.length} matches
                    </span>
                    <div className="h-px flex-1 bg-border-default" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {restOfResults.map((dish, i) => (
                      <MiniCard key={dish.id} dish={dish} delay={i * 50} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>

      {/* ── Floating Decide For Me button (mobile) ─── */}
      {allResults.length > 1 && (
        <button
          onClick={handleDecide}
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-5 py-3.5 bg-accent-purple rounded-2xl text-white font-display font-semibold text-sm shadow-purple hover:bg-accent-purple-dim transition-all hover:scale-105 active:scale-95 sm:hidden"
        >
          <Shuffle size={16} />
          Decide for me
        </button>
      )}
    </>
  );
}
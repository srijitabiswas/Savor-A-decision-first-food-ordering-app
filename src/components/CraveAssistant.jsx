import React, { useState, useRef, useEffect } from 'react';
import {
  X, Send, Zap, RotateCcw, Plus, Star, Clock,
  Users, ShoppingBag, Sparkles, ChevronRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getRecommendations } from '../utils/craveEngine';
import { useNavigate } from 'react-router-dom';

// ── Color palette (chocolate + gold) ─────────────────────────────
const C = {
  bg:        '#2D1B17',
  surface:   '#3A241F',
  surfaceL:  '#4A2E28',
  gold:      '#D4A017',
  goldSoft:  '#E6C36A',
  goldDim:   'rgba(212,160,23,0.15)',
  textPri:   '#F8F5F2',
  textSec:   '#C7B8A3',
  textMuted: '#8A7A6A',
  border:    'rgba(212,160,23,0.2)',
  borderDim: 'rgba(255,255,255,0.07)',
};

// ── Suggested prompt chips ────────────────────────────────────────
const PROMPTS = [
  { emoji: '🌶️', label: 'Spicy under ₹150' },
  { emoji: '🧀', label: 'Cheesy comfort food' },
  { emoji: '🥗', label: 'Healthy & light' },
  { emoji: '🌙', label: 'Late night snack' },
  { emoji: '💪', label: 'High protein meal' },
  { emoji: '⚡', label: 'Under ₹100, quick' },
  { emoji: '☔', label: 'Rainy day comfort' },
  { emoji: '🍜', label: 'Spicy noodles' },
  { emoji: '🫔', label: 'Juicy momos' },
  { emoji: '🍕', label: 'Cheesy pizza' },
];

// ── Recommendation card ────────────────────────────────────────────
function RecommendationCard({ dish, label = 'We chose this for you', onAdd, onAnother, onViewMore, isMain = true }) {
  if (!dish) return null;
  const restaurant = dish.restaurant;
  const FALLBACK = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80';

  return (
    <div
      className="rounded-2xl overflow-hidden animate-fade-in"
      style={{
        background: C.surface,
        border: isMain ? `1.5px solid ${C.gold}` : `1px solid ${C.borderDim}`,
        boxShadow: isMain ? `0 0 40px rgba(212,160,23,0.12)` : 'none',
      }}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={dish.image || FALLBACK}
          alt={dish.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK; }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(45,27,23,0.85) 0%, transparent 60%)' }}
        />

        {/* Badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide"
          style={{ background: C.gold, color: '#1A0F0A' }}
        >
          <Sparkles size={11} />
          {label}
        </div>

        {/* Rating */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-[12px] font-bold"
          style={{ background: 'rgba(45,27,23,0.85)', color: C.goldSoft }}
        >
          <Star size={11} fill="currentColor" />
          {dish.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="font-display font-bold text-base leading-snug mb-0.5 line-clamp-1"
          style={{ color: C.textPri }}
        >
          {dish.name}
        </h3>
        <p className="text-xs mb-3" style={{ color: C.textSec }}>
          {restaurant?.name || 'Restaurant'}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center gap-1 text-[11px]" style={{ color: C.textMuted }}>
            <Clock size={11} /> {dish.deliveryTime}
          </span>
          <span className="text-[11px]" style={{ color: C.textMuted }}>·</span>
          <span className="flex items-center gap-1 text-[11px]" style={{ color: C.textMuted }}>
            <Users size={11} /> {dish.quantity}
          </span>
        </div>

        {/* Price + actions */}
        {isMain ? (
          <div className="flex items-center justify-between gap-2">
            <span className="font-display font-bold text-xl" style={{ color: C.goldSoft }}>
              ₹{dish.price}
            </span>
            <div className="flex gap-2">
              <button
                onClick={onAnother}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: 'transparent',
                  border: `1px solid ${C.border}`,
                  color: C.textSec,
                }}
              >
                <RotateCcw size={12} /> Another
              </button>
              <button
                onClick={() => onAdd(dish)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all"
                style={{ background: C.gold, color: '#1A0F0A' }}
              >
                <Plus size={13} /> Add to cart
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-lg" style={{ color: C.goldSoft }}>
              ₹{dish.price}
            </span>
            <button
              onClick={() => onAdd(dish)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
              style={{ background: C.goldDim, color: C.goldSoft, border: `1px solid ${C.border}` }}
            >
              <Plus size={12} /> Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main CraveAssistant component ─────────────────────────────────
export default function CraveAssistant({ onClose }) {
  const { dispatch } = useApp();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [query, setQuery] = useState('');
  const [phase, setPhase] = useState('input'); // 'input' | 'results'
  const [recommendations, setRecommendations] = useState([]);
  const [usedIds, setUsedIds] = useState([]);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 300);
  }, []);

  const handleSubmit = (q = query) => {
    if (!q.trim()) return;
    setQuery(q);
    setIsThinking(true);

    // Simulate slight thinking delay for premium feel
    setTimeout(() => {
      const results = getRecommendations(q, 3);
      setRecommendations(results);
      setUsedIds(results.map((d) => d.id));
      setPhase('results');
      setIsThinking(false);
    }, 900);
  };

  const handleAnother = () => {
    const newResults = getRecommendations(query, 6)
      .filter((d) => !usedIds.includes(d.id));

    if (newResults.length === 0) {
      // Reshuffle from all
      const fresh = getRecommendations(query, 3);
      setRecommendations(fresh);
      setUsedIds(fresh.map((d) => d.id));
    } else {
      const next = newResults.slice(0, 3);
      setRecommendations(next);
      setUsedIds((prev) => [...prev, ...next.map((d) => d.id)]);
    }
  };

  const handleAdd = (dish) => {
    dispatch({ type: 'ADD_TO_CART', payload: dish });
    onClose();
  };

  const handleViewAll = () => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    onClose();
    navigate('/search');
  };

  const handleReset = () => {
    setPhase('input');
    setQuery('');
    setRecommendations([]);
    setUsedIds([]);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 animate-fade-in"
        style={{ background: 'rgba(20,10,8,0.75)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="w-full max-w-lg pointer-events-auto animate-fade-up rounded-3xl overflow-hidden"
          style={{
            background: C.bg,
            border: `1px solid ${C.border}`,
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212,160,23,0.08)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >

          {/* ── Header ── */}
          <div
            className="flex items-center justify-between px-6 py-5"
            style={{ borderBottom: `1px solid ${C.borderDim}` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: C.goldDim, border: `1px solid ${C.border}` }}
              >
                <Sparkles size={18} style={{ color: C.gold }} />
              </div>
              <div>
                <h2 className="font-display font-bold text-base" style={{ color: C.textPri }}>
                  Crave Assistant
                </h2>
                <p className="text-[11px]" style={{ color: C.textMuted }}>
                  Tell me what you're craving
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-all"
              style={{ background: C.surfaceL, color: C.textSec }}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── Input phase ── */}
          {phase === 'input' && (
            <div className="px-6 py-6">

              {/* Greeting */}
              <div className="mb-6">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: C.textSec }}
                >
                  Describe your craving naturally — mood, budget, cuisine, anything. I'll find the perfect dish for you.
                </p>
              </div>

              {/* Suggested prompts */}
              <div className="mb-5">
                <p
                  className="text-[10px] font-display font-semibold uppercase tracking-widest mb-3"
                  style={{ color: C.textMuted }}
                >
                  Quick picks
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROMPTS.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => handleSubmit(p.label)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all"
                      style={{
                        background: C.surface,
                        border: `1px solid ${C.borderDim}`,
                        color: C.textSec,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = C.border;
                        e.currentTarget.style.color = C.textPri;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = C.borderDim;
                        e.currentTarget.style.color = C.textSec;
                      }}
                    >
                      <span>{p.emoji}</span>
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input box */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: `1.5px solid ${C.border}`, background: C.surface }}
              >
                <textarea
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                  placeholder="e.g. I want something spicy and juicy under ₹200..."
                  rows={3}
                  className="w-full resize-none bg-transparent px-4 pt-4 pb-2 text-sm outline-none font-body"
                  style={{ color: C.textPri }}
                />
                <div className="flex items-center justify-between px-4 pb-3">
                  <p className="text-[11px]" style={{ color: C.textMuted }}>
                    Press Enter to find your dish
                  </p>
                  <button
                    onClick={() => handleSubmit()}
                    disabled={!query.trim()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all disabled:opacity-40"
                    style={{ background: C.gold, color: '#1A0F0A' }}
                  >
                    <Zap size={13} /> Find it
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Thinking state ── */}
          {isThinking && (
            <div className="px-6 py-12 flex flex-col items-center justify-center text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 animate-pulse"
                style={{ background: C.goldDim, border: `1px solid ${C.border}` }}
              >
                <Sparkles size={24} style={{ color: C.gold }} />
              </div>
              <p className="font-display font-semibold text-base mb-1" style={{ color: C.textPri }}>
                Finding your perfect match…
              </p>
              <p className="text-sm" style={{ color: C.textMuted }}>
                Analysing your craving
              </p>
            </div>
          )}

          {/* ── Results phase ── */}
          {phase === 'results' && !isThinking && (
            <div className="px-6 py-5">

              {/* Query recap */}
              <div
                className="flex items-center justify-between mb-5 pb-4"
                style={{ borderBottom: `1px solid ${C.borderDim}` }}
              >
                <div>
                  <p className="text-[10px] font-display uppercase tracking-widest mb-1" style={{ color: C.textMuted }}>
                    Your craving
                  </p>
                  <p className="text-sm font-display font-semibold" style={{ color: C.textSec }}>
                    "{query}"
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.borderDim}`,
                    color: C.textSec,
                  }}
                >
                  <RotateCcw size={12} /> Change
                </button>
              </div>

              {recommendations.length === 0 ? (
                <div className="text-center py-8">
                  <p className="font-display font-semibold mb-2" style={{ color: C.textPri }}>
                    No exact matches found
                  </p>
                  <p className="text-sm mb-4" style={{ color: C.textMuted }}>
                    Try a different craving or remove the budget constraint
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold"
                    style={{ background: C.gold, color: '#1A0F0A' }}
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <>
                  {/* Best match */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={14} style={{ color: C.gold }} />
                      <p className="text-xs font-display font-bold uppercase tracking-widest" style={{ color: C.gold }}>
                        Best Match
                      </p>
                    </div>
                    <RecommendationCard
                      dish={recommendations[0]}
                      label="We chose this for you"
                      onAdd={handleAdd}
                      onAnother={handleAnother}
                      isMain
                    />
                  </div>

                  {/* Alternate matches */}
                  {recommendations.slice(1).length > 0 && (
                    <div className="mb-5">
                      <p
                        className="text-[10px] font-display uppercase tracking-widest mb-3"
                        style={{ color: C.textMuted }}
                      >
                        Alternate matches
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {recommendations.slice(1, 3).map((dish) => (
                          <RecommendationCard
                            key={dish.id}
                            dish={dish}
                            label="Also great"
                            onAdd={handleAdd}
                            onAnother={handleAnother}
                            isMain={false}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View all */}
                  <button
                    onClick={handleViewAll}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-display font-semibold transition-all"
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.borderDim}`,
                      color: C.textSec,
                    }}
                  >
                    View all results for "{query}"
                    <ChevronRight size={15} />
                  </button>
                </>
              )}
            </div>
          )}

          {/* ── Footer ── */}
          <div
            className="px-6 py-3 text-center"
            style={{ borderTop: `1px solid ${C.borderDim}` }}
          >
            <p className="text-[10px]" style={{ color: C.textMuted }}>
              Powered by Savor · Smart food matching
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
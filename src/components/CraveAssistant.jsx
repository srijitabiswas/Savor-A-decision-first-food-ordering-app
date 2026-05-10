import React, { useState, useRef, useEffect } from 'react';
import {
  X, Zap, RotateCcw, Plus, Star, Clock,
  Users, Sparkles, ChevronRight, ArrowRight,
  ShoppingCart, Search,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getRecommendations } from '../utils/craveEngine';
import { useNavigate } from 'react-router-dom';

// ── Design tokens ──────────────────────────────────────────────────
const DARK = '#F5EDE0';       // light warm cream background
const SURFACE = '#EDE0CC';    // slightly darker surface
const SURFACE2 = '#E5D4B8';   // card surface
const GOLD = '#A0620A';       // dark amber — readable on light bg
const GOLD_DIM = 'rgba(160,98,10,0.12)';
const GOLD_BORDER = 'rgba(160,98,10,0.25)';
const TEXT_PRI = '#1A0E05';   // near-black for primary text
const TEXT_SEC = '#4A3520';   // dark brown for secondary
const TEXT_MUTED = '#8A7060'; // muted brown

// ── Quick prompts ──────────────────────────────────────────────────
const QUICK_PROMPTS = [
  { emoji: '🌶️', text: 'Something spicy under ₹200' },
  { emoji: '🧀', text: 'Cheesy comfort food' },
  { emoji: '🌿', text: 'Light and healthy meal' },
  { emoji: '🌙', text: 'Late night snack' },
  { emoji: '💪', text: 'High protein meal' },
  { emoji: '⚡', text: 'Quick bite under ₹100' },
  { emoji: '☔', text: 'Comfort food for rainy day' },
  { emoji: '🥟', text: 'Juicy spicy momos' },
  { emoji: '🍕', text: 'Cheesy pizza' },
  { emoji: '🍜', text: 'Hot noodles' },
];

// ── Dish card inside modal ─────────────────────────────────────────
function DishCard({ dish, rank, onAdd, onView }) {
  const [imgErr, setImgErr] = useState(false);
  const FALLBACK = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80';
  const isTop = rank === 0;

  return (
    <div
      style={{
        background: isTop ? SURFACE2 : SURFACE,
        border: `1px solid ${isTop ? GOLD_BORDER : 'rgba(255,255,255,0.06)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: isTop ? `0 0 30px rgba(217,164,65,0.1)` : 'none',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: isTop ? 160 : 120, overflow: 'hidden' }}>
        <img
          src={imgErr ? FALLBACK : (dish.image || FALLBACK)}
          alt={dish.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={() => setImgErr(true)}
        />
        {/* Gradient overlay on bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
          background: 'linear-gradient(to top, rgba(245,237,224,0.92) 0%, transparent 60%)',
        }} />

        {/* Top badge */}
        {isTop && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            background: GOLD, color: '#1A0A00',
            padding: '3px 10px', borderRadius: 8,
            fontSize: 11, fontWeight: 800, letterSpacing: 0.5,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <Sparkles size={10} /> BEST MATCH
          </div>
        )}

        {rank > 0 && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            background: 'rgba(28,16,8,0.85)', color: TEXT_SEC,
            padding: '3px 10px', borderRadius: 8,
            fontSize: 10, fontWeight: 700,
          }}>
            Alt {rank}
          </div>
        )}

        {/* Rating */}
        <div style={{
          position: 'absolute', top: 10, right: 10,
          background: 'rgba(28,16,8,0.85)',
          padding: '3px 8px', borderRadius: 8,
          display: 'flex', alignItems: 'center', gap: 4,
          fontSize: 12, fontWeight: 700, color: GOLD,
        }}>
          <Star size={11} fill={GOLD} color={GOLD} /> {dish.rating}
        </div>

        {/* Bottom info */}
        <div style={{
          position: 'absolute', bottom: 10, left: 10, right: 10,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        }}>
          <div>
            <div style={{ color: TEXT_PRI, fontWeight: 700, fontSize: isTop ? 16 : 13, lineHeight: 1.2 }}>
              {dish.name}
            </div>
            <div style={{ color: TEXT_SEC, fontSize: 11, marginTop: 2 }}>
              {dish.restaurant?.name || ''}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: isTop ? '12px 14px 14px' : '10px 12px 12px' }}>
        {/* Meta row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: TEXT_MUTED, fontSize: 11 }}>
            <Clock size={11} /> {dish.deliveryTime}
          </span>
          <span style={{ color: TEXT_MUTED, fontSize: 11 }}>·</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: TEXT_MUTED, fontSize: 11 }}>
            <Users size={11} /> {dish.quantity}
          </span>
          <span style={{ color: TEXT_MUTED, fontSize: 11 }}>·</span>
          <span style={{ color: TEXT_MUTED, fontSize: 11 }}>
            {dish.spiceLevel}
          </span>
        </div>

        {/* Price + actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: GOLD, fontWeight: 800, fontSize: isTop ? 22 : 17 }}>
            ₹{dish.price}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {isTop && (
              <button
                onClick={() => onView(dish)}
                style={{
                  padding: '7px 12px', borderRadius: 10, fontSize: 12, fontWeight: 600,
                  background: 'transparent', border: `1px solid ${GOLD_BORDER}`,
                  color: TEXT_SEC, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 5,
                }}
              >
                View
              </button>
            )}
            <button
              onClick={() => onAdd(dish)}
              style={{
                padding: '7px 14px', borderRadius: 10, fontSize: 12, fontWeight: 700,
                background: GOLD, border: 'none', color: '#1A0A00',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5,
              }}
            >
              <Plus size={13} /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
// MAIN CRAVE ASSISTANT
// ══════════════════════════════════════════════════════════════════
export default function CraveAssistant({ onClose }) {
  const { dispatch } = useApp();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  const [phase, setPhase] = useState('input'); // 'input' | 'thinking' | 'results'
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [addedIds, setAddedIds] = useState([]);

  // Focus input on mount
  useEffect(() => {
    setTimeout(() => textareaRef.current?.focus(), 400);
  }, []);

  // ── Analyze and show results ────────────────────────────────────
  const analyze = (q = query) => {
    if (!q.trim()) return;
    setQuery(q.trim());
    setPhase('thinking');

    // Simulated AI thinking delay — premium feel
    setTimeout(() => {
      const found = getRecommendations(q.trim(), 3);
      setResults(found);
      setPhase('results');
    }, 1100);
  };

  // ── Add to cart ─────────────────────────────────────────────────
  const handleAdd = (dish) => {
    dispatch({ type: 'ADD_TO_CART', payload: dish });
    setAddedIds((prev) => [...prev, dish.id]);
    // Brief feedback then close
    setTimeout(() => onClose(), 800);
  };

  // ── View dish detail ────────────────────────────────────────────
  const handleView = (dish) => {
    onClose();
    navigate(`/dish/${dish.id}`);
  };

  // ── See all results ─────────────────────────────────────────────
  const handleSeeAll = () => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    onClose();
    navigate('/search');
  };

  // ── Try again ───────────────────────────────────────────────────
  const handleReset = () => {
    setPhase('input');
    setQuery('');
    setResults([]);
    setAddedIds([]);
    setTimeout(() => textareaRef.current?.focus(), 100);
  };

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 50,
          background: 'rgba(30,15,5,0.6)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          animation: 'fadeIn 0.2s ease',
        }}
      />

      {/* ── Modal ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16, pointerEvents: 'none',
      }}>
        <div
          style={{
            width: '100%', maxWidth: 520,
            background: DARK,
            border: `1.5px solid ${GOLD_BORDER}`,
            borderRadius: 24,
            boxShadow: '0 20px 60px rgba(0,0,0,0.2), 0 4px 16px rgba(160,98,10,0.1)',
            pointerEvents: 'all',
            maxHeight: '90vh',
            overflowY: 'auto',
            animation: 'fadeUp 0.3s ease',
          }}
        >

          {/* ── HEADER ── */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '18px 20px',
            borderBottom: `1px solid rgba(0,0,0,0.07)`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 12,
                background: GOLD_DIM, border: `1px solid ${GOLD_BORDER}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Sparkles size={18} color={GOLD} />
              </div>
              <div>
                <div style={{ color: TEXT_PRI, fontWeight: 700, fontSize: 15, fontFamily: 'Sora, sans-serif' }}>
                  Crave Assistant
                </div>
                <div style={{ color: TEXT_MUTED, fontSize: 11 }}>
                  Tell me what you feel like eating
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                width: 32, height: 32, borderRadius: 10,
                background: SURFACE, border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: TEXT_SEC,
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* ════════════════════════════════════════
              PHASE: INPUT
          ════════════════════════════════════════ */}
          {phase === 'input' && (
            <div style={{ padding: '20px 20px 24px' }}>

              {/* Intro */}
              <p style={{ color: TEXT_SEC, fontSize: 13, lineHeight: 1.6, marginBottom: 18 }}>
                Describe what you're craving — mood, budget, spice level, cuisine. I'll find your perfect dish.
              </p>

              {/* Text input */}
              <div style={{
                background: '#FFF8F0',
                border: `1.5px solid ${GOLD_BORDER}`,
                borderRadius: 16,
                overflow: 'hidden',
                marginBottom: 16,
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05)',
              }}>
                <textarea
                  ref={textareaRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      analyze();
                    }
                  }}
                  placeholder="e.g. I want something spicy and juicy under ₹200..."
                  rows={3}
                  style={{
                    width: '100%', resize: 'none',
                    background: 'transparent',
                    border: 'none', outline: 'none',
                    padding: '14px 16px 8px',
                    color: TEXT_PRI,
                    fontSize: 14,
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: 1.5,
                    boxSizing: 'border-box',
                  }}
                />
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px 12px',
                }}>
                  <span style={{ color: TEXT_MUTED, fontSize: 11 }}>
                    Press Enter or tap Find
                  </span>
                  <button
                    onClick={() => analyze()}
                    disabled={!query.trim()}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '8px 16px', borderRadius: 10,
                      background: query.trim() ? GOLD : 'rgba(217,164,65,0.3)',
                      border: 'none', cursor: query.trim() ? 'pointer' : 'default',
                      color: '#1A0A00', fontSize: 13, fontWeight: 700,
                      transition: 'all 0.2s',
                    }}
                  >
                    <Zap size={14} /> Find dishes
                  </button>
                </div>
              </div>

              {/* Quick prompts */}
              <div style={{ marginBottom: 4 }}>
                <p style={{
                  color: TEXT_MUTED, fontSize: 10,
                  fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: 10,
                }}>
                  Quick picks — tap to search
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {QUICK_PROMPTS.map((p) => (
                    <button
                      key={p.text}
                      onClick={() => analyze(p.text)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        padding: '7px 12px', borderRadius: 20,
                        background: SURFACE,
                        border: `1px solid rgba(0,0,0,0.08)`,
                        color: TEXT_SEC, fontSize: 12, fontWeight: 500,
                        cursor: 'pointer', transition: 'all 0.15s',
                      }}
                      onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = GOLD_BORDER;
                          e.currentTarget.style.background = '#E5D4B8';
                          e.currentTarget.style.color = TEXT_PRI;
                        }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                        e.currentTarget.style.background = SURFACE;
                        e.currentTarget.style.color = TEXT_SEC;
                      }}
                    >
                      <span>{p.emoji}</span> {p.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════
              PHASE: THINKING
          ════════════════════════════════════════ */}
          {phase === 'thinking' && (
            <div style={{
              padding: '48px 24px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', textAlign: 'center', gap: 12,
            }}>
              {/* Pulsing icon */}
              <div style={{
                width: 60, height: 60, borderRadius: 20,
                background: GOLD_DIM, border: `1px solid ${GOLD_BORDER}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                animation: 'pulse 1.2s ease-in-out infinite',
              }}>
                <Sparkles size={28} color={GOLD} />
              </div>
              <div>
                <div style={{ color: TEXT_PRI, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                  Finding your perfect dish…
                </div>
                <div style={{ color: TEXT_MUTED, fontSize: 13 }}>
                  Analysing "{query}"
                </div>
              </div>
              {/* Animated dots */}
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: GOLD,
                    animation: `bounce 1s ${i * 0.2}s ease-in-out infinite`,
                  }} />
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════
              PHASE: RESULTS
          ════════════════════════════════════════ */}
          {phase === 'results' && (
            <div style={{ padding: '20px 20px 24px' }}>

              {/* Query recap + reset */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 16, paddingBottom: 14,
                borderBottom: `1px solid rgba(255,255,255,0.06)`,
              }}>
                <div>
                  <div style={{ color: TEXT_MUTED, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>
                    Matched for
                  </div>
                  <div style={{ color: TEXT_SEC, fontSize: 13, fontWeight: 600 }}>
                    "{query}"
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 12px', borderRadius: 10,
                    background: SURFACE, border: `1px solid rgba(0,0,0,0.1)`,
                    color: TEXT_SEC, fontSize: 12, fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <RotateCcw size={12} /> Search again
                </button>
              </div>

              {/* No results */}
              {results.length === 0 && (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🤔</div>
                  <div style={{ color: TEXT_PRI, fontWeight: 700, fontSize: 16, marginBottom: 6 }}>
                    No exact matches found
                  </div>
                  <div style={{ color: TEXT_MUTED, fontSize: 13, marginBottom: 20 }}>
                    Try different words or remove budget constraints
                  </div>
                  <button
                    onClick={handleReset}
                    style={{
                      padding: '10px 20px', borderRadius: 12,
                      background: GOLD, border: 'none',
                      color: '#1A0A00', fontWeight: 700, fontSize: 13,
                      cursor: 'pointer',
                    }}
                  >
                    Try again
                  </button>
                </div>
              )}

              {/* Results */}
              {results.length > 0 && (
                <>
                  {/* Best match — large */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10,
                    }}>
                      <Zap size={14} color={GOLD} />
                      <span style={{ color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Your Best Match
                      </span>
                    </div>
                    <DishCard
                      dish={results[0]}
                      rank={0}
                      onAdd={handleAdd}
                      onView={handleView}
                    />
                  </div>

                  {/* Alternate matches */}
                  {results.slice(1).length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{
                        color: TEXT_MUTED, fontSize: 10, fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10,
                      }}>
                        Also consider
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                        {results.slice(1, 3).map((dish, i) => (
                          <DishCard
                            key={dish.id}
                            dish={dish}
                            rank={i + 1}
                            onAdd={handleAdd}
                            onView={handleView}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* See all */}
                  <button
                    onClick={handleSeeAll}
                    style={{
                      width: '100%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: 8, padding: '12px',
                      borderRadius: 14,
                      background: SURFACE,
                      border: `1px solid rgba(0,0,0,0.1)`,
                      color: TEXT_SEC, fontSize: 13, fontWeight: 600,
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                    }}
                  >
                    <Search size={15} />
                    See all results for "{query}"
                    <ChevronRight size={15} />
                  </button>
                </>
              )}
            </div>
          )}

          {/* ── Footer ── */}
          <div style={{
            borderTop: `1px solid rgba(0,0,0,0.06)`,
            padding: '10px 20px',
            textAlign: 'center',
          }}>
            <span style={{ color: TEXT_MUTED, fontSize: 11 }}>
              Savor Crave Assistant · Smart food matching
            </span>
          </div>

        </div>
      </div>

      {/* Inline animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.8; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </>
  );
}
import React, { useCallback } from 'react';
import { useApp } from '../context/AppContext';

const ABSOLUTE_MIN = 0;
const ABSOLUTE_MAX = 10000;
const STEP         = 50;

function fmt(p) {
  if (p >= ABSOLUTE_MAX) return '₹10,000+';
  if (p === 0)           return '₹0';
  return `₹${p.toLocaleString('en-IN')}`;
}

export default function PriceRangeSlider() {
  const { state, dispatch } = useApp();
  const { min, max } = state.priceRange;

  const leftPct  = ((min - ABSOLUTE_MIN) / (ABSOLUTE_MAX - ABSOLUTE_MIN)) * 100;
  const rightPct = ((max - ABSOLUTE_MIN) / (ABSOLUTE_MAX - ABSOLUTE_MIN)) * 100;

  const setMin = useCallback(
    (val) => {
      const v = Math.min(Number(val), max - STEP);
      dispatch({ type: 'SET_PRICE_RANGE', payload: { min: v, max } });
    },
    [max, dispatch]
  );

  const setMax = useCallback(
    (val) => {
      const v = Math.max(Number(val), min + STEP);
      dispatch({ type: 'SET_PRICE_RANGE', payload: { min, max: v } });
    },
    [min, dispatch]
  );

  const isDefault = min === ABSOLUTE_MIN && max === ABSOLUTE_MAX;

  return (
    <div className="w-full">
      {/* Price labels */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[10px] font-display font-medium uppercase tracking-widest text-text-muted mb-1">
            Min Price
          </p>
          <p className="font-display font-bold text-xl text-text-primary">{fmt(min)}</p>
        </div>

        <div className="flex-1 mx-6 mb-2">
          {!isDefault && (
            <div className="flex justify-center">
              <span className="px-3 py-1 rounded-full bg-accent-purple/15 border border-accent-purple/30 text-accent-purple text-[11px] font-display font-semibold">
                {fmt(min)} – {fmt(max)}
              </span>
            </div>
          )}
        </div>

        <div className="text-right">
          <p className="text-[10px] font-display font-medium uppercase tracking-widest text-text-muted mb-1">
            Max Price
          </p>
          <p className="font-display font-bold text-xl text-text-primary">{fmt(max)}</p>
        </div>
      </div>

      {/* Dual-handle slider */}
      <div className="relative h-8 flex items-center px-2">
        {/* Track */}
        <div
          className="absolute left-2 right-2 h-1.5 rounded-full"
          style={{
            background: `linear-gradient(to right,
              rgba(255,255,255,0.07) 0%,
              rgba(255,255,255,0.07) ${leftPct}%,
              #7C6CFF ${leftPct}%,
              #7C6CFF ${rightPct}%,
              rgba(255,255,255,0.07) ${rightPct}%,
              rgba(255,255,255,0.07) 100%)`,
          }}
        />

        {/* Min thumb */}
        <input
          type="range"
          min={ABSOLUTE_MIN}
          max={ABSOLUTE_MAX}
          step={STEP}
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="range-slider-input"
          style={{ zIndex: min > ABSOLUTE_MAX - 500 ? 5 : 3 }}
        />

        {/* Max thumb */}
        <input
          type="range"
          min={ABSOLUTE_MIN}
          max={ABSOLUTE_MAX}
          step={STEP}
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="range-slider-input"
          style={{ zIndex: 4 }}
        />
      </div>

      {/* Min/Max labels */}
      <div className="flex justify-between mt-2 px-1">
        <span className="text-text-muted text-xs font-body">₹0</span>
        <span className="text-text-muted text-xs font-body">₹10,000+</span>
      </div>

      {/* Quick preset chips */}
      <div className="flex flex-wrap gap-2 mt-5">
        {[
          { label: 'Under ₹150',   min: 0,    max: 150  },
          { label: '₹150–₹300',    min: 150,  max: 300  },
          { label: '₹300–₹500',    min: 300,  max: 500  },
          { label: '₹500–₹1,000',  min: 500,  max: 1000 },
          { label: '₹1,000+',      min: 1000, max: 10000 },
        ].map((preset) => {
          const active = state.priceRange.min === preset.min && state.priceRange.max === preset.max;
          return (
            <button
              key={preset.label}
              onClick={() =>
                dispatch({ type: 'SET_PRICE_RANGE', payload: { min: preset.min, max: preset.max } })
              }
              className={`px-3 py-1.5 rounded-xl border text-xs font-display font-medium transition-all duration-200 ${
                active
                  ? 'bg-accent-purple border-accent-purple text-white shadow-purple-sm'
                  : 'bg-bg-elevated border-border-default text-text-secondary hover:border-accent-purple/40 hover:text-text-primary'
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
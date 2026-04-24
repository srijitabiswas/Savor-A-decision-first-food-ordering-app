import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, ArrowRight, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { trendingSearches, cuisineCategories } from '../data/mockData';
import PriceRangeSlider from '../components/PriceRangeSlider';

const LIVE_ORDERS = [
  'Someone in Ballygunge just ordered Chicken Biryani',
  'Someone in Salt Lake just ordered Truffle Carbonara',
  'Someone in New Town just ordered Dragon Roll',
  'Someone in Park Street just ordered Seekh Kebab',
  'Someone in Alipore just ordered Masala Dosa',
  'Someone in Jadavpur just ordered Smash Burger',
  'Someone in Gariahat just ordered Chicken Kathi Roll',
  'Someone in Howrah just ordered Rajasthani Thali',
  'Someone in Camac Street just ordered Lava Cake',
  'Someone in Rajarhat just ordered Tom Yum Soup',
];

export default function Landing() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [inputValue, setInputValue]   = useState(state.searchQuery || '');
  const [liveIndex, setLiveIndex]     = useState(0);
  const [liveVisible, setLiveVisible] = useState(true);

  // Rotate live orders ticker
  useEffect(() => {
    const id = setInterval(() => {
      setLiveVisible(false);
      setTimeout(() => {
        setLiveIndex((i) => (i + 1) % LIVE_ORDERS.length);
        setLiveVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const handleFind = () => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: inputValue.trim() });
    navigate('/search');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleFind();
  };

  const handleTrend = (term) => {
    setInputValue(term);
    dispatch({ type: 'SET_SEARCH_QUERY', payload: term });
    navigate('/search');
  };

  const handleCategory = (cat) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: cat.label });
    navigate('/search');
  };

  const isPriceFiltered =
    state.priceRange.min > 0 || state.priceRange.max < 10000;

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col overflow-x-hidden">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[700px] h-[700px] bg-accent-purple/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[10%] w-[500px] h-[500px] bg-accent-gold/4 rounded-full blur-[100px]" />
      </div>

      {/* Live order ticker */}
      <div className="relative z-10 border-b border-border-subtle bg-bg-secondary/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center gap-3">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-[11px] font-display font-semibold text-accent-purple uppercase tracking-wider">
              Live
            </span>
          </div>
          <p
            className={`text-text-muted text-xs font-body transition-opacity duration-300 ${
              liveVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {LIVE_ORDERS[liveIndex]}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 relative z-10">
        {/* Stats bar */}
        <div className="flex items-center gap-6 mb-10 animate-fade-in flex-wrap justify-center">
          {[
            { value: '56',  label: 'Dishes' },
            { value: '15',  label: 'Restaurants' },
            { value: '18',  label: 'Cuisines' },
            { value: '~22', label: 'Min avg delivery' },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-2 text-center">
              <span className="font-display font-bold text-text-primary text-lg">{value}</span>
              <span className="text-text-muted text-xs font-body">{label}</span>
            </div>
          ))}
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold text-center leading-[1.1] mb-4 anim-init animate-fade-up"
          style={{ animationFillMode: 'forwards' }}
        >
          <span className="text-[clamp(2.4rem,6vw,5rem)] text-text-primary block">
            What do you
          </span>
          <span className="text-[clamp(2.4rem,6vw,5rem)] gradient-text block">
            want to eat?
          </span>
        </h1>

        <p
          className="text-text-secondary text-base sm:text-lg text-center max-w-md mb-10 font-body anim-init animate-fade-up delay-100"
          style={{ animationFillMode: 'forwards' }}
        >
          Tell us your craving and budget. We'll surface the best dish — no scrolling, no guesswork.
        </p>

        {/* Search bar */}
        <div
          className="w-full max-w-xl mb-5 anim-init animate-fade-up delay-200"
          style={{ animationFillMode: 'forwards' }}
        >
          <div className="relative group">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-purple transition-colors duration-200"
            />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="biryani, wrap, dosa, pasta..."
              className="w-full bg-bg-secondary border border-border-default rounded-2xl pl-14 pr-36 py-4 text-text-primary font-body text-base placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 focus:shadow-purple transition-all duration-200"
            />
            <button
              onClick={handleFind}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 bg-accent-purple rounded-xl text-white text-sm font-display font-semibold hover:bg-accent-purple-dim transition-all shadow-purple-sm active:scale-95"
            >
              Find <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Trending quick searches */}
        <div
          className="w-full max-w-xl mb-10 anim-init animate-fade-up delay-300"
          style={{ animationFillMode: 'forwards' }}
        >
          <div className="flex items-center gap-2 mb-3 justify-center">
            <TrendingUp size={13} className="text-text-muted" />
            <span className="text-text-muted text-xs font-display uppercase tracking-widest">
              Trending now
            </span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {trendingSearches.map((term) => (
              <button
                key={term}
                onClick={() => handleTrend(term)}
                className="px-3.5 py-1.5 rounded-xl bg-bg-elevated border border-border-default text-text-muted text-xs font-body hover:border-accent-purple/35 hover:text-text-secondary hover:bg-bg-card transition-all duration-200"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Price range section */}
        <div
          className="w-full max-w-xl mb-10 anim-init animate-fade-up delay-400"
          style={{ animationFillMode: 'forwards' }}
        >
          <div className="bg-bg-secondary rounded-2xl border border-border-default p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-display font-semibold text-text-primary text-sm">Budget range</p>
                <p className="text-text-muted text-xs mt-0.5">Drag to set your comfortable price</p>
              </div>
              {isPriceFiltered && (
                <button
                  onClick={() =>
                    dispatch({ type: 'SET_PRICE_RANGE', payload: { min: 0, max: 10000 } })
                  }
                  className="text-xs text-accent-purple font-display hover:underline"
                >
                  Reset
                </button>
              )}
            </div>
            <PriceRangeSlider />
          </div>
        </div>

        {/* Browse by cuisine */}
        <div
          className="w-full max-w-4xl mb-10 anim-init animate-fade-up delay-500"
          style={{ animationFillMode: 'forwards' }}
        >
          <p className="text-text-muted text-xs font-display font-medium uppercase tracking-widest mb-4 text-center">
            Or browse by cuisine
          </p>
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {cuisineCategories.filter((c) => c.id !== 'all').map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat)}
                className="flex-shrink-0 flex flex-col items-center gap-2 px-4 py-3 rounded-2xl bg-bg-elevated border border-border-default hover:border-accent-purple/35 hover:bg-bg-card transition-all duration-200 min-w-[72px]"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="text-[11px] font-display font-medium text-text-secondary whitespace-nowrap">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div
          className="anim-init animate-fade-up delay-600"
          style={{ animationFillMode: 'forwards' }}
        >
          <button
            onClick={handleFind}
            className="flex items-center gap-3 px-10 py-4 bg-accent-purple rounded-2xl text-white font-display font-semibold text-base hover:bg-accent-purple-dim transition-all duration-200 shadow-purple hover:scale-[1.02] active:scale-[0.98]"
          >
            <Zap size={18} />
            Find my meal
          </button>
        </div>

        <p className="text-text-muted text-xs mt-6 font-body">
          No account needed · No endless scrolling · Just great food
        </p>
      </div>
    </div>
  );
}
import React from 'react';
import BackButton from '../components/BackButton';
import { Heart, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { dishes } from '../data/mockData';
import DishCard from '../components/DishCard';

const FAVE_IDS = ['d1', 'd5', 'd32', 'd36'];

export default function Favorites() {
  const navigate = useNavigate();
  const faveDishes = FAVE_IDS.map((id) => dishes.find((d) => d.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <BackButton label="Back" />
        <div className="flex items-center gap-3 mb-6 pt-4">
          <Heart size={22} className="text-accent-purple" />
          <h1 className="font-display font-bold text-text-primary text-2xl">Favorites</h1>
        </div>

        {faveDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {faveDishes.map((dish, i) => (
              <DishCard key={dish.id} dish={dish} delay={i * 60} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-3xl bg-bg-secondary border border-border-default flex items-center justify-center mb-4">
              <Heart size={32} className="text-text-muted" />
            </div>
            <h3 className="font-display font-bold text-text-primary text-lg mb-2">No favorites yet</h3>
            <p className="text-text-muted text-sm mb-6">Tap the heart on any dish to save it here.</p>
            <button
              onClick={() => navigate('/search')}
              className="flex items-center gap-2 px-6 py-2.5 bg-accent-purple text-white text-sm font-display font-bold rounded-xl hover:bg-accent-purple-dim transition-all"
            >
              <Search size={15} /> Discover dishes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
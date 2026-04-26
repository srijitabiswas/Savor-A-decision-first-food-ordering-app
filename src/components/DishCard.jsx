import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getRestaurantById } from '../data/mockData';

const tagStyles = {
  'Best Seller': { bg: '#7C6CFF', text: '#fff' },
  'High Rated':  { bg: '#D6C6A8', text: '#1A1D23' },
  'Best Value':  { bg: '#10b981', text: '#fff' },
  'Premium':     { bg: '#f43f5e', text: '#fff' },
  'Quick Bite':  { bg: '#0ea5e9', text: '#fff' },
  'Healthy':     { bg: '#14b8a6', text: '#fff' },
  'Trending':    { bg: '#8b5cf6', text: '#fff' },
};

const FALLBACK = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80';

export default function DishCard({ dish, delay = 0 }) {
  const navigate = useNavigate();
  const { dispatch, state } = useApp();
  const restaurant = getRestaurantById(dish.restaurantId);
  const inCart = state.cart.find((item) => item.id === dish.id);
  const [imgSrc, setImgSrc] = useState(dish.image);

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: dish });
  };

  const tag = dish.tags?.[0];
  const style = tagStyles[tag];

  return (
    <div
      className="anim-init animate-fade-up group cursor-pointer bg-bg-card border border-border-default rounded-2xl overflow-hidden hover:border-accent-purple/30 hover:shadow-card-hover transition-all duration-300"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      onClick={() => navigate(`/dish/${dish.id}`)}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-bg-secondary">
        <img
          src={imgSrc}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={() => setImgSrc(FALLBACK)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/60 via-transparent to-transparent" />

        {/* Tag — solid color, always visible */}
        {tag && style && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-display font-bold tracking-wide shadow-md"
            style={{ backgroundColor: style.bg, color: style.text }}
          >
            {tag}
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg glass">
          <Star size={11} className="text-accent-gold fill-accent-gold" />
          <span className="text-[12px] font-display font-semibold text-white">
            {dish.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-text-primary text-[15px] leading-snug mb-1 group-hover:text-accent-purple transition-colors">
          {dish.name}
        </h3>
        <p className="text-text-secondary text-xs font-body mb-3">{restaurant?.name}</p>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-text-muted">
            <Clock size={12} />
            <span className="text-[12px] font-body">{dish.deliveryTime}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-text-muted" />
          <div className="flex items-center gap-1.5 text-text-muted">
            <Users size={12} />
            <span className="text-[12px] font-body">{dish.quantity}</span>
          </div>
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
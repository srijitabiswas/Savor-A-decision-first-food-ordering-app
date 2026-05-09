import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getRestaurantById } from '../data/mockData';

const tagStyles = {
  'Best Seller': { bg: '#F5C800', text: '#1A1A1A' },
  'High Rated':  { bg: '#1A1A1A', text: '#F5C800' },
  'Best Value':  { bg: '#16a34a', text: '#fff' },
  'Premium':     { bg: '#7c3aed', text: '#fff' },
  'Quick Bite':  { bg: '#0284c7', text: '#fff' },
  'Healthy':     { bg: '#0d9488', text: '#fff' },
  'Trending':    { bg: '#ea580c', text: '#fff' },
};

const FALLBACK = 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80';

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
      className="anim-init animate-fade-up group cursor-pointer bg-bg-card border border-border-default rounded-2xl overflow-hidden hover:border-accent-purple/40 hover:shadow-card-hover transition-all duration-300"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      onClick={() => navigate(`/dish/${dish.id}`)}
    >
      {/* Image */}
      {/* Image */}
<div className="relative h-44 overflow-hidden bg-bg-secondary rounded-t-2xl">
  <img
    src={imgSrc}
    alt={dish.name}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    loading="lazy"
    onError={() => setImgSrc(FALLBACK)}
  />
  {/* Tag */}
  {tag && style && (
    <div
      className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-display font-bold tracking-wide shadow-sm"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {tag}
    </div>
  )}
  {/* Rating */}
  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm border border-black/5">
    <span className="text-yellow-500 text-[11px]">★</span>
    <span className="text-[12px] font-display font-bold text-gray-800">
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
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-display font-bold transition-all duration-200 ${
              inCart
                ? 'bg-accent-purple text-text-primary shadow-purple-sm'
                : 'bg-bg-elevated border border-border-default text-text-secondary hover:border-accent-purple hover:bg-accent-purple/10 hover:text-text-primary'
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
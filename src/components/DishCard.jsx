import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getRestaurantById } from '../data/mockData';

const tagColors = {
  'Best Seller': 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
  'High Rated': 'bg-accent-gold/10 text-accent-gold border-accent-gold/30',
  'Best Value': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Premium: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'Quick Bite': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  Healthy: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
};

export default function DishCard({ dish, delay = 0 }) {
  const navigate = useNavigate();
  const { dispatch, state } = useApp();
  const restaurant = getRestaurantById(dish.restaurantId);
  const inCart = state.cart.find((item) => item.id === dish.id);

  const handleAdd = (e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: dish });
  };

  const tag = dish.tags?.[0];
  const tagStyle = tagColors[tag] || 'bg-text-muted/10 text-text-secondary border-text-muted/20';

  return (
    <div
      className="anim-init animate-fade-up group cursor-pointer bg-bg-card border border-border-default rounded-2xl overflow-hidden hover:border-accent-purple/30 hover:shadow-card-hover transition-all duration-300"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      onClick={() => navigate(`/dish/${dish.id}`)}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-bg-secondary">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/60 via-transparent to-transparent" />

        {/* Tag */}
        {tag && (
          <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg border text-[11px] font-display font-semibold tracking-wide ${tagStyle}`}>
            {tag}
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg glass">
          <Star size={11} className="text-accent-gold fill-accent-gold" />
          <span className="text-[12px] font-display font-semibold text-text-primary">
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

        {/* Meta */}
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

        {/* Price + Add */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-display font-bold text-text-primary text-lg">₹{dish.price}</span>
          </div>
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
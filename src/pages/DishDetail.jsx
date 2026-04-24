import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Flame, Utensils, ChefHat, Plus, Minus, Store } from 'lucide-react';
import { getDishById, getRestaurantById } from '../data/mockData';
import { useApp } from '../context/AppContext';

const spiceColors = {
  Mild: 'text-teal-400',
  Medium: 'text-accent-gold',
  Spicy: 'text-rose-400',
};

const portionColors = {
  Light: 'text-sky-400',
  Filling: 'text-accent-purple',
};

export default function DishDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  const dish = getDishById(id);
  const restaurant = dish ? getRestaurantById(dish.restaurantId) : null;
  const cartItem = state.cart.find((item) => item.id === id);

  if (!dish) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <p className="text-text-secondary">Dish not found.</p>
      </div>
    );
  }

  const infoItems = [
    {
      icon: <Users size={16} />,
      label: 'Serves',
      value: dish.quantity,
      color: 'text-text-primary',
    },
    {
      icon: <Utensils size={16} />,
      label: 'Portion',
      value: dish.portionSize,
      color: portionColors[dish.portionSize] || 'text-text-primary',
    },
    {
      icon: <Flame size={16} />,
      label: 'Spice',
      value: dish.spiceLevel,
      color: spiceColors[dish.spiceLevel] || 'text-text-primary',
    },
    {
      icon: <ChefHat size={16} />,
      label: 'Style',
      value: dish.type,
      color: 'text-text-primary',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero image */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 -mt-8 relative z-10 pb-24">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {dish.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-accent-purple/15 border border-accent-purple/30 text-accent-purple text-xs font-display font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-3xl text-text-primary mb-2 leading-tight">
          {dish.name}
        </h1>

        {/* Restaurant link */}
        <button
          onClick={() => navigate(`/restaurant/${dish.restaurantId}`)}
          className="flex items-center gap-2 text-text-secondary text-sm font-body hover:text-accent-purple transition-colors mb-5 group"
        >
          <Store size={14} className="group-hover:text-accent-purple transition-colors" />
          {restaurant?.name}
          <span className="text-text-muted">·</span>
          <span className="text-text-muted">{restaurant?.area}</span>
        </button>

        {/* Meta row */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-1.5">
            <Star size={15} className="text-accent-gold fill-accent-gold" />
            <span className="font-display font-semibold text-text-primary">{dish.rating}</span>
            <span className="text-text-muted text-sm">({dish.ratingCount})</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-border-default" />
          <div className="flex items-center gap-1.5 text-text-secondary text-sm">
            <Clock size={14} />
            {dish.deliveryTime}
          </div>
        </div>

        {/* Description */}
        <div className="bg-bg-secondary rounded-2xl p-5 border border-border-default mb-6">
          <h3 className="font-display font-semibold text-text-primary text-sm mb-2">About this dish</h3>
          <p className="text-text-secondary text-sm font-body leading-relaxed">{dish.description}</p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {infoItems.map((item) => (
            <div
              key={item.label}
              className="bg-bg-secondary rounded-xl p-4 border border-border-default text-center"
            >
              <div className={`flex justify-center mb-1.5 ${item.color}`}>{item.icon}</div>
              <p className="text-text-muted text-[11px] font-display uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className={`font-display font-semibold text-sm ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="fixed bottom-0 left-0 right-0 glass border-t border-border-default px-6 py-4 z-40">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-text-muted text-xs font-body mb-0.5">Price</p>
              <p className="font-display font-bold text-2xl text-text-primary">₹{dish.price}</p>
            </div>

            {cartItem ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    dispatch({ type: 'UPDATE_QTY', payload: { id: dish.id, qty: cartItem.qty - 1 } })
                  }
                  className="w-10 h-10 rounded-xl bg-bg-elevated border border-border-default flex items-center justify-center hover:border-accent-purple/40 transition-colors"
                >
                  <Minus size={15} className="text-text-secondary" />
                </button>
                <span className="font-display font-bold text-text-primary text-lg w-6 text-center">
                  {cartItem.qty}
                </span>
                <button
                  onClick={() =>
                    dispatch({ type: 'UPDATE_QTY', payload: { id: dish.id, qty: cartItem.qty + 1 } })
                  }
                  className="w-10 h-10 rounded-xl bg-accent-purple flex items-center justify-center hover:bg-accent-purple-dim transition-colors shadow-purple-sm"
                >
                  <Plus size={15} className="text-white" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: dish })}
                className="px-8 py-3 bg-accent-purple rounded-xl text-white font-display font-semibold hover:bg-accent-purple-dim transition-all shadow-purple active:scale-[0.97]"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
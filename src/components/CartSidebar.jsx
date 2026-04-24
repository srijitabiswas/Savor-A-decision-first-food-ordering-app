<<<<<<< HEAD
import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function CartSidebar({ open, onClose }) {
  const { state, dispatch, cartTotal, cartCount } = useApp();
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-bg-secondary border-l border-border-default z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-default">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-accent-purple" />
            <h2 className="font-display font-semibold text-text-primary">
              Cart{cartCount > 0 && ` (${cartCount})`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-bg-card transition-colors"
          >
            <X size={16} className="text-text-secondary" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {state.cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-16">
              <div className="w-16 h-16 rounded-2xl bg-bg-elevated flex items-center justify-center">
                <ShoppingBag size={28} className="text-text-muted" />
              </div>
              <p className="font-display font-medium text-text-primary">Your cart is empty</p>
              <p className="text-text-secondary text-sm">Add dishes to get started</p>
            </div>
          ) : (
            state.cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-bg-card rounded-xl p-3 border border-border-default"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display font-medium text-text-primary text-sm leading-tight truncate">
                    {item.name}
                  </p>
                  <p className="text-accent-gold text-sm font-display font-semibold mt-0.5">
                    ₹{item.price * item.qty}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: item.qty - 1 } })}
                    className="w-7 h-7 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-accent-purple/20 transition-colors"
                  >
                    <Minus size={12} className="text-text-secondary" />
                  </button>
                  <span className="text-text-primary text-sm font-display font-semibold w-4 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: item.qty + 1 } })}
                    className="w-7 h-7 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-accent-purple/20 transition-colors"
                  >
                    <Plus size={12} className="text-text-secondary" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.cart.length > 0 && (
          <div className="px-6 py-5 border-t border-border-default">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-secondary font-body">Total</span>
              <span className="font-display font-bold text-text-primary text-xl">₹{cartTotal}</span>
            </div>
            <button
              onClick={() => { onClose(); navigate('/checkout'); }}
              className="w-full py-3.5 rounded-xl bg-accent-purple text-white font-display font-semibold text-sm hover:bg-accent-purple-dim transition-colors shadow-purple"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
=======
import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function CartSidebar({ open, onClose }) {
  const { state, dispatch, cartTotal, cartCount } = useApp();
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-bg-secondary border-l border-border-default z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-default">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-accent-purple" />
            <h2 className="font-display font-semibold text-text-primary">
              Cart{cartCount > 0 && ` (${cartCount})`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-bg-card transition-colors"
          >
            <X size={16} className="text-text-secondary" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
          {state.cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-16">
              <div className="w-16 h-16 rounded-2xl bg-bg-elevated flex items-center justify-center">
                <ShoppingBag size={28} className="text-text-muted" />
              </div>
              <p className="font-display font-medium text-text-primary">Your cart is empty</p>
              <p className="text-text-secondary text-sm">Add dishes to get started</p>
            </div>
          ) : (
            state.cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-bg-card rounded-xl p-3 border border-border-default"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display font-medium text-text-primary text-sm leading-tight truncate">
                    {item.name}
                  </p>
                  <p className="text-accent-gold text-sm font-display font-semibold mt-0.5">
                    ₹{item.price * item.qty}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: item.qty - 1 } })}
                    className="w-7 h-7 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-accent-purple/20 transition-colors"
                  >
                    <Minus size={12} className="text-text-secondary" />
                  </button>
                  <span className="text-text-primary text-sm font-display font-semibold w-4 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: item.qty + 1 } })}
                    className="w-7 h-7 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-accent-purple/20 transition-colors"
                  >
                    <Plus size={12} className="text-text-secondary" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.cart.length > 0 && (
          <div className="px-6 py-5 border-t border-border-default">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-secondary font-body">Total</span>
              <span className="font-display font-bold text-text-primary text-xl">₹{cartTotal}</span>
            </div>
            <button
              onClick={() => { onClose(); navigate('/checkout'); }}
              className="w-full py-3.5 rounded-xl bg-accent-purple text-white font-display font-semibold text-sm hover:bg-accent-purple-dim transition-colors shadow-purple"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
>>>>>>> ef71eadf7600c2495aeee12a49fb5ea83ef37f64
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Cart() {
  const { state, dispatch, cartTotal, cartCount } = useApp();
  const navigate = useNavigate();

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-bg-primary pt-20 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 rounded-3xl bg-bg-secondary border border-border-default flex items-center justify-center mb-6">
          <ShoppingBag size={36} className="text-text-muted" />
        </div>
        <h2 className="font-display font-bold text-2xl text-text-primary mb-2">Cart is empty</h2>
        <p className="text-text-secondary text-sm mb-8 max-w-xs">
          You haven't added anything yet. Find a dish you love.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-accent-purple rounded-xl text-white font-display font-semibold hover:bg-accent-purple-dim transition-colors"
        >
          Discover dishes
        </button>
      </div>
    );
  }

  const deliveryFee = 30;
  const taxes = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + deliveryFee + taxes;

  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="pt-4 mb-8">
          <h1 className="font-display font-bold text-2xl text-text-primary">
            Your Cart
          </h1>
          <p className="text-text-muted text-sm mt-1">{cartCount} item{cartCount !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            {state.cart.map((item) => (
              <div
                key={item.id}
                className="bg-bg-secondary rounded-2xl border border-border-default p-4 flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-text-primary text-sm leading-tight mb-0.5 truncate">
                    {item.name}
                  </h3>
                  <p className="text-text-muted text-xs mb-2">{item.quantity}</p>
                  <p className="font-display font-bold text-accent-gold">₹{item.price * item.qty}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() =>
                      dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: item.qty - 1 } })
                    }
                    className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-bg-card transition-colors"
                  >
                    {item.qty === 1 ? (
                      <Trash2 size={13} className="text-rose-400" />
                    ) : (
                      <Minus size={13} className="text-text-secondary" />
                    )}
                  </button>
                  <span className="font-display font-bold text-text-primary text-sm w-5 text-center">
                    {item.qty}
                  </span>
                  <button
                    onClick={() =>
                      dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: item.qty + 1 } })
                    }
                    className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center hover:bg-bg-card transition-colors"
                  >
                    <Plus size={13} className="text-text-secondary" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-bg-secondary rounded-2xl border border-border-default p-5 sticky top-24">
              <h3 className="font-display font-semibold text-text-primary mb-5">Order Summary</h3>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between">
                  <span className="text-text-secondary text-sm">Subtotal</span>
                  <span className="text-text-primary text-sm font-display font-medium">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-sm">Delivery</span>
                  <span className="text-text-primary text-sm font-display font-medium">₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary text-sm">Taxes (5%)</span>
                  <span className="text-text-primary text-sm font-display font-medium">₹{taxes}</span>
                </div>
                <div className="border-t border-border-default pt-3 flex justify-between">
                  <span className="font-display font-semibold text-text-primary">Total</span>
                  <span className="font-display font-bold text-xl text-text-primary">₹{grandTotal}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-3.5 bg-accent-purple rounded-xl text-white font-display font-semibold text-sm hover:bg-accent-purple-dim transition-all flex items-center justify-center gap-2 shadow-purple"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
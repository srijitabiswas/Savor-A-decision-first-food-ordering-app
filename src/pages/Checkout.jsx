import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, Wallet, Smartphone } from 'lucide-react';
import { useApp } from '../context/AppContext';

const paymentMethods = [
  { id: 'card', icon: <CreditCard size={16} />, label: 'Credit / Debit Card' },
  { id: 'upi', icon: <Smartphone size={16} />, label: 'UPI' },
  { id: 'wallet', icon: <Wallet size={16} />, label: 'Wallet' },
];

export default function Checkout() {
  const { state, dispatch, cartTotal } = useApp();
  const navigate = useNavigate();
  const [payment, setPayment] = useState('upi');
  const [address, setAddress] = useState({
    line1: '',
    city: '',
    pincode: '',
  });

  const deliveryFee = 30;
  const taxes = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + deliveryFee + taxes;

  const handleOrder = () => {
    if (!address.line1 || !address.city || !address.pincode) {
      alert('Please fill in your delivery address.');
      return;
    }
    dispatch({ type: 'CLEAR_CART' });
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="pt-4 mb-8">
          <h1 className="font-display font-bold text-2xl text-text-primary">Checkout</h1>
          <p className="text-text-muted text-sm mt-1">Almost there</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            {/* Delivery Address */}
            <div className="bg-bg-secondary rounded-2xl border border-border-default p-5">
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={16} className="text-accent-purple" />
                <h2 className="font-display font-semibold text-text-primary">Delivery Address</h2>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Street address, flat, landmark"
                  value={address.line1}
                  onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                  className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="PIN code"
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                    className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-bg-secondary rounded-2xl border border-border-default p-5">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard size={16} className="text-accent-purple" />
                <h2 className="font-display font-semibold text-text-primary">Payment Method</h2>
              </div>
              <div className="space-y-2.5">
                {paymentMethods.map((m) => (
                  <label
                    key={m.id}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                      payment === m.id
                        ? 'bg-accent-purple/10 border-accent-purple/40'
                        : 'bg-bg-elevated border-border-default hover:border-border-default'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={m.id}
                      checked={payment === m.id}
                      onChange={() => setPayment(m.id)}
                      className="accent-[#7C6CFF]"
                    />
                    <span className={payment === m.id ? 'text-accent-purple' : 'text-text-muted'}>
                      {m.icon}
                    </span>
                    <span className="font-body text-sm text-text-secondary">{m.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-bg-secondary rounded-2xl border border-border-default p-5 sticky top-24">
              <h3 className="font-display font-semibold text-text-primary mb-4">Order Summary</h3>
              <div className="space-y-2 mb-4 max-h-40 overflow-y-auto pr-1">
                {state.cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-text-secondary truncate pr-2">
                      {item.name} ×{item.qty}
                    </span>
                    <span className="text-text-primary font-display font-medium flex-shrink-0">
                      ₹{item.price * item.qty}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border-default pt-4 space-y-2 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Delivery</span>
                  <span className="text-text-primary">₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Taxes</span>
                  <span className="text-text-primary">₹{taxes}</span>
                </div>
                <div className="flex justify-between border-t border-border-default pt-2 mt-2">
                  <span className="font-display font-semibold text-text-primary">Total</span>
                  <span className="font-display font-bold text-xl text-text-primary">₹{grandTotal}</span>
                </div>
              </div>
              <button
                onClick={handleOrder}
                className="w-full py-3.5 bg-accent-purple rounded-xl text-white font-display font-semibold text-sm hover:bg-accent-purple-dim transition-all shadow-purple"
              >
                Place Order · ₹{grandTotal}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { ClipboardList, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_ORDERS = [
  {
    id: 'SVR-10234', date: '7 May 2026', status: 'Delivered',
    items: ['Chicken Dum Biryani', 'Masala Dosa'],
    total: 428, restaurant: 'The Biryani House',
  },
  {
    id: 'SVR-10198', date: '3 May 2026', status: 'Delivered',
    items: ['Smash Burger', 'Hakka Noodles'],
    total: 378, restaurant: 'Burger Foundry',
  },
  {
    id: 'SVR-10156', date: '28 Apr 2026', status: 'Delivered',
    items: ['Truffle Carbonara'],
    total: 449, restaurant: 'Pasta Madre',
  },
];

export default function Orders() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6 pt-4">
          <ClipboardList size={22} className="text-accent-purple" />
          <h1 className="font-display font-bold text-text-primary text-2xl">My Orders</h1>
        </div>

        <div className="space-y-3">
          {MOCK_ORDERS.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl border border-border-default p-5 hover:border-accent-purple/30 transition-all cursor-pointer group">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-display font-bold text-text-primary text-sm">{order.restaurant}</p>
                  <p className="text-text-muted text-xs font-body mt-0.5">{order.id} · {order.date}</p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-lg flex-shrink-0">
                  <CheckCircle size={12} className="text-emerald-600" />
                  <span className="text-emerald-700 text-[11px] font-display font-bold">{order.status}</span>
                </div>
              </div>
              <p className="text-text-secondary text-xs font-body mb-3">
                {order.items.join(' · ')}
              </p>
              <div className="flex items-center justify-between border-t border-border-default pt-3">
                <span className="font-display font-bold text-text-primary text-sm">₹{order.total}</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 border border-border-default text-text-secondary text-xs font-display font-medium rounded-lg hover:border-accent-purple/40 transition-all">
                    View details
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="px-3 py-1.5 bg-accent-purple text-white text-xs font-display font-bold rounded-lg hover:bg-accent-purple-dim transition-all"
                  >
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {MOCK_ORDERS.length === 0 && (
          <div className="text-center py-24">
            <ClipboardList size={40} className="text-text-muted mx-auto mb-4" />
            <h3 className="font-display font-bold text-text-primary text-lg mb-2">No orders yet</h3>
            <p className="text-text-muted text-sm mb-6">Your order history will appear here.</p>
            <button onClick={() => navigate('/')} className="px-6 py-2.5 bg-accent-purple text-white text-sm font-display font-bold rounded-xl hover:bg-accent-purple-dim transition-all">
              Order now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
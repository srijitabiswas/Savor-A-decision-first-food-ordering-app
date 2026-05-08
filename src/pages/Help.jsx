import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Mail } from 'lucide-react';

const FAQS = [
  { q: 'How long does delivery take?', a: 'Average delivery time is 22 minutes. You can see the estimated time on each dish card.' },
  { q: 'Can I cancel my order?', a: 'Yes, you can cancel within 2 minutes of placing the order. After that the restaurant begins preparation.' },
  { q: 'How do I apply a discount code?', a: 'Discount codes are applied on the checkout screen. Tap on "Apply coupon" and enter your code.' },
  { q: 'Is my payment information secure?', a: 'Yes. We use industry-standard encryption. We never store your card details on our servers.' },
  { q: 'What if my food arrives cold or incorrect?', a: 'Use the "Easy returns" option in your order history. We will refund or replace at no extra cost.' },
  { q: 'How does the Decide for me feature work?', a: 'It picks the highest-rated dish that fits your current budget range. You can keep shuffling until you find one you like.' },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white rounded-2xl border overflow-hidden transition-all ${open ? 'border-accent-purple/30' : 'border-border-default'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-display font-semibold text-text-primary text-sm pr-4">{faq.q}</span>
        {open ? <ChevronUp size={16} className="text-accent-purple flex-shrink-0" /> : <ChevronDown size={16} className="text-text-muted flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-border-default">
          <p className="text-text-secondary text-sm font-body leading-relaxed pt-3">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function Help() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20 pb-12 px-6">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-6 pt-4">
          <HelpCircle size={22} className="text-accent-purple" />
          <h1 className="font-display font-bold text-text-primary text-2xl">Help & Support</h1>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white rounded-2xl border border-border-default p-4 flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
              <MessageCircle size={18} className="text-accent-purple" />
            </div>
            <p className="font-display font-bold text-text-primary text-sm">Live Chat</p>
            <p className="text-text-muted text-xs font-body">Available 9am–9pm</p>
            <button className="mt-1 px-4 py-1.5 bg-accent-purple text-white text-xs font-display font-bold rounded-lg hover:bg-accent-purple-dim transition-all">
              Start chat
            </button>
          </div>
          <div className="bg-white rounded-2xl border border-border-default p-4 flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
              <Mail size={18} className="text-accent-purple" />
            </div>
            <p className="font-display font-bold text-text-primary text-sm">Email us</p>
            <p className="text-text-muted text-xs font-body">support@savor.app</p>
            <button className="mt-1 px-4 py-1.5 border border-border-default text-text-secondary text-xs font-display font-semibold rounded-lg hover:border-accent-purple/40 transition-all">
              Send email
            </button>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="font-display font-bold text-text-primary text-lg mb-4">Frequently asked</h2>
        <div className="space-y-2">
          {FAQS.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
        </div>
      </div>
    </div>
  );
}
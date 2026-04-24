import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Home } from 'lucide-react';

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const orderNumber = `SVR-${Math.floor(Math.random() * 90000) + 10000}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { label: 'Order Placed', done: progress >= 10 },
    { label: 'Preparing', done: progress >= 40 },
    { label: 'On the way', done: progress >= 80 },
    { label: 'Arriving soon', done: progress >= 100 },
  ];

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-6 text-center">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-purple/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full">
        {/* Icon */}
        <div className="w-20 h-20 rounded-3xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center mx-auto mb-6 animate-fade-in">
          <CheckCircle size={36} className="text-accent-purple" />
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-3xl text-text-primary mb-3 anim-init animate-fade-up">
          Order Confirmed!
        </h1>
        <p className="text-text-secondary font-body text-base mb-2">
          Your meal is on the way. Sit back and relax.
        </p>
        <p className="text-text-muted text-sm font-display mb-8">Order #{orderNumber}</p>

        {/* ETA */}
        <div className="flex items-center justify-center gap-2 bg-bg-secondary rounded-xl px-5 py-3.5 border border-border-default mb-8 mx-auto w-fit">
          <Clock size={16} className="text-accent-gold" />
          <span className="text-text-primary font-display font-semibold text-sm">
            Estimated arrival: 28–35 min
          </span>
        </div>

        {/* Progress bar */}
        <div className="bg-bg-secondary rounded-2xl border border-border-default p-5 mb-8">
          <div className="relative w-full bg-bg-elevated rounded-full h-1.5 mb-6">
            <div
              className="absolute left-0 top-0 h-1.5 bg-accent-purple rounded-full transition-all duration-300 shadow-purple-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                    step.done ? 'bg-accent-purple shadow-purple-sm' : 'bg-bg-elevated border border-border-default'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${
                      step.done ? 'bg-white' : 'bg-text-muted'
                    }`}
                  />
                </div>
                <span className={`text-[10px] font-display font-medium text-center leading-tight ${
                  step.done ? 'text-text-primary' : 'text-text-muted'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-8 py-3.5 bg-bg-secondary border border-border-default rounded-xl text-text-secondary font-display font-medium text-sm hover:border-accent-purple/30 hover:text-text-primary transition-all mx-auto"
        >
          <Home size={15} />
          Back to Savor
        </button>
      </div>
    </div>
  );
}
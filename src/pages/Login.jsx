import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6 pt-20 pb-10">
      <div className="w-full max-w-md">
          <BackButton label="Back to home" />
        <div className="bg-white rounded-3xl border border-border-default shadow-card p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-accent-purple flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-display font-bold text-xl">S</span>
            </div>
            <h1 className="font-display font-bold text-text-primary text-2xl mb-1">Welcome back</h1>
            <p className="text-text-muted text-sm font-body">Sign in to your Savor account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-text-primary text-sm font-display font-semibold block mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-bg-elevated border border-border-default rounded-xl text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-text-primary text-sm font-display font-semibold block mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-11 py-3 bg-bg-elevated border border-border-default rounded-xl text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-accent-purple text-xs font-display font-semibold hover:underline">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-accent-purple text-white font-display font-bold text-sm rounded-xl hover:bg-accent-purple-dim transition-all flex items-center justify-center gap-2 shadow-purple-sm"
            >
              Sign in <ArrowRight size={16} />
            </button>
          </form>

          <div className="relative my-6">
            <div className="border-t border-border-default" />
            <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-text-muted text-xs font-body">
              or
            </span>
          </div>

          <p className="text-center text-text-muted text-sm font-body">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-accent-purple font-display font-bold hover:underline"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
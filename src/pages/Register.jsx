import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const fields = [
    { name: 'name', label: 'Full name', placeholder: 'Your name', icon: <User size={16} />, type: 'text' },
    { name: 'email', label: 'Email', placeholder: 'you@example.com', icon: <Mail size={16} />, type: 'email' },
    { name: 'phone', label: 'Phone', placeholder: '10-digit mobile number', icon: <Phone size={16} />, type: 'tel' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6 pt-20 pb-10">
      <div className="w-full max-w-md">
        <BackButton label="Back to login" />
        <div className="bg-white rounded-3xl border border-border-default shadow-card p-8">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-accent-purple flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-display font-bold text-xl">S</span>
            </div>
            <h1 className="font-display font-bold text-text-primary text-2xl mb-1">Create account</h1>
            <p className="text-text-muted text-sm font-body">Join Savor and discover great food</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((f) => (
              <div key={f.name}>
                <label className="text-text-primary text-sm font-display font-semibold block mb-1.5">{f.label}</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">{f.icon}</span>
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full pl-11 pr-4 py-3 bg-bg-elevated border border-border-default rounded-xl text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
                    required
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="text-text-primary text-sm font-display font-semibold block mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full pl-11 pr-11 py-3 bg-bg-elevated border border-border-default rounded-xl text-text-primary text-sm font-body placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-all"
                  required
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-accent-purple text-white font-display font-bold text-sm rounded-xl hover:bg-accent-purple-dim transition-all flex items-center justify-center gap-2 shadow-purple-sm mt-2"
            >
              Create account <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-center text-text-muted text-sm font-body mt-6">
            Already have an account?{' '}
            <button onClick={() => navigate('/login')} className="text-accent-purple font-display font-bold hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
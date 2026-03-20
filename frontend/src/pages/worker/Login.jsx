import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, User, Lock, Mail, Store } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && name) {
      localStorage.setItem('userName', name.split(' ')[0]);
    } else if (email) {
      const extractedName = email.split('@')[0];
      localStorage.setItem('userName', extractedName.charAt(0).toUpperCase() + extractedName.slice(1));
    }
    navigate('/worker/dashboard');
  };

  return (
    <div className="page-wrapper md:flex md:flex-row flex-col" style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-main)' }}>
      {/* Left side styling - Brand */}
      <div className="hidden md:flex flex-col justify-center" style={{ flex: 1, padding: '4rem', background: 'linear-gradient(135deg, #020617 0%, #1e3a8a 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div className="flex items-center gap-2 mb-8">
            <ShieldCheck size={40} className="text-primary" />
            <h1 className="text-3xl font-bold text-white">GigProtect</h1>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ lineHeight: '1.2' }}>Income Protection<br />for the Modern Worker</h2>
          <p className="text-lg text-muted" style={{ maxWidth: '400px' }}>Never worry about losing money due to heavy rain, extreme pollution, or unpredictable disruptions again.</p>
        </div>
        
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-5%', left: '10%', width: '300px', height: '300px', background: 'var(--color-accent)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>
      </div>
      
      {/* Right side styling - Form */}
      <div className="flex flex-col justify-center items-center" style={{ flex: 1, padding: '2rem' }}>
        <div className="w-full" style={{ maxWidth: '400px' }}>
          
          <div className="mb-8 text-center text-left" style={{ textAlign: 'left' }}>
            <h3 className="text-2xl font-bold text-white mb-2">{isLogin ? 'Welcome back' : 'Create an account'}</h3>
            <p className="text-muted">Enter your details to access your insurance dashboard.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!isLogin && (
              <div>
                <label className="text-sm font-medium text-muted mb-2 block" style={{ display: 'block' }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} className="text-muted" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }} />
                  <input type="text" className="input" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} style={{ paddingLeft: '2.5rem' }} required />
                </div>
              </div>
            )}
            
            <div>
              <label className="text-sm font-medium text-muted mb-2 block" style={{ display: 'block' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} className="text-muted" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }} />
                <input type="email" className="input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ paddingLeft: '2.5rem' }} required />
              </div>
            </div>
            
            {!isLogin && (
              <div>
                <label className="text-sm font-medium text-muted mb-2 block" style={{ display: 'block' }}>Platform</label>
                <div style={{ position: 'relative' }}>
                  <Store size={18} className="text-muted" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }} />
                  <select className="select" defaultValue="" style={{ paddingLeft: '2.5rem' }} required>
                    <option value="" disabled>Select your primary platform</option>
                    <option value="swiggy">Swiggy</option>
                    <option value="zomato">Zomato</option>
                    <option value="amazon">Amazon</option>
                    <option value="uber">Uber</option>
                    <option value="ola">Ola</option>
                  </select>
                </div>
              </div>
            )}
            
            <div>
              <label className="text-sm font-medium text-muted mb-2 block" style={{ display: 'block' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} className="text-muted" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem' }} />
                <input type="password" className="input" placeholder="••••••••" style={{ paddingLeft: '2.5rem' }} required />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary w-full mt-4" style={{ height: '3rem' }}>
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-muted text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="text-primary font-medium" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

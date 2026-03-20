import React, { useState } from 'react';
import WorkerLayout from '../../components/WorkerLayout';
import { Check, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  { id: 'basic', name: 'Basic', price: 30, coverage: 1000, color: 'var(--color-text-muted)', features: ['Up to ₹1,000 coverage/day', 'Standard weather alerts', 'Email support'] },
  { id: 'standard', name: 'Standard', price: 50, coverage: 1500, color: 'var(--color-primary)', popular: true, features: ['Up to ₹1,500 coverage/day', 'Instant weather alerts', 'Priority support', 'AQI protection'] },
  { id: 'premium', name: 'Premium', price: 70, coverage: 2000, color: 'var(--color-warning)', features: ['Up to ₹2,000 coverage/day', 'Predictive weather routing', '24/7 Phone support', 'AQI & Temp protection'] }
];

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const navigate = useNavigate();

  return (
    <WorkerLayout>
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Choose Your Protection Plan</h1>
        <p className="text-muted">Select the coverage that best fits your daily earnings. Upgrading provides a higher safety net during severe disruptions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`card flex flex-col transition-all cursor-pointer ${selectedPlan === plan.id ? 'transform -translate-y-2' : 'hover:-translate-y-1'}`}
            style={{ 
              borderColor: selectedPlan === plan.id ? plan.color : 'rgba(255,255,255,0.05)',
              borderWidth: selectedPlan === plan.id ? '2px' : '1px',
              position: 'relative',
              boxShadow: selectedPlan === plan.id ? `0 10px 25px -5px rgba(0,0,0,0.3)` : 'none'
            }}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
            )}
            
            <div className="text-center mb-6 pt-4">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold" style={{ color: plan.color }}>₹{plan.price}</span>
                <span className="text-muted">/week</span>
              </div>
            </div>
            
            <div className="mb-6 p-4 rounded-lg text-center" style={{ backgroundColor: 'var(--color-bg-hover)' }}>
              <p className="text-xs text-muted mb-1">Max Daily Payout</p>
              <p className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <Shield size={20} style={{ color: plan.color }}/>
                ₹{plan.coverage}
              </p>
            </div>
            
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check size={16} className="text-success mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              className={`btn w-full ${selectedPlan === plan.id ? 'btn-primary' : 'btn-outline'}`}
              style={selectedPlan === plan.id ? { backgroundColor: plan.color, borderColor: plan.color } : { borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPlan(plan.id);
                navigate('/worker/payment');
              }}
            >
              {selectedPlan === plan.id ? 'Continue to Payment' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>
    </WorkerLayout>
  );
}

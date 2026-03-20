import React from 'react';
import WorkerLayout from '../../components/WorkerLayout';
import { Shield, AlertTriangle, CloudRain, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WorkerDashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'John';
  
  return (
    <WorkerLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {userName}!</h1>
        <p className="text-muted">Here's your income protection overview for today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Active Policy Card */}
        <div className="card" style={{ background: 'linear-gradient(to right, var(--color-bg-card), rgba(16, 185, 129, 0.1))', borderLeft: '4px solid var(--color-success)' }}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="badge badge-success mb-2">Active</span>
              <h2 className="text-xl font-bold text-white">Standard Plan</h2>
            </div>
            <Shield size={32} className="text-success" />
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-muted mb-1">Max Coverage</p>
              <p className="text-3xl font-bold text-white">₹1,500<span className="text-base text-muted font-normal"> /day</span></p>
            </div>
            <button className="btn btn-outline py-2 px-4" onClick={() => navigate('/worker/plans')}>Upgrade</button>
          </div>
        </div>

        {/* Current Risk Level */}
        <div className="card" style={{ background: 'linear-gradient(to right, var(--color-bg-card), rgba(245, 158, 11, 0.1))', borderLeft: '4px solid var(--color-warning)' }}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="badge badge-warning mb-2">Moderate Risk</span>
              <h2 className="text-xl font-bold text-white">Today's Outlook</h2>
            </div>
            <CloudRain size={32} className="text-warning" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-3 rounded-lg" style={{ background: 'var(--color-bg-hover)' }}>
              <p className="text-xs text-muted mb-1">Precipitation</p>
              <p className="font-semibold text-white">12 mm/hr <span className="text-warning text-sm">(Rising)</span></p>
            </div>
            <div className="p-3 rounded-lg" style={{ background: 'var(--color-bg-hover)' }}>
              <p className="text-xs text-muted mb-1">AQI Level</p>
              <p className="font-semibold text-white">142 <span className="text-muted text-sm">(Moderate)</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2"><Activity size={20} className="text-primary"/> Recent Activity</h3>
            <button className="text-primary text-sm font-medium hover:underline" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-hover" style={{ cursor: 'pointer' }}>
               <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                 <CheckCircle size={20} className="text-primary" />
               </div>
               <div className="flex-1">
                 <h4 className="font-medium text-white">Premium Paid</h4>
                 <p className="text-sm text-muted">Weekly Standard Plan deduction</p>
               </div>
               <div className="text-right">
                 <p className="font-semibold text-white">-₹50</p>
                 <p className="text-xs text-muted">Today, 08:30 AM</p>
               </div>
             </div>
             
             <div className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-hover" style={{ cursor: 'pointer' }}>
               <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                 <Shield size={20} className="text-success" />
               </div>
               <div className="flex-1">
                 <h4 className="font-medium text-white">Claim Approved</h4>
                 <p className="text-sm text-muted">Heavy Rainfall disruption</p>
               </div>
               <div className="text-right">
                 <p className="font-semibold text-success">+₹750</p>
                 <p className="text-xs text-muted">Oct 12, 06:15 PM</p>
               </div>
             </div>
             
             <div className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-hover" style={{ cursor: 'pointer' }}>
               <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center" style={{ background: 'rgba(239, 68, 68, 0.1)' }}>
                 <AlertTriangle size={20} className="text-danger" />
               </div>
               <div className="flex-1">
                 <h4 className="font-medium text-white">Alert Triggered</h4>
                 <p className="text-sm text-muted">Red Alert: Monsoon Showers</p>
               </div>
               <div className="text-right">
                 <p className="text-xs text-muted">Oct 12, 02:00 PM</p>
               </div>
             </div>
          </div>
        </div>
        
        <div className="card flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)', border: 'none' }}>
           <div>
             <h3 className="text-xl font-bold text-white mb-2">Need to submit a manual claim?</h3>
             <p className="text-white text-opacity-80 text-sm mb-6" style={{ opacity: 0.9 }}>While our system automatically detects major weather events, you can submit manual claims for localized disruptions.</p>
           </div>
           
           <button className="btn w-full flex justify-center items-center gap-2" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }} onClick={() => navigate('/worker/claims')}>
             File a Claim <ArrowRight size={18} />
           </button>
        </div>
      </div>
    </WorkerLayout>
  );
}

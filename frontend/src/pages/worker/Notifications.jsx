import React from 'react';
import WorkerLayout from '../../components/WorkerLayout';
import { Bell, CloudLightning, ShieldAlert, CheckCircle, Info } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    { id: 1, type: 'alert', title: 'Heavy Rain Detected', message: 'Precipitation exceeding 20mm/hr in your zone. Your shift has been automatically paused without penalty. You are covered.', time: '2 mins ago', unread: true },
    { id: 2, type: 'success', title: 'Claim Processed', message: '₹750 has been credited to your linked UPI account for yesterday\'s heavy rain disruption.', time: '3 hours ago', unread: true },
    { id: 3, type: 'warning', title: 'AQI Rising to Severe', message: 'Air Quality Index has crossed 300. We are monitoring the situation. If it crosses 400, your coverage will trigger automatically.', time: 'Yesterday', unread: false },
    { id: 4, type: 'info', title: 'Plan Auto-Renewed', message: 'Your Standard Plan premium of ₹50 was successfully debited. Coverage extended for 7 days.', time: 'Oct 10, 2026', unread: false }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'alert': return <CloudLightning size={24} className="text-danger" />;
      case 'success': return <CheckCircle size={24} className="text-success" />;
      case 'warning': return <ShieldAlert size={24} className="text-warning" />;
      case 'info': return <Info size={24} className="text-primary" />;
      default: return <Bell size={24} />;
    }
  };

  const getBgColor = (type) => {
    switch(type) {
      case 'alert': return 'rgba(239, 68, 68, 0.1)';
      case 'success': return 'rgba(16, 185, 129, 0.1)';
      case 'warning': return 'rgba(245, 158, 11, 0.1)';
      case 'info': return 'rgba(59, 130, 246, 0.1)';
      default: return 'var(--color-bg-hover)';
    }
  };

  return (
    <WorkerLayout>
      <div className="mb-8 flex justify-between items-end flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
          <p className="text-muted">Stay informed about your coverage, weather alerts, and payouts.</p>
        </div>
        <button className="text-primary font-medium text-sm hover:underline" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Mark all as read</button>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="flex flex-col">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-6 border-b flex gap-4 transition-colors hover:bg-hover cursor-pointer ${notif.unread ? 'bg-[rgba(255,255,255,0.02)]' : ''}`}
              style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: notif.unread ? 'rgba(255,255,255,0.02)' : 'transparent' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: getBgColor(notif.type) }}>
                {getIcon(notif.type)}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                  <h3 className={`font-semibold text-lg ${notif.unread ? 'text-white' : 'text-gray-300'}`}>{notif.title}</h3>
                  <span className="text-xs text-muted whitespace-nowrap">{notif.time}</span>
                </div>
                <p className={`${notif.unread ? 'text-gray-300' : 'text-muted'} leading-relaxed mt-1`}>{notif.message}</p>
              </div>
              
              {notif.unread && (
                <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="p-4 text-center">
          <button className="text-muted text-sm font-medium hover:text-white transition-colors" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Load Older Notifications</button>
        </div>
      </div>
    </WorkerLayout>
  );
}

import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import { AlertOctagon, ShieldAlert, Cpu, Activity, UserX, AlertTriangle } from 'lucide-react';

export default function FraudMonitoring() {
  const anomalies = [
    { id: 1, user: 'Vikram S.', type: 'Location Spoofing', description: 'GPS coordinates manipulated during reported rain hours. IP mismatch detected.', score: 94, actionRequired: true },
    { id: 2, user: 'Neha G.', type: 'Frequent Manual Claims', description: 'Submitted 4 manual claims in the last 14 days. 300% above average.', score: 78, actionRequired: true },
    { id: 3, user: 'Rahul M.', type: 'Platform API Disconnect', description: 'User claimed to be on shift, but Swiggy API confirms they were logged out.', score: 88, actionRequired: true },
    { id: 4, user: 'Syndicate #42', type: 'Coordinated Claims', description: '12 accounts in identical geofence submitting similar manual claims simultaneously.', score: 99, actionRequired: true },
  ];

  return (
    <AdminLayout>
      <div className="mb-8 border-b pb-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-3 mb-2">
          <AlertOctagon size={32} className="text-danger" />
          <h1 className="text-3xl font-bold text-white">AI Fraud Monitoring <span className="text-xl" role="img" aria-label="fire">🔥</span></h1>
        </div>
        <p className="text-muted">Real-time anomaly detection engine powered by machine learning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card text-center" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgba(239, 68, 68, 0.3)', backgroundColor: 'var(--color-bg-card)' }}>
          <ShieldAlert size={24} className="text-danger mx-auto mb-2" />
          <p className="text-sm text-muted mb-1">Critical Threats</p>
          <p className="text-3xl font-bold text-danger">14</p>
        </div>
        <div className="card text-center">
          <Activity size={24} className="text-warning mx-auto mb-2" />
          <p className="text-sm text-muted mb-1">Suspicious Patterns</p>
          <p className="text-3xl font-bold text-warning">89</p>
        </div>
        <div className="card text-center">
          <UserX size={24} className="text-primary mx-auto mb-2" />
          <p className="text-sm text-muted mb-1">Auto-Blocked Users</p>
          <p className="text-3xl font-bold text-white">52</p>
        </div>
        <div className="card text-center">
          <Cpu size={24} className="text-success mx-auto mb-2" />
          <p className="text-sm text-muted mb-1">AI Confidence Rating</p>
          <p className="text-3xl font-bold text-success">98.4%</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Activity size={20} className="text-primary"/> Active Anomaly Alerts</h3>
      <div className="flex flex-col gap-4">
        {anomalies.map((alert) => (
          <div key={alert.id} className="card flex flex-col md:flex-row gap-6 items-start transition-colors hover:bg-hover" style={{ borderLeft: '4px solid var(--color-danger)' }}>
            <div className="w-16 h-16 shrink-0 rounded-full flex items-center justify-center flex-col" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
               <span className="font-bold text-danger text-lg mb-0 leading-none">{alert.score}</span>
               <span className="text-[10px] text-danger font-bold uppercase mt-1">Risk</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle size={18} className="text-danger" />
                <h4 className="font-bold text-lg text-white">{alert.type}</h4>
              </div>
              <p className="text-muted mb-3 leading-relaxed">{alert.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="px-2 py-1 rounded font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'white' }}>User: {alert.user}</span>
                <span className="text-muted">•</span>
                <span className="text-muted">Detected 15 mins ago</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 w-full md:w-auto mt-4 md:mt-0">
               <button className="btn btn-danger w-full text-sm py-2 px-6">Block User(s)</button>
               <button className="btn btn-outline border-[transparent] w-full text-sm py-2 px-6" style={{ borderColor: 'var(--color-danger)', color: 'var(--color-danger)' }}>Flag for Review</button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

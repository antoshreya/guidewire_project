import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Users, FileText, IndianRupee, AlertOctagon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Active Users', value: '45,231', trend: '+12%', isPositive: true, icon: <Users size={24} className="text-primary" />, bg: 'rgba(59, 130, 246, 0.1)' },
    { label: 'Active Policies', value: '41,890', trend: '+15%', isPositive: true, icon: <FileText size={24} className="text-success" />, bg: 'rgba(16, 185, 129, 0.1)' },
    { label: 'Total Payouts (MTD)', value: '₹12.4M', trend: '-2%', isPositive: true, icon: <IndianRupee size={24} className="text-warning" />, bg: 'rgba(245, 158, 11, 0.1)' },
    { label: 'Fraud Alerts', value: '142', trend: '+18%', isPositive: false, icon: <AlertOctagon size={24} className="text-danger" />, bg: 'rgba(239, 68, 68, 0.1)' },
  ];

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Platform Overview</h1>
        <p className="text-muted">High-level metrics for GigProtect operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="card">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: stat.bg }}>
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? 'text-success' : 'text-danger'}`}>
                {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-sm text-muted mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold text-xl text-white mb-6">Recent Disbursements</h3>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-hover transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div>
                    <p className="font-medium text-white">User #{8920 + i}</p>
                    <p className="text-xs text-muted">Auto-approved (Rainfall)</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">₹1,500</p>
                  <p className="text-xs text-muted">2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="font-bold text-xl text-white mb-6">System Status & Alerts</h3>
          <div className="flex flex-col gap-4">
             <div className="p-4 rounded-lg border-l-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', borderLeftColor: 'var(--color-danger)' }}>
               <h4 className="font-bold text-white mb-1">Mumbai Zone: Severe Weather</h4>
               <p className="text-sm text-muted">Precipitation passing 30mm/hr limit. 8,400 policies affected. Automatic claims staging initiated.</p>
             </div>
             <div className="p-4 rounded-lg border-l-4" style={{ backgroundColor: 'rgba(245, 158, 11, 0.05)', borderLeftColor: 'var(--color-warning)' }}>
               <h4 className="font-bold text-white mb-1">Delhi NCR: AQI Spiking</h4>
               <p className="text-sm text-muted">AQI crossing 380 mark. Approaching trigger threshold of 400 for 12,000 standard policies.</p>
             </div>
             <div className="p-4 rounded-lg border-l-4" style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)', borderLeftColor: 'var(--color-primary)' }}>
               <h4 className="font-bold text-white mb-1">UPI Gateway Optimization</h4>
               <p className="text-sm text-muted">Payment processing latency is normal (120ms). Success rate at 99.8% over the last hour.</p>
             </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

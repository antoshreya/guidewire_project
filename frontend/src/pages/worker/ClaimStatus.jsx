import React from 'react';
import WorkerLayout from '../../components/WorkerLayout';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function ClaimStatus() {
  const claims = [
    { id: 'CLM-8902', date: 'Oct 12, 2026', amount: 750, trigger: 'Heavy Rainfall (>20mm/hr)', status: 'Approved', type: 'Automatic' },
    { id: 'CLM-8901', date: 'Sep 28, 2026', amount: 1500, trigger: 'Severe AQI (>400)', status: 'Approved', type: 'Automatic' },
    { id: 'CLM-8850', date: 'Sep 15, 2026', amount: 500, trigger: 'Manual - Vehicle Breakdown', status: 'Pending', type: 'Manual' },
    { id: 'CLM-8722', date: 'Aug 04, 2026', amount: 300, trigger: 'Manual - Minor accident', status: 'Rejected', type: 'Manual' }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Approved': return <CheckCircle size={16} className="text-success" />;
      case 'Pending': return <Clock size={16} className="text-warning" />;
      case 'Rejected': return <XCircle size={16} className="text-danger" />;
      default: return <AlertCircle size={16} />;
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Approved': return 'badge-success';
      case 'Pending': return 'badge-warning';
      case 'Rejected': return 'badge-danger';
      default: return '';
    }
  };

  return (
    <WorkerLayout>
      <div className="mb-8 flex justify-between items-end flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Claims</h1>
          <p className="text-muted">Track your recent and past insurance payouts.</p>
        </div>
        <button className="btn btn-primary">File Manual Claim</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card text-center">
          <p className="text-sm text-muted mb-2">Total Paid Out (This Year)</p>
          <p className="text-3xl font-bold text-success">₹14,250</p>
        </div>
        <div className="card text-center">
          <p className="text-sm text-muted mb-2">Active Claims Processed</p>
          <p className="text-3xl font-bold text-white">12</p>
        </div>
        <div className="card text-center">
          <p className="text-sm text-muted mb-2">Pending Manual Claims</p>
          <p className="text-3xl font-bold text-warning">1</p>
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <h3 className="font-bold text-xl text-white">Claim History</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" style={{ minWidth: '600px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-bg-hover)' }}>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">CLAIM ID</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">DATE</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">TRIGGER DUE TO</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">TYPE</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">AMOUNT</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim, index) => (
                <tr key={index} className="border-b transition-colors hover:bg-hover cursor-pointer" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <td className="p-4 text-white font-medium">{claim.id}</td>
                  <td className="p-4 text-muted">{claim.date}</td>
                  <td className="p-4 text-white">{claim.trigger}</td>
                  <td className="p-4 text-muted">
                    <span className="flex items-center gap-1.5 text-xs">
                      {claim.type === 'Automatic' ? <AlertCircle size={14} className="text-primary"/> : <Clock size={14} />}
                      {claim.type}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-white">₹{claim.amount}</td>
                  <td className="p-4">
                    <span className={`badge flex items-center gap-1.5 inline-flex ${getStatusBadge(claim.status)}`} style={{ width: 'fit-content' }}>
                      {getStatusIcon(claim.status)}
                      {claim.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WorkerLayout>
  );
}

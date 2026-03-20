import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Search, Filter, CheckCircle, XCircle, AlertTriangle, Eye } from 'lucide-react';

export default function ClaimManagement() {
  const [claims, setClaims] = useState([
    { id: 'CLM-9012', user: 'Vikram Singh', type: 'Manual', disruption: 'Vehicle Breakdown', amount: 500, date: 'Oct 12, 14:30', status: 'Pending Review', flagged: false },
    { id: 'CLM-9011', user: 'Neha Gupta', type: 'Manual', disruption: 'Medical Emergency', amount: 1500, date: 'Oct 12, 11:15', status: 'Pending Review', flagged: true },
    { id: 'CLM-9010', user: 'Rahul Sharma', type: 'Automatic', disruption: 'Heavy Rain (>20mm)', amount: 750, date: 'Oct 11, 18:00', status: 'Auto-Approved', flagged: false },
    { id: 'CLM-9009', user: 'Ankita Patel', type: 'Manual', disruption: 'Minor Accident', amount: 1000, date: 'Oct 10, 09:45', status: 'Rejected', flagged: false },
    { id: 'CLM-9008', user: 'Amit Kumar', type: 'Automatic', disruption: 'Severe AQI (>400)', amount: 1500, date: 'Oct 09, 16:20', status: 'Auto-Approved', flagged: false },
  ]);

  const handleAction = (id, action) => {
    setClaims(claims.map(c => {
      if (c.id === id) {
        return { ...c, status: action === 'approve' ? 'Approved' : 'Rejected', flagged: false };
      }
      return c;
    }));
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-end flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Claim Management</h1>
          <p className="text-muted">Review manual claims and monitor auto-approved disbursements.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search size={18} className="text-muted absolute top-1/2 left-3 transform -translate-y-1/2" />
            <input type="text" className="input pr-4" placeholder="Search claims..." style={{ paddingLeft: '2.5rem', width: '250px' }} />
          </div>
          <button className="btn btn-outline flex items-center gap-2">
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card text-center" style={{ borderTop: '4px solid var(--color-warning)' }}>
          <p className="text-sm text-muted mb-2">Pending Manual Review</p>
          <p className="text-3xl font-bold text-warning">24</p>
        </div>
        <div className="card text-center" style={{ borderTop: '4px solid var(--color-danger)' }}>
          <p className="text-sm text-muted mb-2">Flagged for Fraud Risk</p>
          <p className="text-3xl font-bold text-danger">7</p>
        </div>
        <div className="card text-center" style={{ borderTop: '4px solid var(--color-success)' }}>
          <p className="text-sm text-muted mb-2">Auto-Approved (Today)</p>
          <p className="text-3xl font-bold text-success">8,421</p>
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" style={{ minWidth: '900px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-bg-hover)' }}>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">ID / DATE</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">USER</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">TYPE & CAUSE</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">AMOUNT</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">STATUS</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => (
                <tr key={claim.id} className={`border-b transition-colors hover:bg-hover ${claim.flagged ? 'bg-[rgba(239,68,68,0.05)]' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.05)', backgroundColor: claim.flagged ? 'rgba(239, 68, 68, 0.05)' : 'transparent' }}>
                  <td className="p-4">
                    <p className="font-medium text-white">{claim.id}</p>
                    <p className="text-xs text-muted">{claim.date}</p>
                  </td>
                  <td className="p-4 font-medium text-white">{claim.user}</td>
                  <td className="p-4">
                    <p className="text-white">{claim.disruption}</p>
                    <p className="text-xs text-muted">
                      {claim.type === 'Automatic' ? 'System Triggered' : 'User Submitted'}
                    </p>
                  </td>
                  <td className="p-4 font-bold text-white">₹{claim.amount}</td>
                  <td className="p-4">
                    <div className="flex flex-col items-start gap-1">
                      <span className={`badge ${
                        claim.status.includes('Approved') ? 'badge-success' : 
                        claim.status === 'Rejected' ? 'badge-danger' : 'badge-warning'
                      }`}>
                        {claim.status}
                      </span>
                      {claim.flagged && (
                        <span className="flex items-center gap-1 text-xs text-danger font-medium mt-1">
                          <AlertTriangle size={12} /> High Risk Alert
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    {claim.status === 'Pending Review' ? (
                      <div className="flex gap-2 justify-end">
                        <button className="btn btn-outline border-[transparent] text-success p-1.5" style={{ borderColor: 'var(--color-success)', color: 'var(--color-success)' }} title="Approve" onClick={() => handleAction(claim.id, 'approve')}>
                          <CheckCircle size={18} />
                        </button>
                        <button className="btn btn-outline border-[transparent] text-danger p-1.5" style={{ borderColor: 'var(--color-danger)', color: 'var(--color-danger)' }} title="Reject" onClick={() => handleAction(claim.id, 'reject')}>
                          <XCircle size={18} />
                        </button>
                        <button className="btn btn-outline p-1.5 text-muted hover:text-white border-[transparent]" title="View Details">
                          <Eye size={18} />
                        </button>
                      </div>
                    ) : (
                      <button className="btn btn-outline p-1.5 text-muted hover:text-white border-[transparent]" title="View Details">
                        <Eye size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

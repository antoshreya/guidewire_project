import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Search, Filter, ShieldOff, ShieldCheck } from 'lucide-react';

export default function UserManagement() {
  const [users, setUsers] = useState([
    { id: 'USR-8900', name: 'Rahul Sharma', platform: 'Swiggy', plan: 'Premium', status: 'Active', risks: 'Low' },
    { id: 'USR-8901', name: 'Ankita Patel', platform: 'Zomato', plan: 'Standard', status: 'Active', risks: 'Low' },
    { id: 'USR-8902', name: 'Vikram Singh', platform: 'Amazon', plan: 'Basic', status: 'Blocked', risks: 'High' },
    { id: 'USR-8903', name: 'Elena Souza', platform: 'Uber', plan: 'Standard', status: 'Active', risks: 'Medium' },
    { id: 'USR-8904', name: 'Aman Gupta', platform: 'Ola', plan: 'Premium', status: 'Active', risks: 'Low' },
  ]);

  const toggleUserStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'Active' ? 'Blocked' : 'Active' };
      }
      return u;
    }));
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-end flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-muted">View, monitor, and manage gig worker accounts.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search size={18} className="text-muted absolute top-1/2 left-3 transform -translate-y-1/2" />
            <input type="text" className="input pr-4" placeholder="Search users..." style={{ paddingLeft: '2.5rem', width: '250px' }} />
          </div>
          <button className="btn btn-outline flex items-center gap-2">
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" style={{ minWidth: '800px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-bg-hover)' }}>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">USER ID</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">NAME</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">PLATFORM</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">PLAN</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">RISK PROFILE</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider">STATUS</th>
                <th className="p-4 font-semibold text-muted text-sm tracking-wider text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b transition-colors hover:bg-hover" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <td className="p-4 text-white font-medium">{user.id}</td>
                  <td className="p-4 font-bold text-white">{user.name}</td>
                  <td className="p-4 text-muted">{user.platform}</td>
                  <td className="p-4">
                    <span className="badge badge-primary">{user.plan}</span>
                  </td>
                  <td className="p-4">
                    <span className={`text-sm font-medium ${user.risks === 'High' ? 'text-danger' : (user.risks === 'Medium' ? 'text-warning' : 'text-success')}`}>
                      {user.risks} Risk
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`badge ${user.status === 'Active' ? 'badge-success' : 'badge-danger'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      className={`btn p-2 text-sm ${user.status === 'Active' ? 'btn-outline border-[transparent]' : 'btn-outline border-[transparent]'}`}
                      style={{ 
                        padding: '0.25rem 0.5rem', 
                        background: 'transparent',
                        color: user.status === 'Active' ? 'var(--color-danger)' : 'var(--color-success)',
                        border: `1px solid ${user.status === 'Active' ? 'var(--color-danger)' : 'var(--color-success)'}`
                      }}
                      onClick={() => toggleUserStatus(user.id)}
                    >
                      {user.status === 'Active' ? (
                        <span className="flex items-center gap-1"><ShieldOff size={14} /> Block</span>
                      ) : (
                        <span className="flex items-center gap-1"><ShieldCheck size={14} /> Unblock</span>
                      )}
                    </button>
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

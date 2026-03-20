import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

export default function Analytics() {
  const payoutData = [
    { month: 'Jan', amount: 4000 },
    { month: 'Feb', amount: 3000 },
    { month: 'Mar', amount: 2000 },
    { month: 'Apr', amount: 2780 },
    { month: 'May', amount: 1890 },
    { month: 'Jun', amount: 5390 },
    { month: 'Jul', amount: 12490 }, // Monsoon peak
    { month: 'Aug', amount: 10490 },
    { month: 'Sep', amount: 6490 },
    { month: 'Oct', amount: 4490 },
  ];

  const disruptionData = [
    { name: 'Mon', rain: 400, aqi: 240, temp: 240 },
    { name: 'Tue', rain: 300, aqi: 139, temp: 221 },
    { name: 'Wed', rain: 200, aqi: 980, temp: 229 },
    { name: 'Thu', rain: 278, aqi: 390, temp: 200 },
    { name: 'Fri', rain: 189, aqi: 480, temp: 218 },
    { name: 'Sat', rain: 239, aqi: 380, temp: 250 },
    { name: 'Sun', rain: 349, aqi: 430, temp: 210 },
  ];

  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}>
          <p className="text-white font-medium mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color, fontSize: '0.875rem' }} className="flex justify-between gap-4">
              <span>{entry.name}</span>
              <span className="font-bold">{entry.name === 'amount' ? '₹' : ''}{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-end flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics & Reporting</h1>
          <p className="text-muted">Analyze payouts, disruption trends, and fraud patterns over time.</p>
        </div>
        
        <select className="select w-auto min-w-[150px]">
          <option>Last 30 Days</option>
          <option>This Quarter</option>
          <option>Year to Date</option>
          <option selected>All Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Total Payouts Chart */}
        <div className="card h-[400px] flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Total Insurance Payouts</h3>
          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={payoutData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                <Tooltip content={customTooltip} />
                <Area type="monotone" dataKey="amount" name="amount" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" activeDot={{ r: 6, strokeWidth: 0, fill: 'var(--color-primary)' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Disruption Types Chart */}
        <div className="card h-[400px] flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Claims By Disruption Type (Weekly)</h3>
          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={disruptionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={customTooltip} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
                <Bar dataKey="rain" name="Rainfall" stackId="a" fill="var(--color-primary)" radius={[0,0,4,4]} />
                <Bar dataKey="aqi" name="AQI/Pollution" stackId="a" fill="var(--color-warning)" />
                <Bar dataKey="temp" name="Temperature" stackId="a" fill="var(--color-danger)" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="card">
         <div className="flex items-center justify-between mb-6 border-b pb-4" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <h3 className="text-lg font-bold text-white">System Efficiency Report</h3>
            <button className="btn btn-outline text-sm py-1.5 px-4">Download PDF</button>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
               <p className="text-muted text-sm mb-1">Auto-Approval Rate</p>
               <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold text-white">92.4%</span>
                  <span className="text-sm font-medium text-success mb-1">+4.2%</span>
               </div>
               <div className="w-full h-2 rounded-full mt-3 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="bg-success h-full" style={{ width: '92.4%' }}></div>
               </div>
            </div>
            
            <div>
               <p className="text-muted text-sm mb-1">Avg. Manual Review Time</p>
               <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold text-white">4h 12m</span>
                  <span className="text-sm font-medium text-success mb-1">-45m</span>
               </div>
               <div className="w-full h-2 rounded-full mt-3 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="bg-primary h-full" style={{ width: '60%' }}></div>
               </div>
            </div>
            
            <div>
               <p className="text-muted text-sm mb-1">Fraud Detection Accuracy</p>
               <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold text-white">99.1%</span>
                  <span className="text-sm font-medium text-success mb-1">+0.5%</span>
               </div>
               <div className="w-full h-2 rounded-full mt-3 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="bg-warning h-full" style={{ width: '99.1%', backgroundColor: 'var(--color-warning)' }}></div>
               </div>
            </div>
         </div>
      </div>
    </AdminLayout>
  );
}

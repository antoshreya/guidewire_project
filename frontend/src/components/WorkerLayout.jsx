import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShieldCheck, LayoutDashboard, FileText, CreditCard, Clock, Bell, LogOut, Menu } from 'lucide-react';

export default function WorkerLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/worker/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'My Plan', path: '/worker/plans', icon: <FileText size={20} /> },
    { name: 'Payment', path: '/worker/payment', icon: <CreditCard size={20} /> },
    { name: 'Claims', path: '/worker/claims', icon: <Clock size={20} /> },
    { name: 'Notifications', path: '/worker/notifications', icon: <Bell size={20} /> },
  ];

  return (
    <div className="flex h-full w-full" style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-main)' }}>
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col" style={{ width: '280px', backgroundColor: 'var(--color-bg-card)', borderRight: '1px solid rgba(255,255,255,0.05)', height: '100vh', position: 'sticky', top: 0 }}>
        <div className="p-6 flex items-center gap-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <ShieldCheck size={32} className="text-primary" />
          <h2 className="text-xl font-bold text-white">GigProtect</h2>
        </div>
        
        <div className="p-6 flex flex-col gap-2 flex-1">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Main Menu</p>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-primary text-white' : 'text-muted hover:bg-hover hover:text-white'}`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                color: isActive ? 'white' : 'var(--color-text-muted)'
              })}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>

        <div className="p-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg text-danger hover:bg-hover w-full transition-all" style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            <LogOut size={20} />
            <span className="font-medium text-base">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-card border-b" style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-2">
            <ShieldCheck size={24} className="text-primary" />
            <h2 className="text-lg font-bold text-white">GigProtect</h2>
          </div>
          <button className="text-white" style={{ background: 'none', border: 'none', padding: '0.5rem' }}>
            <Menu size={24} />
          </button>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

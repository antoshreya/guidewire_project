import React, { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { Save, CloudRain, Wind, Thermometer, ShieldCheck } from 'lucide-react';

export default function RiskConfiguration() {
  const [isSaving, setIsSaving] = useState(false);
  const [alertConfig, setAlertConfig] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setAlertConfig(true);
      setTimeout(() => setAlertConfig(false), 3000);
    }, 1000);
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-end flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Risk Configuration</h1>
          <p className="text-muted">Set global thresholds for automatic claim generation.</p>
        </div>
        
        <button className="btn btn-primary" onClick={handleSave} disabled={isSaving}>
          <Save size={18} className="mr-2 inline" />
          {isSaving ? 'Saving...' : 'Save Configuration'}
        </button>
      </div>

      {alertConfig && (
        <div className="mb-6 p-4 rounded-lg flex items-center gap-3 transition-all" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--color-success)' }}>
           <ShieldCheck size={20} className="text-success stretch-0" />
           <p className="font-medium text-success">Configuration saved successfully. Changes will apply to all active policies immediately.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Rainfall Settings */}
        <div className="card h-full flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="p-2 rounded bg-primary bg-opacity-20 text-primary">
              <CloudRain size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">Precipitation</h2>
          </div>
          
          <div className="flex flex-col gap-5 flex-1">
            <div>
              <label className="text-sm font-medium text-muted mb-2 block">Heavy Rain Alert Threshold (mm/hr)</label>
              <input type="number" className="input" defaultValue={15} />
              <p className="text-xs text-muted mt-2">Triggers push notifications, no automatic claims.</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted mb-2 block">Automatic Claim Threshold (mm/hr)</label>
              <input type="number" className="input border-primary" style={{ borderColor: 'var(--color-primary)' }} defaultValue={20} />
              <p className="text-xs text-primary mt-2 flex items-center gap-1"><ShieldCheck size={12}/> Exceeding this triggers automatic payouts.</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted mb-2 block">Data Source</label>
              <select className="select">
                <option>IMD (Indian Meteorological Dept)</option>
                <option>AccuWeather API</option>
                <option>OpenWeather Map</option>
              </select>
            </div>
          </div>
        </div>

        {/* AQI Settings */}
        <div className="card h-full flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="p-2 rounded bg-warning bg-opacity-20 text-warning" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
              <Wind size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">Air Quality (AQI)</h2>
          </div>
          
          <div className="flex flex-col gap-5 flex-1">
             <div>
              <label className="text-sm font-medium text-muted mb-2 block">Severe AQI Alert Threshold</label>
              <input type="number" className="input" defaultValue={300} />
              <p className="text-xs text-muted mt-2">Triggers push notifications.</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted mb-2 block">Automatic Claim Threshold</label>
              <input type="number" className="input border-warning" style={{ borderColor: 'var(--color-warning)' }} defaultValue={400} />
              <p className="text-xs text-warning mt-2 flex items-center gap-1"><ShieldCheck size={12}/> Exceeding this triggers automatic payouts.</p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted mb-2 block">Data Source</label>
              <select className="select">
                <option>Central Pollution Control Board</option>
                <option>IQAir</option>
                <option>WAQI API</option>
              </select>
            </div>
          </div>
        </div>

        {/* Temperature Settings */}
        <div className="card h-full flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="p-2 rounded bg-danger bg-opacity-20 text-danger" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
              <Thermometer size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">Extreme Temperature</h2>
          </div>
          
          <div className="flex flex-col gap-5 flex-1">
             <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted mb-2 block">Min Trigger (°C)</label>
                  <input type="number" className="input" defaultValue={4} />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted mb-2 block">Max Trigger (°C)</label>
                  <input type="number" className="input border-danger" style={{ borderColor: 'var(--color-danger)' }} defaultValue={45} />
                </div>
             </div>
             <p className="text-xs text-muted mt-1 text-danger">Triggers automatic claims when outside this range.</p>
            
            <div>
              <label className="text-sm font-medium text-muted mb-2 block">Sustained Duration (Hours)</label>
              <input type="number" className="input" defaultValue={3} />
              <p className="text-xs text-muted mt-2">Condition must persist for this duration before triggering.</p>
            </div>
            
            <div className="mt-auto pt-4 flex items-center justify-between border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <span className="text-sm font-bold text-white">Enable Protection Feature</span>
              <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                <input type="checkbox" className="sr-only" defaultChecked style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }} />
                <div style={{ width: '44px', height: '24px', backgroundColor: 'var(--color-primary)', borderRadius: '9999px', position: 'relative' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: '22px', transition: 'left 0.2s' }}></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

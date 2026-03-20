import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/worker/Login';
import WorkerDashboard from './pages/worker/Dashboard';
import PlanSelection from './pages/worker/PlanSelection';
import Payment from './pages/worker/Payment';
import ClaimStatus from './pages/worker/ClaimStatus';
import Notifications from './pages/worker/Notifications';

import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import ClaimManagement from './pages/admin/ClaimManagement';
import FraudMonitoring from './pages/admin/FraudMonitoring';
import RiskConfiguration from './pages/admin/RiskConfiguration';
import Analytics from './pages/admin/Analytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Worker Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/worker/dashboard" element={<WorkerDashboard />} />
        <Route path="/worker/plans" element={<PlanSelection />} />
        <Route path="/worker/payment" element={<Payment />} />
        <Route path="/worker/claims" element={<ClaimStatus />} />
        <Route path="/worker/notifications" element={<Notifications />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/claims" element={<ClaimManagement />} />
        <Route path="/admin/fraud" element={<FraudMonitoring />} />
        <Route path="/admin/risk" element={<RiskConfiguration />} />
        <Route path="/admin/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

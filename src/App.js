import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Placeholder routes for student and faculty — to be built later */}
        <Route path="/student/dashboard" element={<div style={{ padding: 40 }}>Student Dashboard — Coming Soon</div>} />
        <Route path="/faculty/dashboard" element={<div style={{ padding: 40 }}>Faculty Dashboard — Coming Soon</div>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

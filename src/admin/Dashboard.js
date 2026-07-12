import './Dashboard.css';
import { useState } from 'react';
import Projects from './Projects';
import Students from './Students';
import Tasks from './Tasks';
import Reports from './Reports';
import Settings from './Settings';

function DashboardHome() {
  return (
    <div>
      <p className="welcome-text">Good morning, Admin </p>
      <div className="stats-grid">
        <div className="stat-card" style={{ borderTop: '4px solid #4f5fc4' }}>
          <p className="stat-value" style={{ color: '#4f5fc4' }}>24</p>
          <p className="stat-label">Total Projects</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #27ae60' }}>
          <p className="stat-value" style={{ color: '#27ae60' }}>138</p>
          <p className="stat-label">Active Students</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #e67e22' }}>
          <p className="stat-value" style={{ color: '#e67e22' }}>17</p>
          <p className="stat-label">Pending Tasks</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #8e44ad' }}>
          <p className="stat-value" style={{ color: '#8e44ad' }}>89</p>
          <p className="stat-label">Completed</p>
        </div>
      </div>
      <div className="table-section">
        <h3>Recent Projects</h3>
        <table className="proj-table">
          <thead>
            <tr><th>#</th><th>Project Name</th><th>Student</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>AI Chatbot</td><td>Ali Hassan</td><td><span className="badge in-progress">In Progress</span></td></tr>
            <tr><td>2</td><td>E-Commerce App</td><td>Sara Khan</td><td><span className="badge completed">Completed</span></td></tr>
            <tr><td>3</td><td>Inventory System</td><td>Usman Tariq</td><td><span className="badge pending">Pending</span></td></tr>
            <tr><td>4</td><td>Hospital App</td><td>Ayesha Noor</td><td><span className="badge in-progress">In Progress</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Dashboard() {
  const [page, setPage] = useState('Dashboard');

  function renderPage() {
    if (page === 'Projects') return <Projects />;
    if (page === 'Students') return <Students />;
    if (page === 'Tasks')    return <Tasks />;
    if (page === 'Reports')  return <Reports />;
    if (page === 'Settings') return <Settings />;
    return <DashboardHome />;
  }

  return (
    <div className="dash-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">SPMS</div>
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => setPage('Dashboard')}>Dashboard</button>
          <button className="nav-item" onClick={() => setPage('Projects')}>Projects</button>
          <button className="nav-item" onClick={() => setPage('Students')}>Students</button>
          <button className="nav-item" onClick={() => setPage('Tasks')}>Tasks</button>
          <button className="nav-item" onClick={() => setPage('Reports')}>Reports</button>
          <button className="nav-item" onClick={() => setPage('Settings')}>Settings</button>
        </nav>
      </aside>

      <div className="dash-main">
        <header className="navbar">
          <span className="page-title">{page}</span>
          <button className="profile-btn">
            <div className="avatar">A</div>
            <span className="profile-name">Admin</span>
          </button>
        </header>
        <main className="dash-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

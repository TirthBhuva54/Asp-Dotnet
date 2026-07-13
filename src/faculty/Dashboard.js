import './Dashboard.css';
import { useState } from 'react';
import MyStudents from './MyStudents';
import Evaluate from './Evaluate';
import Announcements from './Announcements';
import Schedule from './Schedule';

function DashboardHome() {
  return (
    <div>
      <p className="welcome-text">Welcome, Raj Sharma </p>

      <div className="stats-grid">
        <div className="stat-card" style={{ borderTop: '4px solid #4f5fc4' }}>
          <p className="stat-value" style={{ color: '#4f5fc4' }}>5</p>
          <p className="stat-label">Assigned Students</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #27ae60' }}>
          <p className="stat-value" style={{ color: '#27ae60' }}>3</p>
          <p className="stat-label">Projects Active</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #e67e22' }}>
          <p className="stat-value" style={{ color: '#e67e22' }}>4</p>
          <p className="stat-label">Pending Reviews</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #8e44ad' }}>
          <p className="stat-value" style={{ color: '#8e44ad' }}>2</p>
          <p className="stat-label">Completed</p>
        </div>
      </div>

      <div className="dash-row">
        <div className="table-section">
          <h3>My Students</h3>
          <table className="proj-table">
            <thead>
              <tr><th>#</th><th>Student</th><th>Project</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Arjun Sharma</td><td>AI Chatbot</td><td><span className="badge in-progress">In Progress</span></td></tr>
              <tr><td>2</td><td>Rohan Verma</td><td>Inventory System</td><td><span className="badge pending">Pending</span></td></tr>
              <tr><td>3</td><td>Vikram Nair</td><td>Chat Application</td><td><span className="badge in-progress">In Progress</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className="activity-section">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li><span className="dot blue"></span> Arjun Sharma submitted progress report</li>
            <li><span className="dot orange"></span> Rohan Verma missed task deadline</li>
            <li><span className="dot green"></span> Vikram Nair completed UI design</li>
            <li><span className="dot purple"></span> Evaluation form due on 15 Jul</li>
          </ul>
        </div>/
      </div>
    </div>
  );
}

function Dashboard() {
  const [page, setPage] = useState('home');

  const pageNames = {
    home: 'Dashboard', mystudents: 'My Students',
    evaluate: 'Evaluate', schedule: 'Schedule', announcements: 'Announcements'
  };

  function renderPage() {
    if (page === 'mystudents')    return <MyStudents />;
    if (page === 'evaluate')      return <Evaluate />;
    if (page === 'schedule')      return <Schedule />;
    if (page === 'announcements') return <Announcements />;
    return <DashboardHome />;
  }

  return (
    <div className="dash-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">SPMS</div>
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => setPage('home')}>Dashboard</button>
          <button className="nav-item" onClick={() => setPage('mystudents')}>My Students</button>
          <button className="nav-item" onClick={() => setPage('evaluate')}>Evaluate</button>
          <button className="nav-item" onClick={() => setPage('schedule')}>Schedule</button>
          <button className="nav-item" onClick={() => setPage('announcements')}>Announcements</button>
        </nav>
      </aside>

      <div className="dash-main">
        <header className="navbar">
          <span className="page-title">{pageNames[page]}</span>
          <div className="navbar-right">
            <input className="search-input" type="text" placeholder="Search..." />
            <div className="profile-hover-wrap">
              <button className="profile-btn">
                <div className="avatar">RS</div>
                <span className="profile-name">Raj Sharma</span>
                <span className="arrow">▾</span>
              </button>
              <div className="profile-dropdown">
                <div className="profile-dropdown-inner">
                  <a href="#">My Profile</a>
                  <a href="#">Change Password</a>
                  <hr />
                  <a href="/" className="logout-link">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="dash-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

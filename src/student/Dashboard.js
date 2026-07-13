import './Dashboard.css';
import { useState } from 'react';
import MyProject from './MyProject';
import MyTasks from './MyTasks';
import Submissions from './Submissions';
import Announcements from './Announcements';

function DashboardHome() {
  return (
    <div>
      <p className="welcome-text">Welcome, Arjun Sharma </p>

      <div className="stats-grid">
        <div className="stat-card" style={{ borderTop: '4px solid #4f5fc4' }}>
          <p className="stat-value" style={{ color: '#4f5fc4' }}>AI Chatbot</p>
          <p className="stat-label">My Project</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #e67e22' }}>
          <p className="stat-value" style={{ color: '#e67e22' }}>3</p>
          <p className="stat-label">Pending Tasks</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #27ae60' }}>
          <p className="stat-value" style={{ color: '#27ae60' }}>5</p>
          <p className="stat-label">Tasks Completed</p>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #8e44ad' }}>
          <p className="stat-value" style={{ color: '#8e44ad' }}>2</p>
          <p className="stat-label">Submissions</p>
        </div>
      </div>

      <div className="dash-row">
        <div className="table-section">
          <h3>My Recent Tasks</h3>
          <table className="proj-table">
            <thead>
              <tr><th>#</th><th>Task</th><th>Due Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Design UI</td><td>12 Jul 2026</td><td><span className="badge completed">Done</span></td></tr>
              <tr><td>2</td><td>Backend API</td><td>15 Jul 2026</td><td><span className="badge in-progress">In Progress</span></td></tr>
              <tr><td>3</td><td>Database Schema</td><td>18 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
              <tr><td>4</td><td>Testing & QA</td><td>22 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className="activity-section">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li><span className="dot green"></span> Design UI task marked complete</li>
            <li><span className="dot blue"></span> Submitted progress report</li>
            <li><span className="dot orange"></span> Backend API deadline updated</li>
            <li><span className="dot purple"></span> Supervisor Dr. Rajesh left a comment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [page, setPage] = useState('home');

  const pageNames = {
    home: 'Dashboard', myproject: 'My Project', mytasks: 'My Tasks',
    submissions: 'Submissions', announcements: 'Announcements'
  };

  function renderPage() {
    if (page === 'myproject')     return <MyProject />;
    if (page === 'mytasks')       return <MyTasks />;
    if (page === 'submissions')   return <Submissions />;
    if (page === 'announcements') return <Announcements />;
    return <DashboardHome />;
  }

  return (
    <div className="dash-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">SPMS</div>
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => setPage('home')}>Dashboard</button>
          <button className="nav-item" onClick={() => setPage('myproject')}>My Project</button>
          <button className="nav-item" onClick={() => setPage('mytasks')}>My Tasks</button>
          <button className="nav-item" onClick={() => setPage('submissions')}>Submissions</button>
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
                <div className="avatar">A</div>
                <span className="profile-name">Arjun</span>
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

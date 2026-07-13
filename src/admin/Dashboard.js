import './Dashboard.css';
import { useState } from 'react';
import Projects from './Projects';
import Students from './Students';
import Tasks from './Tasks';
import Reports from './Reports';
import Settings from './Settings';
import Announcements from './Announcements';
import ManageStudents from './ManageStudents';
import ManageFaculty from './ManageFaculty';

function DashboardHome() {
  return (
    <div>
      <p className="welcome-text">Good morning, Admin </p>
      <div className="stats-grid">
        <div className="stat-card" style={{ borderTop: '4px solid #4f5fc4' }}>
          <p className="stat-value" style={{ color: '#4f5fc4' }}>24</p>
          <p className="stat-label">Total Projects</p>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '60%', background: '#4f5fc4' }}></div></div>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #27ae60' }}>
          <p className="stat-value" style={{ color: '#27ae60' }}>138</p>
          <p className="stat-label">Active Students</p>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '80%', background: '#27ae60' }}></div></div>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #e67e22' }}>
          <p className="stat-value" style={{ color: '#e67e22' }}>17</p>
          <p className="stat-label">Pending Tasks</p>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '30%', background: '#e67e22' }}></div></div>
        </div>
        <div className="stat-card" style={{ borderTop: '4px solid #8e44ad' }}>
          <p className="stat-value" style={{ color: '#8e44ad' }}>89</p>
          <p className="stat-label">Completed</p>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '75%', background: '#8e44ad' }}></div></div>
        </div>
      </div>

      <div className="dash-row">
        <div className="table-section">
          <h3>Recent Projects</h3>
          <table className="proj-table">
            <thead>
              <tr><th>#</th><th>Project Name</th><th>Student</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>AI Chatbot</td><td>Arjun Sharma</td><td><span className="badge in-progress">In Progress</span></td></tr>
              <tr><td>2</td><td>E-Commerce App</td><td>Priya Patel</td><td><span className="badge completed">Completed</span></td></tr>
              <tr><td>3</td><td>Inventory System</td><td>Rohan Verma</td><td><span className="badge pending">Pending</span></td></tr>
              <tr><td>4</td><td>Hospital App</td><td>Sneha Iyer</td><td><span className="badge in-progress">In Progress</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className="activity-section">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li><span className="dot blue"></span> Arjun Sharma submitted AI Chatbot report</li>
            <li><span className="dot green"></span> Priya Patel project marked completed</li>
            <li><span className="dot orange"></span> Rohan Verma task deadline updated</li>
            <li><span className="dot purple"></span> Sneha Iyer added new milestone</li>
            <li><span className="dot blue"></span> New student Vikram Nair registered</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [page, setPage] = useState('home');

  const pageNames = {
    home: 'Dashboard', projects: 'Projects', students: 'Students',
    managestudents: 'Manage Students', managefaculty: 'Manage Faculty',
    tasks: 'Tasks', reports: 'Reports', announcements: 'Announcements', settings: 'Settings'
  };

  function renderPage() {
    if (page === 'projects')      return <Projects />;
    if (page === 'students')      return <Students />;
    if (page === 'tasks')         return <Tasks />;
    if (page === 'reports')       return <Reports />;
    if (page === 'settings')      return <Settings />;
    if (page === 'announcements') return <Announcements />;
    if (page === 'managestudents')return <ManageStudents />;
    if (page === 'managefaculty') return <ManageFaculty />;
    return <DashboardHome />;
  }

  return (
    <div className="dash-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">SPMS</div>
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => setPage('home')}>Dashboard</button>
          <button className="nav-item" onClick={() => setPage('projects')}>Projects</button>
          <button className="nav-item" onClick={() => setPage('students')}>Students</button>
          <button className="nav-item" onClick={() => setPage('managestudents')}>Manage Students</button>
          <button className="nav-item" onClick={() => setPage('managefaculty')}>Manage Faculty</button>
          <button className="nav-item" onClick={() => setPage('tasks')}>Tasks</button>
          <button className="nav-item" onClick={() => setPage('reports')}>Reports</button>
          <button className="nav-item" onClick={() => setPage('announcements')}>Announcements</button>
          <button className="nav-item" onClick={() => setPage('settings')}>Settings</button>
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
                <span className="profile-name">Admin</span>
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

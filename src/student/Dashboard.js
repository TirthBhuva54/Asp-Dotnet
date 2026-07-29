import './Dashboard.css';
import { useState } from 'react';
import MyProject from './MyProject';
import MyTasks from './MyTasks';
import Submissions from './Submissions';
import Announcements from './Announcements';
import MySupervisor from './MySupervisor';
import Schedule from './Schedule';

// SPM_ProjectAllocation data for this student
const allocation = {
  projectTitle: 'AI Chatbot',
  faculty: 'Dr. Rajesh Kumar',
  totalTasks: 8,
  completedTasks: 5,
  progress: 62.50,
};

function DashboardHome() {
  const pendingTasks = allocation.totalTasks - allocation.completedTasks;

  return (
    <div>
      <div className="content-header">
        <h2>Dashboard</h2>
        <p>Welcome back, Arjun Sharma. Here's your project overview.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">My Project</span>
            <div className="stat-icon-box" style={{ background: '#dbeafe' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
          </div>
          <div className="stat-value" style={{ fontSize: 16, marginTop: 2 }}>{allocation.projectTitle}</div>
          <div className="stat-sub">assigned project</div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Total Tasks</span>
            <div className="stat-icon-box" style={{ background: '#f3e8ff' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
          </div>
          <div className="stat-value">{allocation.totalTasks}</div>
          <div className="stat-sub">tasks assigned</div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Completed</span>
            <div className="stat-icon-box" style={{ background: '#dcfce7' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <div className="stat-value">{allocation.completedTasks}</div>
          <div className="stat-sub">tasks completed</div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Pending</span>
            <div className="stat-icon-box" style={{ background: '#fef9c3' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#a16207" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
          </div>
          <div className="stat-value">{pendingTasks}</div>
          <div className="stat-sub">tasks pending</div>
        </div>
      </div>

      {/* Progress */}
      <div className="table-section" style={{ marginBottom: 18 }}>
        <div className="section-header">
          <h3>Project Progress</h3>
          <span style={{ fontSize: 13, color: '#3b82f6', fontWeight: 600 }}>{allocation.progress.toFixed(1)}%</span>
        </div>
        <div className="progress-wrap">
          <div className="progress-bar-track" style={{ height: 10 }}>
            <div className="progress-bar-fill" style={{ width: `${allocation.progress}%`, background: allocation.progress === 100 ? '#22c55e' : '#3b82f6' }} />
          </div>
          <span className="progress-pct">{allocation.progress.toFixed(0)}%</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 12.5, color: '#64748b' }}>
          {allocation.completedTasks} of {allocation.totalTasks} tasks completed &nbsp;·&nbsp; Supervisor: {allocation.faculty}
        </div>
      </div>

      <div className="dash-row">
        <div className="table-section">
          <div className="section-header"><h3>My Recent Tasks</h3></div>
          <table className="proj-table">
            <thead>
              <tr><th>#</th><th>Task</th><th>Priority</th><th>Due Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Design UI Wireframes</td><td><span className="badge moderate">Moderate</span></td><td>12 Jul 2026</td><td><span className="badge completed">Completed</span></td></tr>
              <tr><td>2</td><td>Train NLP Model</td><td><span className="badge critical">Critical</span></td><td>15 Jul 2026</td><td><span className="badge ongoing">Ongoing</span></td></tr>
              <tr><td>3</td><td>Database Schema</td><td><span className="badge critical">Critical</span></td><td>18 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
              <tr><td>4</td><td>Testing & QA</td><td><span className="badge low">Low</span></td><td>22 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className="activity-section">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li><span className="act-dot green"></span> Design UI task marked completed</li>
            <li><span className="act-dot blue"></span> Submitted progress report</li>
            <li><span className="act-dot orange"></span> NLP Model task updated</li>
            <li><span className="act-dot red"></span> Faculty left a remark on Task 2</li>
          </ul>
        </div>
      </div>

      <div className="student-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

const NAV_SECTIONS = [
  {
    label: 'My Portal',
    items: [
      { key: 'home',          label: 'Dashboard'      },
      { key: 'myproject',     label: 'My Project'     },
      { key: 'mytasks',       label: 'My Tasks'       },
      { key: 'mysupervisor',  label: 'My Supervisor'  },
    ]
  },
  {
    label: 'Academic',
    items: [
      { key: 'submissions',   label: 'Submissions'    },
      { key: 'schedule',      label: 'Schedule'       },
      { key: 'announcements', label: 'Announcements'  },
    ]
  }
];

function Dashboard() {
  const [page, setPage] = useState('home');

  const allItems = NAV_SECTIONS.flatMap(s => s.items);
  const currentItem = allItems.find(i => i.key === page) || allItems[0];

  function renderPage() {
    if (page === 'myproject')     return <MyProject />;
    if (page === 'mytasks')       return <MyTasks />;
    if (page === 'submissions')   return <Submissions />;
    if (page === 'mysupervisor')  return <MySupervisor />;
    if (page === 'schedule')      return <Schedule />;
    if (page === 'announcements') return <Announcements />;
    return <DashboardHome />;
  }

  return (
    <div className="dash-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">S</div>
          SPMS
        </div>
        <nav className="sidebar-nav">
          {NAV_SECTIONS.map(section => (
            <div key={section.label}>
              <div className="sidebar-section-label">{section.label}</div>
              {section.items.map(item => (
                <button
                  key={item.key}
                  className={`nav-item${page === item.key ? ' active' : ''}`}
                  onClick={() => setPage(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="dash-main">
        <header className="navbar">
          <div className="navbar-left">
            <div className="breadcrumb">
              Home / <span>{currentItem.label}</span>
            </div>
          </div>
          <div className="navbar-right">
            <input className="search-input" type="text" placeholder="Search..." />
            <button className="notif-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="notif-dot"></span>
            </button>
            <div className="profile-hover-wrap">
              <button className="profile-btn">
                <div className="avatar">A</div>
                <span className="profile-name">Arjun</span>
                <span className="arrow">&#9662;</span>
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

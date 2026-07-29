import './Dashboard.css';
import { useState } from 'react';
import Projects from './Projects';
import Tasks from './Tasks';
import Reports from './Reports';
import Announcements from './Announcements';
import ManageStudents from './ManageStudents';
import ManageFaculty from './ManageFaculty';
import ManageUsers from './ManageUsers';
import ManageRoles from './ManageRoles';
import UserRoles from './UserRoles';

function DashboardHome() {
  return (
    <div>
      <div className="content-header">
        <h2>Dashboard</h2>
        <p>Welcome back, Admin. Here's what's happening today.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Total Users</span>
            <div className="stat-icon-box" style={{ background: '#dbeafe' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
          </div>
          <div className="stat-value">6</div>
          <div className="stat-sub">registered users</div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Total Students</span>
            <div className="stat-icon-box" style={{ background: '#dcfce7' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
          </div>
          <div className="stat-value">6</div>
          <div className="stat-sub">enrolled students</div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Active Projects</span>
            <div className="stat-icon-box" style={{ background: '#fef9c3' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#a16207" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
          </div>
          <div className="stat-value">5</div>
          <div className="stat-sub">active projects</div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Total Tasks</span>
            <div className="stat-icon-box" style={{ background: '#f3e8ff' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
          </div>
          <div className="stat-value">8</div>
          <div className="stat-sub">total tasks</div>
        </div>
      </div>

      <div className="dash-row">
        <div className="table-section">
          <div className="section-header">
            <h3>Recent Projects</h3>
            <button className="see-all-btn">See All</button>
          </div>
          <table className="proj-table">
            <thead>
              <tr><th>#</th><th>Project Name</th><th>Student</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>AI Chatbot</td><td>Arjun Sharma</td><td><span className="badge ongoing">Ongoing</span></td></tr>
              <tr><td>2</td><td>E-Commerce App</td><td>Priya Patel</td><td><span className="badge completed">Completed</span></td></tr>
              <tr><td>3</td><td>Inventory System</td><td>Rohan Verma</td><td><span className="badge pending">Pending</span></td></tr>
              <tr><td>4</td><td>Hospital App</td><td>Sneha Iyer</td><td><span className="badge ongoing">Ongoing</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className="activity-section">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li><span className="act-dot blue"></span> Arjun Sharma submitted AI Chatbot report</li>
            <li><span className="act-dot green"></span> Priya Patel project marked completed</li>
            <li><span className="act-dot orange"></span> Rohan Verma task deadline updated</li>
            <li><span className="act-dot red"></span> Sneha Iyer added new milestone</li>
            <li><span className="act-dot indigo"></span> New student Vikram Nair registered</li>
          </ul>
        </div>
      </div>

      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

const NAV_SECTIONS = [
  {
    label: 'Admin Modules',
    items: [
      { key: 'home',          label: 'Dashboard'       },
      { key: 'manageusers',   label: 'Manage Users'    },
      { key: 'managestudents',label: 'Manage Students' },
      { key: 'managefaculty', label: 'Manage Faculty'  },
      { key: 'manageroles',   label: 'Manage Roles'    },
      { key: 'userroles',     label: 'User Roles'      },
    ]
  },
  {
    label: 'Project Management',
    items: [
      { key: 'projects',      label: 'Manage Projects' },
      { key: 'tasks',         label: 'Manage Tasks'    },
      { key: 'reports',       label: 'Reports'         },
      { key: 'announcements', label: 'Announcements'   },
    ]
  }
];

function Dashboard() {
  const [page, setPage] = useState('home');

  const allItems = NAV_SECTIONS.flatMap(s => s.items);
  const currentItem = allItems.find(i => i.key === page) || allItems[0];

  function renderPage() {
    if (page === 'projects')       return <Projects />;
    if (page === 'tasks')          return <Tasks />;
    if (page === 'reports')        return <Reports />;
    if (page === 'announcements')  return <Announcements />;
    if (page === 'managestudents') return <ManageStudents />;
    if (page === 'managefaculty')  return <ManageFaculty />;
    if (page === 'manageusers')    return <ManageUsers />;
    if (page === 'manageroles')    return <ManageRoles />;
    if (page === 'userroles')      return <UserRoles />;
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
            <div className="search-wrap">
              <input className="search-input" type="text" placeholder="Search..." />
            </div>
            <button className="notif-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="notif-dot"></span>
            </button>
            <div className="profile-hover-wrap">
              <button className="profile-btn">
                <div className="avatar">A</div>
                <span className="profile-name">Admin</span>
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

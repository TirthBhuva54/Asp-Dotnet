import './Dashboard.css';
import { useState } from 'react';
import MyStudents from './MyStudents';
import ManageTasks from './ManageTasks';
import Announcements from './Announcements';
import Schedule from './Schedule';

// Faculty sees: their students (SPM_ProjectAllocation), tasks they assigned (SPM_Task)
// Faculty CANNOT: manage users, manage roles, manage all projects, view reports of all users

const myStats = {
  students: 5,
  activeProjects: 3,
  pendingTasks: 7,
  completedProjects: 2,
};

function DashboardHome() {
  return (
    <div>
      <div className="content-header">
        <h2>Dashboard</h2>
        <p>Welcome back, Dr. Rajesh Kumar. Here's your supervision overview.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">My Students</span>
            <div className="stat-icon-box" style={{ background: '#dbeafe' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
          </div>
          <div className="stat-value">{myStats.students}</div>
          <div className="stat-sub">assigned students</div>
        </div>
        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Active Projects</span>
            <div className="stat-icon-box" style={{ background: '#dcfce7' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
          </div>
          <div className="stat-value">{myStats.activeProjects}</div>
          <div className="stat-sub">projects active</div>
        </div>
        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Pending Tasks</span>
            <div className="stat-icon-box" style={{ background: '#fef9c3' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#a16207" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
          </div>
          <div className="stat-value">{myStats.pendingTasks}</div>
          <div className="stat-sub">tasks pending review</div>
        </div>
        <div className="stat-card">
          <div className="stat-top">
            <span className="stat-label">Completed</span>
            <div className="stat-icon-box" style={{ background: '#f3e8ff' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <div className="stat-value">{myStats.completedProjects}</div>
          <div className="stat-sub">projects completed</div>
        </div>
      </div>

      <div className="dash-row">
        <div className="table-section">
          <div className="section-header"><h3>My Students</h3></div>
          <table className="proj-table">
            <thead>
              <tr><th>#</th><th>Student</th><th>Enrollment No</th><th>Project</th><th>Progress</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td><td>Arjun Sharma</td><td>CS-2201</td><td>AI Chatbot</td>
                <td>
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <div style={{ width:80, height:5, background:'#e2e8f0', borderRadius:4, overflow:'hidden' }}>
                      <div style={{ width:'62%', height:'100%', background:'#3b82f6', borderRadius:4 }} />
                    </div>
                    <span style={{ fontSize:11, color:'#64748b' }}>62%</span>
                  </div>
                </td>
                <td><span className="badge ongoing">Ongoing</span></td>
              </tr>
              <tr>
                <td>2</td><td>Rohan Verma</td><td>IT-2203</td><td>Inventory System</td>
                <td>
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <div style={{ width:80, height:5, background:'#e2e8f0', borderRadius:4, overflow:'hidden' }}>
                      <div style={{ width:'33%', height:'100%', background:'#3b82f6', borderRadius:4 }} />
                    </div>
                    <span style={{ fontSize:11, color:'#64748b' }}>33%</span>
                  </div>
                </td>
                <td><span className="badge pending">Pending</span></td>
              </tr>
              <tr>
                <td>3</td><td>Priya Patel</td><td>CS-2202</td><td>E-Commerce Platform</td>
                <td>
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <div style={{ width:80, height:5, background:'#e2e8f0', borderRadius:4, overflow:'hidden' }}>
                      <div style={{ width:'100%', height:'100%', background:'#22c55e', borderRadius:4 }} />
                    </div>
                    <span style={{ fontSize:11, color:'#64748b' }}>100%</span>
                  </div>
                </td>
                <td><span className="badge completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="activity-section">
          <h3>Recent Activity</h3>
          <ul className="activity-list">
            <li><span className="act-dot blue"></span> Arjun Sharma submitted progress report</li>
            <li><span className="act-dot orange"></span> Rohan Verma missed task deadline</li>
            <li><span className="act-dot green"></span> Priya Patel project marked completed</li>
            <li><span className="act-dot red"></span> New task review pending for Arjun</li>
          </ul>
        </div>
      </div>
      <div className="faculty-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

const NAV_SECTIONS = [
  {
    label: 'My Supervision',
    items: [
      { key: 'home',         label: 'Dashboard'     },
      { key: 'mystudents',   label: 'My Students'   },
      { key: 'managetasks',  label: 'Manage Tasks'  },
      { key: 'schedule',     label: 'Schedule'      },
    ]
  },
  {
    label: 'General',
    items: [
      { key: 'announcements', label: 'Announcements' },
    ]
  }
];

function Dashboard() {
  const [page, setPage] = useState('home');
  const allItems = NAV_SECTIONS.flatMap(s => s.items);
  const currentItem = allItems.find(i => i.key === page) || allItems[0];

  function renderPage() {
    if (page === 'mystudents')   return <MyStudents />;
    if (page === 'managetasks')  return <ManageTasks />;
    if (page === 'schedule')     return <Schedule />;
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
            <div className="breadcrumb">Home / <span>{currentItem.label}</span></div>
          </div>
          <div className="navbar-right">
            <input className="search-input" type="text" placeholder="Search..." />
            <button className="notif-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="notif-dot"></span>
            </button>
            <div className="profile-hover-wrap">
              <button className="profile-btn">
                <div className="avatar">RK</div>
                <span className="profile-name">Dr. Rajesh</span>
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
        <main className="dash-content">{renderPage()}</main>
      </div>
    </div>
  );
}

export default Dashboard;

import './Dashboard.css';

function Dashboard() {

  function setTitle(name) {
    document.getElementById('page-title').innerText = name;
  }

  return (
    <div className="dash-layout">

      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-name">SPMS</span>
        </div>
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => setTitle('Dashboard')}>Dashboard</button>
          <button className="nav-item" onClick={() => setTitle('Projects')}>Projects</button>
          <button className="nav-item" onClick={() => setTitle('Students')}>Students</button>
          <button className="nav-item" onClick={() => setTitle('Tasks')}>Tasks</button>
          <button className="nav-item" onClick={() => setTitle('Reports')}>Reports</button>
          <button className="nav-item" onClick={() => setTitle('Settings')}>Settings</button>
        </nav>
      </aside>

      <div className="dash-main">

        <header className="navbar">
          <span id="page-title" className="page-title">Dashboard</span>
          <div className="profile-wrap">
            <button className="profile-btn">
              <div className="avatar">A</div>
              <span className="profile-name">Admin</span>
            </button>
          </div>
        </header>

        <main className="dash-content">
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
                <tr>
                  <th>No.</th>
                  <th>Project Name</th>
                  <th>Student</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>AI Chatbot</td>
                  <td>Raj Kumar</td>
                  <td><span className="badge in-progress">In Progress</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>E-Commerce App</td>
                  <td>Jay Patel</td>
                  <td><span className="badge completed">Completed</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Inventory System</td>
                  <td>Kuldeep Joshi</td>
                  <td><span className="badge pending">Pending</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hospital App</td>
                  <td>Prince Sharma</td>
                  <td><span className="badge in-progress">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

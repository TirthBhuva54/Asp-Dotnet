import './Settings.css';

function Settings() {
  return (
    <div className="page-wrap">
      <h2>Settings</h2>
      <p className="page-sub">Manage your system preferences.</p>

      <div className="settings-box">
        <h3>General</h3>
        <div className="setting-row">
          <label>System Name</label>
          <input type="text" defaultValue="SPMS" />
        </div>
        <div className="setting-row">
          <label>Admin Email</label>
          <input type="email" defaultValue="admin@spms.com" />
        </div>
        <div className="setting-row">
          <label>Academic Year</label>
          <input type="text" defaultValue="2025 - 2026" />
        </div>
        <div className="setting-row">
          <label>Language</label>
          <select defaultValue="en">
            <option value="en">English</option>
            <option value="ur">Urdu</option>
          </select>
        </div>
      </div>

      <div className="settings-box">
        <h3>Project Rules</h3>
        <div className="setting-row">
          <label>Max Students per Supervisor</label>
          <input type="number" defaultValue="5" />
        </div>
        <div className="setting-row">
          <label>Project Submission Deadline</label>
          <input type="date" defaultValue="2026-07-31" />
        </div>
        <div className="setting-row">
          <label>Allow Late Submissions</label>
          <select defaultValue="no">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
      </div>

      <button className="save-btn">Save Changes</button>
    </div>
  );
}

export default Settings;

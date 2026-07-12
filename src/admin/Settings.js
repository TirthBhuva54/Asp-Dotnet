import './Settings.css';

function Settings() {
  return (
    <div className="page-wrap">
      <h2>Settings</h2>
      <p className="page-sub">Manage your system preferences.</p>
      <div className="settings-box">
        <div className="setting-row">
          <label>System Name</label>
          <input type="text" defaultValue="SPMS" />
        </div>
        <div className="setting-row">
          <label>Admin Email</label>
          <input type="email" defaultValue="admin@spms.com" />
        </div>
        <div className="setting-row">
          <label>Language</label>
          <select defaultValue="en">
            <option value="en">English</option>
            <option value="ur">Urdu</option>
          </select>
        </div>
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;

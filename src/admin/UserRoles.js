import { useState } from 'react';

const roleBadgeClass = (name) => {
  if (name === 'Admin')   return 'critical';
  if (name === 'Faculty') return 'moderate';
  return 'ongoing';
};

function AssignForm({ userRole, users, roles, onSave, onBack }) {
  const empty = { userId: '', roleId: '' };
  const [form, setForm] = useState(userRole ? { userId: userRole.userId, roleId: userRole.roleId } : empty);
  const ch = (k, v) => setForm(f => ({ ...f, [k]: parseInt(v) }));

  const selectedUser = users.find(u => u.id === form.userId);
  const selectedRole = roles.find(r => r.id === form.roleId);

  return (
    <div>
      <div className="content-header">
        <h2>{userRole ? 'Edit User Role' : 'Assign Role'}</h2>
        <p>Home / User Roles / {userRole ? 'Edit' : 'Assign'}</p>
      </div>
      <div className="form-card">
        <div className="form-card-title">Role Assignment</div>
        <div className="form-row">
          <label>Select User</label>
          <select className="form-select" value={form.userId || ''} onChange={e => ch('userId', e.target.value)}>
            <option value="">-- Select User --</option>
            {users.map(u => <option key={u.id} value={u.id}>{u.fullName} ({u.userCode})</option>)}
          </select>
        </div>
        <div className="form-row">
          <label>Select Role</label>
          <select className="form-select" value={form.roleId || ''} onChange={e => ch('roleId', e.target.value)}>
            <option value="">-- Select Role --</option>
            {roles.map(r => <option key={r.id} value={r.id}>{r.roleName}</option>)}
          </select>
        </div>
        {selectedUser && selectedRole && (
          <div style={{ marginTop: 16, padding: '12px 16px', background: '#f0f6ff', borderRadius: 8, border: '1px solid #dbeafe', fontSize: 13, color: '#334155' }}>
            Assigning role <strong>{selectedRole.roleName}</strong> to <strong>{selectedUser.fullName}</strong>
          </div>
        )}
        <div className="form-actions">
          <button className="btn-save" onClick={() => { if (!form.userId || !form.roleId) return; onSave(form); }}>Save</button>
          <button className="btn-back" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

function UserRoles() {
  const [userRoles, setUserRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // TODO: fetch from GET /api/userroles, GET /api/users, GET /api/roles

  const filtered = userRoles.filter(ur => {
    const ms = ur.userName?.toLowerCase().includes(search.toLowerCase()) ||
               ur.userCode?.toLowerCase().includes(search.toLowerCase());
    const mr = roleFilter === 'All' || ur.roleName === roleFilter;
    return ms && mr;
  });

  const handleSave = (form) => {
    // TODO: POST /api/userroles or PUT /api/userroles/{id}
    setView('list'); setEditing(null);
  };

  const handleRemove = (id) => {
    // TODO: DELETE /api/userroles/{id}
  };

  if (view === 'form') {
    return <AssignForm userRole={editing} users={users} roles={roles} onSave={handleSave} onBack={() => { setView('list'); setEditing(null); }} />;
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>User Roles</h2>
          <p className="page-sub">Assign and manage roles for system users.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ Assign Role</button>
      </div>
      <div className="filter-bar">
        <input className="filter-input" placeholder="Search by name or user code..." value={search} onChange={e => setSearch(e.target.value)} />
        <select className="filter-select" value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
          <option>All</option><option>Admin</option><option>Student</option><option>Faculty</option>
        </select>
      </div>
      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Full Name</th><th>User Code</th><th>Assigned Role</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filtered.map((ur, i) => (
            <tr key={ur.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600 }}>{ur.userName}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{ur.userCode}</td>
              <td><span className={`badge ${roleBadgeClass(ur.roleName)}`}>{ur.roleName}</span></td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(ur); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => handleRemove(ur.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default UserRoles;

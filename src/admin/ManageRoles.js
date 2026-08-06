import { useState } from 'react';

function RoleForm({ role, onSave, onBack }) {
  const [form, setForm] = useState(role || { roleName: '', description: '' });
  const ch = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="content-header">
        <h2>{role ? 'Edit Role' : 'Add Role'}</h2>
        <p>Home / Manage Roles / {role ? 'Edit' : 'Add'}</p>
      </div>
      <div className="form-card">
        <div className="form-card-title">Role Details</div>
        <div className="form-row">
          <label>Role Name</label>
          <input className="form-input" value={form.roleName} onChange={e => ch('roleName', e.target.value)} placeholder="Enter role name" />
        </div>
        <div className="form-row">
          <label>Description</label>
          <textarea className="form-textarea" value={form.description || ''} onChange={e => ch('description', e.target.value)} placeholder="Enter description" />
        </div>
        <div className="form-actions">
          <button className="btn-save" onClick={() => onSave(form)}>Save</button>
          <button className="btn-back" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

function ManageRoles() {
  const [roles, setRoles] = useState([]);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);

  // TODO: fetch from GET /api/roles

  const handleSave = (form) => {
    // TODO: POST /api/roles or PUT /api/roles/{id}
    setView('list'); setEditing(null);
  };

  const handleDelete = (id) => {
    // TODO: DELETE /api/roles/{id}
  };

  if (view === 'form') {
    return <RoleForm role={editing} onSave={handleSave} onBack={() => { setView('list'); setEditing(null); }} />;
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Roles</h2>
          <p className="page-sub">Define system roles and their descriptions.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ Add Role</button>
      </div>
      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Role Name</th><th>Description</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {roles.map((r, i) => (
            <tr key={r.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600, color: '#1e3a5f' }}>{r.roleName}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{r.description || '—'}</td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(r); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => handleDelete(r.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default ManageRoles;

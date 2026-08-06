import { useState, useEffect } from 'react';
import api from '../api/axios';

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ fullName: '', userTypeId: '', userCode: '', email: '', password: '', mobileNumber: '', isActive: true });

  useEffect(() => {
    api.get('/users').then(res => setUsers(res.data));
    api.get('/usertypes').then(res => setUserTypes(res.data));
  }, []);

  const openAdd = () => {
    setEditing(null);
    setForm({ fullName: '', userTypeId: '', userCode: '', email: '', password: '', mobileNumber: '', isActive: true });
    setView('form');  
  };

  const openEdit = (u) => {
    setEditing(u);
    setForm({ fullName: u.fullName, userTypeId: u.userTypeId, userCode: u.userCode, email: u.email, password: '', mobileNumber: u.mobileNumber, isActive: u.isActive });
    setView('form');
  };

  const handleSave = async () => {
    if (!editing && !form.password) {
      alert('Password is required.');
      return;
    }
    const data = {
      userTypeId:         parseInt(form.userTypeId),
      fullName:           form.fullName,
      userCode:           form.userCode || '',
      email:              form.email,
      password:           form.password || '',
      mobileNumber:       form.mobileNumber || '',
      profilePicturePath: '',
      isActive:           form.isActive,
      isDeleted:          false,
      userType:           null
    };
    if (editing) {
      await api.put(`/users/${editing.id}`, data);
    } else {
      await api.post('/users', data);
    }
    const res = await api.get('/users');
    setUsers(res.data);
    setView('list');
  };

  if (view === 'form') {
    return (
      <div className="page-wrap">
        <div className="content-header">
          <h2>{editing ? 'Edit User' : 'Add User'}</h2>
          <p>Home / Manage Users / {editing ? 'Edit' : 'Add'}</p>
        </div>
        <div className="form-card">
          <div className="form-card-title">User Details</div>
          <div className="form-row">
            <label>Full Name</label>
            <input className="form-input" value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} placeholder="Enter full name" />
          </div>
          <div className="form-row">
            <label>User Type</label>
            <select className="form-select" value={form.userTypeId} onChange={e => setForm({...form, userTypeId: e.target.value})}>
              <option value="">-- Select User Type --</option>
              {userTypes.map(t => <option key={t.id} value={t.id}>{t.userTypeName}</option>)}
            </select>
          </div>
          <div className="form-row">
            <label>User Code</label>
            <input className="form-input" value={form.userCode} onChange={e => setForm({...form, userCode: e.target.value})} placeholder="e.g. CS-2201 / FAC-001" />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input className="form-input" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="Enter email" />
          </div>
          <div className="form-row">
            <label>{editing ? 'New Password' : 'Password'}</label>
            <input className="form-input" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder={editing ? 'Leave blank to keep current' : 'Enter password'} />
          </div>
          <div className="form-row">
            <label>Mobile Number</label>
            <input className="form-input" value={form.mobileNumber} onChange={e => setForm({...form, mobileNumber: e.target.value})} placeholder="Enter mobile number" />
          </div>
          <div className="form-row">
            <label>Status</label>
            <select className="form-select" value={form.isActive ? 'Active' : 'Inactive'} onChange={e => setForm({...form, isActive: e.target.value === 'Active'})}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="form-actions">
            <button className="btn-save" onClick={handleSave}>Save</button>
            <button className="btn-back" onClick={() => setView('list')}>Back</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Users</h2>
          <p className="page-sub">Add, edit or deactivate system users.</p>
        </div>
        <button className="add-btn" onClick={openAdd}>+ Add User</button>
      </div>
      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>User Code</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>User Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td>{u.fullName}</td>
              <td>{u.userCode}</td>
              <td>{u.email}</td>
              <td>{u.mobileNumber}</td>
              <td>{u.userTypeName}</td>
              <td>{u.isActive ? 'Active' : 'Inactive'}</td>
              <td>
                <button className="act-btn view" onClick={() => openEdit(u)}>Edit</button>
                <button className="act-btn delete" onClick={async () => { await api.delete(`/users/${u.id}`); const res = await api.get('/users'); setUsers(res.data); }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default ManageUsers;

import { useState } from 'react';

// Maps to SPM_User table
const initialUsers = [
  { id: 1, userType: 'Admin',   fullName: 'Aarav Patel',   userCode: 'ADM-001', email: 'admin@spms.com',   mobile: '9876543210', isActive: true  },
  { id: 2, userType: 'Faculty', fullName: 'Priya Sharma',  userCode: 'FAC-001', email: 'priya.s@spms.com', mobile: '9876543211', isActive: true  },
  { id: 3, userType: 'Student', fullName: 'Rohan Mehta',   userCode: 'CS-2201', email: 'rohan@spms.com',   mobile: '9876543212', isActive: true  },
  { id: 4, userType: 'Student', fullName: 'Sneha Desai',   userCode: 'CS-2202', email: 'sneha@spms.com',   mobile: '9876543213', isActive: true  },
  { id: 5, userType: 'Faculty', fullName: 'Vikram Singh',  userCode: 'FAC-002', email: 'vikram@spms.com',  mobile: '9876543214', isActive: false },
  { id: 6, userType: 'Student', fullName: 'Anita Joshi',   userCode: 'IT-2201', email: 'anita@spms.com',   mobile: '9876543215', isActive: true  },
];

const userTypes = ['Admin', 'Student', 'Faculty'];

function UserForm({ user, onSave, onBack }) {
  const empty = { fullName: '', userType: 'Student', userCode: '', email: '', password: '', mobile: '', isActive: true };
  const [form, setForm] = useState(user ? { ...user, password: '' } : empty);
  const ch = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="content-header">
        <h2>{user ? 'Edit User' : 'Add User'}</h2>
        <p>Home / Manage Users / {user ? 'Edit' : 'Add'}</p>
      </div>
      <div className="form-card">
        <div className="form-card-title">User Details</div>

        <div className="form-row">
          <label>Full Name</label>
          <input className="form-input" value={form.fullName} onChange={e => ch('fullName', e.target.value)} placeholder="Enter full name" />
        </div>
        <div className="form-row">
          <label>User Type</label>
          <select className="form-select" value={form.userType} onChange={e => ch('userType', e.target.value)}>
            {userTypes.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="form-row">
          <label>User Code</label>
          <input className="form-input" value={form.userCode} onChange={e => ch('userCode', e.target.value)} placeholder="Enrollment No / Faculty Code" />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input className="form-input" type="email" value={form.email} onChange={e => ch('email', e.target.value)} placeholder="Enter email" />
        </div>
        <div className="form-row">
          <label>{user ? 'New Password' : 'Password'}</label>
          <input className="form-input" type="password" value={form.password} onChange={e => ch('password', e.target.value)} placeholder={user ? 'Leave blank to keep current' : 'Enter password'} />
        </div>
        <div className="form-row">
          <label>Mobile Number</label>
          <input className="form-input" value={form.mobile} onChange={e => ch('mobile', e.target.value)} placeholder="Enter mobile number" />
        </div>
        <div className="form-row">
          <label>Status</label>
          <select className="form-select" value={form.isActive ? 'Active' : 'Inactive'} onChange={e => ch('isActive', e.target.value === 'Active')}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="form-actions">
          <button className="btn-save" onClick={() => onSave(form)}>Save</button>
          <button className="btn-back" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = users.filter(u => {
    const ms = u.fullName.toLowerCase().includes(search.toLowerCase()) ||
               u.email.toLowerCase().includes(search.toLowerCase());
    const mt = typeFilter === 'All' || u.userType === typeFilter;
    const mst = statusFilter === 'All' ||
                (statusFilter === 'Active' && u.isActive) ||
                (statusFilter === 'Inactive' && !u.isActive);
    return ms && mt && mst;
  });

  const handleSave = (form) => {
    if (editing) {
      setUsers(users.map(u => u.id === editing.id ? { ...form, id: u.id } : u));
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }
    setView('list'); setEditing(null);
  };

  if (view === 'form') {
    return <UserForm user={editing} onSave={handleSave} onBack={() => { setView('list'); setEditing(null); }} />;
  }

  const typeBadgeClass = (t) => {
    if (t === 'Admin')   return 'critical';
    if (t === 'Faculty') return 'moderate';
    return 'ongoing';
  };

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Users</h2>
          <p className="page-sub">Add, edit or deactivate system users.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ Add User</button>
      </div>

      <div className="filter-bar">
        <input className="filter-input" placeholder="Search by name or email..." value={search} onChange={e => setSearch(e.target.value)} />
        <select className="filter-select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option>All</option>
          <option>Admin</option>
          <option>Student</option>
          <option>Faculty</option>
        </select>
        <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
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
          {filtered.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600 }}>{u.fullName}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{u.userCode}</td>
              <td style={{ fontSize: '13px' }}>{u.email}</td>
              <td style={{ fontSize: '13px' }}>{u.mobile}</td>
              <td><span className={`badge ${typeBadgeClass(u.userType)}`}>{u.userType}</span></td>
              <td><span className={`badge ${u.isActive ? 'active' : 'inactive'}`}>{u.isActive ? 'Active' : 'Inactive'}</span></td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(u); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => setUsers(users.map(x => x.id === u.id ? { ...x, isActive: false } : x))}>Deactivate</button>
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

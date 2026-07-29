import { useState } from 'react';

// SPM_UserRole table: RolePermissionID, RoleID (FK→SPM_Role), UserID (FK→SPM_User)

const allUsers = [
  { id: 1, fullName: 'Aarav Patel',  userCode: 'ADM-001', email: 'admin@spms.com'   },
  { id: 2, fullName: 'Priya Sharma', userCode: 'FAC-001', email: 'priya.s@spms.com' },
  { id: 3, fullName: 'Rohan Mehta',  userCode: 'CS-2201', email: 'rohan@spms.com'   },
  { id: 4, fullName: 'Sneha Desai',  userCode: 'CS-2202', email: 'sneha@spms.com'   },
  { id: 5, fullName: 'Vikram Singh', userCode: 'FAC-002', email: 'vikram@spms.com'  },
  { id: 6, fullName: 'Anita Joshi',  userCode: 'IT-2201', email: 'anita@spms.com'   },
];

const allRoles = [
  { id: 1, roleName: 'Admin'   },
  { id: 2, roleName: 'Student' },
  { id: 3, roleName: 'Faculty' },
];

// SPM_UserRole rows
const initialUserRoles = [
  { id: 1, userId: 1, roleId: 1, userName: 'Aarav Patel',  userCode: 'ADM-001', roleName: 'Admin'   },
  { id: 2, userId: 2, roleId: 3, userName: 'Priya Sharma', userCode: 'FAC-001', roleName: 'Faculty' },
  { id: 3, userId: 3, roleId: 2, userName: 'Rohan Mehta',  userCode: 'CS-2201', roleName: 'Student' },
  { id: 4, userId: 4, roleId: 2, userName: 'Sneha Desai',  userCode: 'CS-2202', roleName: 'Student' },
  { id: 5, userId: 5, roleId: 3, userName: 'Vikram Singh', userCode: 'FAC-002', roleName: 'Faculty' },
  { id: 6, userId: 6, roleId: 2, userName: 'Anita Joshi',  userCode: 'IT-2201', roleName: 'Student' },
];

const roleBadgeClass = (name) => {
  if (name === 'Admin')   return 'critical';
  if (name === 'Faculty') return 'moderate';
  return 'ongoing';
};

function AssignForm({ userRole, onSave, onBack }) {
  const empty = { userId: '', roleId: '' };
  const [form, setForm] = useState(
    userRole
      ? { userId: userRole.userId, roleId: userRole.roleId }
      : empty
  );
  const ch = (k, v) => setForm(f => ({ ...f, [k]: parseInt(v) }));

  const selectedUser = allUsers.find(u => u.id === form.userId);
  const selectedRole = allRoles.find(r => r.id === form.roleId);

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
          <select
            className="form-select"
            value={form.userId || ''}
            onChange={e => ch('userId', e.target.value)}
          >
            <option value="">-- Select User --</option>
            {allUsers.map(u => (
              <option key={u.id} value={u.id}>
                {u.fullName} ({u.userCode})
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label>Select Role</label>
          <select
            className="form-select"
            value={form.roleId || ''}
            onChange={e => ch('roleId', e.target.value)}
          >
            <option value="">-- Select Role --</option>
            {allRoles.map(r => (
              <option key={r.id} value={r.id}>{r.roleName}</option>
            ))}
          </select>
        </div>

        {selectedUser && selectedRole && (
          <div style={{
            marginTop: 16, padding: '12px 16px',
            background: '#f0f6ff', borderRadius: 8,
            border: '1px solid #dbeafe', fontSize: 13, color: '#334155'
          }}>
            Assigning role <strong>{selectedRole.roleName}</strong> to <strong>{selectedUser.fullName}</strong>
          </div>
        )}

        <div className="form-actions">
          <button
            className="btn-save"
            onClick={() => {
              if (!form.userId || !form.roleId) return;
              const u = allUsers.find(x => x.id === form.userId);
              const r = allRoles.find(x => x.id === form.roleId);
              onSave({ ...form, userName: u.fullName, userCode: u.userCode, roleName: r.roleName });
            }}
          >
            Save
          </button>
          <button className="btn-back" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

function UserRoles() {
  const [userRoles, setUserRoles] = useState(initialUserRoles);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filtered = userRoles.filter(ur => {
    const ms = ur.userName.toLowerCase().includes(search.toLowerCase()) ||
               ur.userCode.toLowerCase().includes(search.toLowerCase());
    const mr = roleFilter === 'All' || ur.roleName === roleFilter;
    return ms && mr;
  });

  const handleSave = (form) => {
    if (editing) {
      setUserRoles(userRoles.map(ur => ur.id === editing.id ? { ...form, id: ur.id } : ur));
    } else {
      setUserRoles([...userRoles, { ...form, id: Date.now() }]);
    }
    setView('list'); setEditing(null);
  };

  if (view === 'form') {
    return (
      <AssignForm
        userRole={editing}
        onSave={handleSave}
        onBack={() => { setView('list'); setEditing(null); }}
      />
    );
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
        <input
          className="filter-input"
          placeholder="Search by name or user code..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="filter-select"
          value={roleFilter}
          onChange={e => setRoleFilter(e.target.value)}
        >
          <option>All</option>
          <option>Admin</option>
          <option>Student</option>
          <option>Faculty</option>
        </select>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>User Code</th>
            <th>Assigned Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ur, i) => (
            <tr key={ur.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600 }}>{ur.userName}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{ur.userCode}</td>
              <td>
                <span className={`badge ${roleBadgeClass(ur.roleName)}`}>{ur.roleName}</span>
              </td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(ur); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => setUserRoles(userRoles.filter(x => x.id !== ur.id))}>Remove</button>
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

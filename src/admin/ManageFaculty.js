import { useState } from 'react';

// SPM_User where UserType = Faculty
const initialFaculty = [
  { id: 1, fullName: 'Raj Sharma',          userCode: 'FAC-001', email: 'raj@spms.com',    mobile: '9870001111', dept: 'Computer Science', assigned: 5, isActive: true  },
  { id: 2, fullName: 'Dr. Anita Desai',     userCode: 'FAC-002', email: 'anita@spms.com',  mobile: '9870002222', dept: 'Information Tech',  assigned: 4, isActive: true  },
  { id: 3, fullName: 'Prof. Suresh Sharma', userCode: 'FAC-003', email: 'suresh@spms.com', mobile: '9870003333', dept: 'Computer Science', assigned: 3, isActive: true  },
  { id: 4, fullName: 'Dr. Meena Joshi',     userCode: 'FAC-004', email: 'meena@spms.com',  mobile: '9870004444', dept: 'Information Tech',  assigned: 0, isActive: false },
  { id: 5, fullName: 'Prof. Deepak Rao',    userCode: 'FAC-005', email: 'deepak@spms.com', mobile: '9870005555', dept: 'Computer Science', assigned: 5, isActive: true  },
];

function FacultyForm({ faculty, onSave, onBack }) {
  const empty = { fullName: '', userCode: '', email: '', mobile: '', dept: '', isActive: true };
  const [form, setForm] = useState(faculty || empty);
  const ch = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="content-header">
        <h2>{faculty ? 'Edit Faculty' : 'Add Faculty'}</h2>
        <p>Home / Manage Faculty / {faculty ? 'Edit' : 'Add'}</p>
      </div>
      <div className="form-card">
        <div className="form-card-title">Faculty Details</div>
        <div className="form-row">
          <label>Full Name</label>
          <input className="form-input" value={form.fullName} onChange={e => ch('fullName', e.target.value)} placeholder="Enter full name" />
        </div>
        <div className="form-row">
          <label>Faculty Code</label>
          <input className="form-input" value={form.userCode} onChange={e => ch('userCode', e.target.value)} placeholder="e.g. FAC-001" />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input className="form-input" type="email" value={form.email} onChange={e => ch('email', e.target.value)} placeholder="Enter email" />
        </div>
        <div className="form-row">
          <label>Mobile Number</label>
          <input className="form-input" value={form.mobile} onChange={e => ch('mobile', e.target.value)} placeholder="Enter mobile number" />
        </div>
        <div className="form-row">
          <label>Department</label>
          <input className="form-input" value={form.dept} onChange={e => ch('dept', e.target.value)} placeholder="e.g. Computer Science" />
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

function ManageFaculty() {
  const [faculty, setFaculty] = useState(initialFaculty);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = faculty.filter(f =>
    f.fullName.toLowerCase().includes(search.toLowerCase()) ||
    f.email.toLowerCase().includes(search.toLowerCase()) ||
    f.userCode.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (form) => {
    if (editing) {
      setFaculty(faculty.map(f => f.id === editing.id ? { ...form, id: f.id, assigned: f.assigned } : f));
    } else {
      setFaculty([...faculty, { ...form, id: Date.now(), assigned: 0 }]);
    }
    setView('list'); setEditing(null);
  };

  if (view === 'form') {
    return <FacultyForm faculty={editing} onSave={handleSave} onBack={() => { setView('list'); setEditing(null); }} />;
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Faculty</h2>
          <p className="page-sub">Add, edit or remove faculty and supervisors.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ Add Faculty</button>
      </div>

      <div className="filter-bar">
        <input className="filter-input" placeholder="Search by name, email or faculty code..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Full Name</th><th>Faculty Code</th><th>Email</th><th>Mobile</th><th>Department</th><th>Students</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filtered.map((f, i) => (
            <tr key={f.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600 }}>{f.fullName}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{f.userCode}</td>
              <td style={{ fontSize: '13px' }}>{f.email}</td>
              <td style={{ fontSize: '13px' }}>{f.mobile}</td>
              <td>{f.dept}</td>
              <td style={{ textAlign: 'center' }}>{f.assigned}</td>
              <td><span className={`badge ${f.isActive ? 'active' : 'inactive'}`}>{f.isActive ? 'Active' : 'Inactive'}</span></td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(f); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => setFaculty(faculty.filter(x => x.id !== f.id))}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default ManageFaculty;

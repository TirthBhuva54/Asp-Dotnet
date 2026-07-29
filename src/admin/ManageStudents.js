import { useState } from 'react';

// SPM_User where UserType = Student
const initialStudents = [
  { id: 1, fullName: 'Arjun Sharma', userCode: 'CS-2201', email: 'arjun@spms.com',  mobile: '9876543212', dept: 'Computer Science', isActive: true  },
  { id: 2, fullName: 'Priya Patel',  userCode: 'CS-2202', email: 'priya@spms.com',  mobile: '9876543213', dept: 'Computer Science', isActive: true  },
  { id: 3, fullName: 'Rohan Verma',  userCode: 'IT-2203', email: 'rohan@spms.com',  mobile: '9876543214', dept: 'Information Tech',  isActive: false },
  { id: 4, fullName: 'Sneha Iyer',   userCode: 'IT-2204', email: 'sneha@spms.com',  mobile: '9876543215', dept: 'Information Tech',  isActive: true  },
  { id: 5, fullName: 'Vikram Nair',  userCode: 'CS-2205', email: 'vikram@spms.com', mobile: '9876543216', dept: 'Computer Science', isActive: true  },
  { id: 6, fullName: 'Kavya Reddy',  userCode: 'CS-2206', email: 'kavya@spms.com',  mobile: '9876543217', dept: 'Computer Science', isActive: false },
];

function StudentForm({ student, onSave, onBack }) {
  const empty = { fullName: '', userCode: '', email: '', mobile: '', dept: '', isActive: true };
  const [form, setForm] = useState(student || empty);
  const ch = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="content-header">
        <h2>{student ? 'Edit Student' : 'Add Student'}</h2>
        <p>Home / Manage Students / {student ? 'Edit' : 'Add'}</p>
      </div>
      <div className="form-card">
        <div className="form-card-title">Student Details</div>
        <div className="form-row">
          <label>Full Name</label>
          <input className="form-input" value={form.fullName} onChange={e => ch('fullName', e.target.value)} placeholder="Enter full name" />
        </div>
        <div className="form-row">
          <label>Enrollment No</label>
          <input className="form-input" value={form.userCode} onChange={e => ch('userCode', e.target.value)} placeholder="e.g. CS-2201" />
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

function ManageStudents() {
  const [students, setStudents] = useState(initialStudents);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = students.filter(s =>
    s.fullName.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase()) ||
    s.userCode.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (form) => {
    if (editing) {
      setStudents(students.map(s => s.id === editing.id ? { ...form, id: s.id } : s));
    } else {
      setStudents([...students, { ...form, id: Date.now() }]);
    }
    setView('list'); setEditing(null);
  };

  if (view === 'form') {
    return <StudentForm student={editing} onSave={handleSave} onBack={() => { setView('list'); setEditing(null); }} />;
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Students</h2>
          <p className="page-sub">Add, edit or remove student accounts.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ Add Student</button>
      </div>

      <div className="filter-bar">
        <input className="filter-input" placeholder="Search by name, email or enrollment no..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Full Name</th><th>Enrollment No</th><th>Email</th><th>Mobile</th><th>Department</th><th>Status</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filtered.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600 }}>{s.fullName}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{s.userCode}</td>
              <td style={{ fontSize: '13px' }}>{s.email}</td>
              <td style={{ fontSize: '13px' }}>{s.mobile}</td>
              <td>{s.dept}</td>
              <td><span className={`badge ${s.isActive ? 'active' : 'inactive'}`}>{s.isActive ? 'Active' : 'Inactive'}</span></td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(s); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => setStudents(students.filter(x => x.id !== s.id))}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default ManageStudents;

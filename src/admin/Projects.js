import { useState } from 'react';

// SPM_ProjectMaster + SPM_ProjectAllocation
const allStudents = ['Arjun Sharma', 'Priya Patel', 'Rohan Verma', 'Sneha Iyer', 'Vikram Nair', 'Kavya Reddy'];
const allFaculty  = ['Dr. Rajesh Kumar', 'Dr. Anita Desai', 'Prof. Suresh Menon', 'Prof. Deepak Rao'];

const initialProjects = [
  {
    id: 1, title: 'AI Chatbot', desc: 'Build an AI-powered chatbot for student queries.',
    start: '2024-09-01', end: '2025-03-01',
    faculty: 'Dr. Rajesh Kumar', students: ['Arjun Sharma'],
    totalTasks: 8, completedTasks: 5, progress: 62.50, grade: ''
  },
  {
    id: 2, title: 'E-Commerce Platform', desc: 'Full-stack e-commerce web application.',
    start: '2024-08-15', end: '2025-02-15',
    faculty: 'Dr. Anita Desai', students: ['Priya Patel', 'Rohan Verma'],
    totalTasks: 10, completedTasks: 10, progress: 100.00, grade: 'A'
  },
  {
    id: 3, title: 'Inventory System', desc: 'Inventory management with barcode scanning.',
    start: '2025-01-01', end: '2025-06-30',
    faculty: 'Prof. Suresh Menon', students: ['Sneha Iyer'],
    totalTasks: 6, completedTasks: 2, progress: 33.33, grade: ''
  },
  {
    id: 4, title: 'IoT Weather Station', desc: 'IoT-based weather monitoring station.',
    start: '2025-03-01', end: '2025-09-01',
    faculty: 'Prof. Deepak Rao', students: ['Vikram Nair', 'Kavya Reddy'],
    totalTasks: 5, completedTasks: 0, progress: 0.00, grade: ''
  },
];

function ProjectForm({ project, onSave, onBack }) {
  const empty = {
    title: '', desc: '', start: '', end: '',
    faculty: '', students: [],
    totalTasks: 0, completedTasks: 0, progress: 0, grade: ''
  };
  const [form, setForm] = useState(project || empty);
  const ch = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="content-header">
        <h2>{project ? 'Edit Project' : 'Add Project'}</h2>
        <p>Home / Projects / {project ? 'Edit' : 'Add'}</p>
      </div>
      <div className="form-card">
        <div className="form-card-title">Project Details</div>
        <div className="form-row">
          <label>Project Title</label>
          <input className="form-input" value={form.title} onChange={e => ch('title', e.target.value)} placeholder="Enter project title" />
        </div>
        <div className="form-row">
          <label>Description</label>
          <textarea className="form-textarea" value={form.desc} onChange={e => ch('desc', e.target.value)} placeholder="Enter description" />
        </div>
        <div className="form-row">
          <label>Start Date</label>
          <input className="form-input" type="date" value={form.start} onChange={e => ch('start', e.target.value)} />
        </div>
        <div className="form-row">
          <label>End Date</label>
          <input className="form-input" type="date" value={form.end} onChange={e => ch('end', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Supervising Faculty</label>
          <select className="form-select" value={form.faculty} onChange={e => ch('faculty', e.target.value)}>
            <option value="">-- Select Faculty --</option>
            {allFaculty.map(f => <option key={f}>{f}</option>)}
          </select>
        </div>
        <div className="form-row">
          <label>Assigned Students</label>
          <div>
            <select
              className="form-multiselect"
              multiple
              value={form.students}
              onChange={e => ch('students', Array.from(e.target.selectedOptions, o => o.value))}
            >
              {allStudents.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <div className="form-hint">Hold Ctrl / Cmd to select multiple students.</div>
          </div>
        </div>

        <div className="form-card-title" style={{ marginTop: 20 }}>Allocation Details</div>
        <div className="form-row">
          <label>Total Tasks Given</label>
          <input className="form-input" type="number" value={form.totalTasks} onChange={e => ch('totalTasks', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Completed Tasks</label>
          <input className="form-input" type="number" value={form.completedTasks} onChange={e => ch('completedTasks', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Progress (%)</label>
          <input className="form-input" type="number" step="0.01" value={form.progress} onChange={e => ch('progress', e.target.value)} placeholder="Auto-calculated" />
        </div>
        <div className="form-row">
          <label>Overall Grade</label>
          <select className="form-select" value={form.grade} onChange={e => ch('grade', e.target.value)}>
            <option value="">-- Assign at end of semester --</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
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

function ProgressBar({ value }) {
  const pct = Math.min(100, Math.max(0, parseFloat(value) || 0));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, height: 6, background: '#e2e8f0', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: pct === 100 ? '#22c55e' : '#3b82f6', borderRadius: 4 }} />
      </div>
      <span style={{ fontSize: 12, color: '#64748b', minWidth: 36 }}>{pct.toFixed(0)}%</span>
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.faculty.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (form) => {
    if (editing) {
      setProjects(projects.map(p => p.id === editing.id ? { ...form, id: p.id } : p));
    } else {
      setProjects([...projects, { ...form, id: Date.now() }]);
    }
    setView('list'); setEditing(null);
  };

  if (view === 'form') {
    return <ProjectForm project={editing} onSave={handleSave} onBack={() => { setView('list'); setEditing(null); }} />;
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Projects</h2>
          <p className="page-sub">Manage all student project allocations.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ Add Project</button>
      </div>

      <div className="filter-bar">
        <input className="filter-input" placeholder="Search by title or faculty..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Title</th>
            <th>Faculty</th>
            <th>Students</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Tasks</th>
            <th>Progress</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>
                <div style={{ fontWeight: 600, color: '#1e3a5f' }}>{p.title}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: 2 }}>{p.desc}</div>
              </td>
              <td style={{ fontSize: '13px' }}>{p.faculty}</td>
              <td style={{ fontSize: '12.5px', color: '#64748b' }}>{p.students.join(', ')}</td>
              <td style={{ fontSize: '13px' }}>{p.start}</td>
              <td style={{ fontSize: '13px' }}>{p.end}</td>
              <td style={{ fontSize: '13px', textAlign: 'center' }}>
                {p.completedTasks}/{p.totalTasks}
              </td>
              <td style={{ minWidth: 120 }}>
                <ProgressBar value={p.progress} />
              </td>
              <td>
                {p.grade
                  ? <span className="badge active">{p.grade}</span>
                  : <span style={{ fontSize: '12px', color: '#94a3b8' }}>—</span>
                }
              </td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(p); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => setProjects(projects.filter(x => x.id !== p.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default Projects;

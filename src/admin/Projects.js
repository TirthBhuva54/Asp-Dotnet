import { useState } from 'react';

function ProjectForm({ project, students, faculty, onSave, onBack }) {
  const empty = { projectTitle: '', description: '', allocations: [] };
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
          <input className="form-input" value={form.projectTitle} onChange={e => ch('projectTitle', e.target.value)} placeholder="Enter project title" />
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
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');

  // TODO: fetch from GET /api/projects

  const filtered = projects.filter(p =>
    p.projectTitle.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (form) => {
    // TODO: POST /api/projects or PUT /api/projects/{id}
    setView('list'); setEditing(null);
  };

  const handleDelete = (id) => {
    // TODO: DELETE /api/projects/{id}
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
        <input className="filter-input" placeholder="Search by title..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Project Title</th><th>Description</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filtered.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600, color: '#1e3a5f' }}>{p.projectTitle}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{p.description}</td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(p); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => handleDelete(p.id)}>Delete</button>
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

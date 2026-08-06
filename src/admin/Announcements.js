import { useState } from 'react';

const badgeLabel = { all: 'All', students: 'Students', supervisors: 'Faculty' };

function AnnForm({ ann, onSave, onBack }) {
  const [form, setForm] = useState(ann || { title: '', target: 'all', body: '' });
  const ch = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="content-header">
        <h2>{ann ? 'Edit Announcement' : 'New Announcement'}</h2>
        <p>Home / Announcements / {ann ? 'Edit' : 'New'}</p>
      </div>
      <div className="form-card">
        <div className="form-card-title">Announcement Details</div>
        <div className="form-row">
          <label>Title</label>
          <input className="form-input" value={form.title} onChange={e => ch('title', e.target.value)} placeholder="Enter announcement title" />
        </div>
        <div className="form-row">
          <label>Audience</label>
          <select className="form-select" value={form.target} onChange={e => ch('target', e.target.value)}>
            <option value="all">All</option>
            <option value="students">Students</option>
            <option value="supervisors">Faculty</option>
          </select>
        </div>
        <div className="form-row">
          <label>Message</label>
          <textarea className="form-textarea" value={form.body} onChange={e => ch('body', e.target.value)} placeholder="Enter message" />
        </div>
        <div className="form-actions">
          <button className="btn-save" onClick={() => onSave(form)}>✓ Save</button>
          <button className="btn-back" onClick={onBack}>← Back</button>
        </div>
      </div>
    </div>
  );
}

function Announcements() {
  const [anns, setAnns] = useState([]);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);

  // TODO: fetch from GET /api/announcements

  const handleSave = (form) => {
    // TODO: POST /api/announcements or PUT /api/announcements/{id}
    setView('list'); setEditing(null);
  };

  const handleDelete = (id) => {
    // TODO: DELETE /api/announcements/{id}
  };

  if (view === 'form') {
    return <AnnForm ann={editing} onSave={handleSave} onBack={() => { setView('list'); setEditing(null); }} />;
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Announcements</h2>
          <p className="page-sub">Post notices to students and faculty.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ New Announcement</button>
      </div>
      <div className="ann-list">
        {anns.map(a => (
          <div className="ann-card" key={a.id}>
            <div className="ann-top">
              <span className={`ann-badge ${a.target}`}>{badgeLabel[a.target] || a.target}</span>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span className="ann-date">{a.postedOn?.slice(0, 10)}</span>
                <button className="act-btn view" style={{ margin: 0 }} onClick={() => { setEditing(a); setView('form'); }}>Edit</button>
                <button className="act-btn delete" style={{ margin: 0 }} onClick={() => handleDelete(a.id)}>Delete</button>
              </div>
            </div>
            <h4>{a.title}</h4>
            <p>{a.body}</p>
          </div>
        ))}
      </div>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default Announcements;

import { useState } from 'react';

const initialAnn = [
  { id: 1, badge: 'all',         title: 'Final Project Submission Deadline',  date: '10 Jul 2026', body: 'All students must submit their final project report by 31st July 2026. Late submissions will not be accepted.' },
  { id: 2, badge: 'students',    title: 'Project Presentation Schedule',       date: '7 Jul 2026',  body: 'Presentations will be held from 1st August to 5th August. Check the notice board for your assigned slot.' },
  { id: 3, badge: 'supervisors', title: 'Faculty Evaluation Form',             date: '3 Jul 2026',  body: 'Please complete the mid-term evaluation forms for your assigned students before 15th July 2026.' },
  { id: 4, badge: 'all',         title: 'System Maintenance Notice',           date: '1 Jul 2026',  body: 'SPMS will be under scheduled maintenance on 12th July from 12 AM to 4 AM. Please save your work beforehand.' },
];

const badgeLabel = { all: 'All', students: 'Students', supervisors: 'Faculty' };

function AnnForm({ ann, onSave, onBack }) {
  const [form, setForm] = useState(ann || { title: '', badge: 'all', body: '', date: '' });
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
          <select className="form-select" value={form.badge} onChange={e => ch('badge', e.target.value)}>
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
  const [anns, setAnns] = useState(initialAnn);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);

  const handleSave = (form) => {
    const now = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    if (editing) {
      setAnns(anns.map(a => a.id === editing.id ? { ...form, id: a.id, date: a.date } : a));
    } else {
      setAnns([{ ...form, id: Date.now(), date: now }, ...anns]);
    }
    setView('list'); setEditing(null);
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
              <span className={`ann-badge ${a.badge}`}>{badgeLabel[a.badge]}</span>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span className="ann-date">{a.date}</span>
                <button className="act-btn view" style={{ margin: 0 }} onClick={() => { setEditing(a); setView('form'); }}>Edit</button>
                <button className="act-btn delete" style={{ margin: 0 }} onClick={() => setAnns(anns.filter(x => x.id !== a.id))}>Delete</button>
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

import { useState } from 'react';

function TaskForm({ task, onSave, onBack }) {
  const empty = {
    taskTitle: '', taskDescription: '', taskStatusId: '', taskPriorityId: '',
    assignedScore: '', earnedScore: '', progressPercentage: 0,
    taskAssignedDate: '', taskStartDate: '', taskDueDate: '',
    taskCompletedDate: '', nextFollowUpDate: '', facultyRemarks: '', studentRemarks: ''
  };
  const [form, setForm] = useState(task || empty);
  const ch = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="content-header">
        <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
        <p>Home / Tasks / {task ? 'Edit' : 'Add'}</p>
      </div>
      <div className="form-card" style={{ maxWidth: 820 }}>
        <div className="form-card-title">Task Details</div>
        <div className="form-row">
          <label>Task Title</label>
          <input className="form-input" value={form.taskTitle} onChange={e => ch('taskTitle', e.target.value)} placeholder="Enter task title" />
        </div>
        <div className="form-row">
          <label>Description</label>
          <textarea className="form-textarea" value={form.taskDescription || ''} onChange={e => ch('taskDescription', e.target.value)} placeholder="Enter description" />
        </div>
        <div className="form-card-title" style={{ marginTop: 20 }}>Dates</div>
        <div className="form-row">
          <label>Assigned Date</label>
          <input className="form-input" type="date" value={form.taskAssignedDate || ''} onChange={e => ch('taskAssignedDate', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Start Date</label>
          <input className="form-input" type="date" value={form.taskStartDate || ''} onChange={e => ch('taskStartDate', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Due Date</label>
          <input className="form-input" type="date" value={form.taskDueDate || ''} onChange={e => ch('taskDueDate', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Completed Date</label>
          <input className="form-input" type="date" value={form.taskCompletedDate || ''} onChange={e => ch('taskCompletedDate', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Next Follow-Up Date</label>
          <input className="form-input" type="date" value={form.nextFollowUpDate || ''} onChange={e => ch('nextFollowUpDate', e.target.value)} />
        </div>
        <div className="form-card-title" style={{ marginTop: 20 }}>Scores & Remarks</div>
        <div className="form-row">
          <label>Assigned Score</label>
          <input className="form-input" type="number" step="0.01" value={form.assignedScore} onChange={e => ch('assignedScore', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Earned Score</label>
          <input className="form-input" type="number" step="0.01" value={form.earnedScore || ''} onChange={e => ch('earnedScore', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Progress (%)</label>
          <input className="form-input" type="number" step="0.01" value={form.progressPercentage} onChange={e => ch('progressPercentage', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Faculty Remarks</label>
          <textarea className="form-textarea" value={form.facultyRemarks || ''} onChange={e => ch('facultyRemarks', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Student Remarks</label>
          <textarea className="form-textarea" value={form.studentRemarks || ''} onChange={e => ch('studentRemarks', e.target.value)} />
        </div>
        <div className="form-actions">
          <button className="btn-save" onClick={() => onSave(form)}>Save</button>
          <button className="btn-back" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

function priorityClass(p) {
  if (p === 'Critical') return 'critical';
  if (p === 'Moderate') return 'moderate';
  return 'low';
}

function statusClass(s) {
  if (s === 'Ongoing')   return 'ongoing';
  if (s === 'Completed') return 'completed';
  if (s === 'Cancelled') return 'cancelled';
  return 'pending';
}

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // TODO: fetch from GET /api/tasks

  const filtered = tasks.filter(t => {
    const ms  = t.taskTitle.toLowerCase().includes(search.toLowerCase());
    const mp  = priorityFilter === 'All' || t.taskPriorityName === priorityFilter;
    const mst = statusFilter   === 'All' || t.taskStatusName   === statusFilter;
    return ms && mp && mst;
  });

  const handleSave = (form) => {
    // TODO: POST /api/tasks or PUT /api/tasks/{id}
    setView('list'); setEditing(null);
  };

  const handleDelete = (id) => {
    // TODO: DELETE /api/tasks/{id}
  };

  if (view === 'form') {
    return <TaskForm task={editing} onSave={handleSave} onBack={() => { setView('list'); setEditing(null); }} />;
  }

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Tasks</h2>
          <p className="page-sub">All assigned tasks across projects.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ Add Task</button>
      </div>
      <div className="filter-bar">
        <input className="filter-input" placeholder="Search tasks..." value={search} onChange={e => setSearch(e.target.value)} />
        <select className="filter-select" value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
          <option>All</option><option>Critical</option><option>Moderate</option><option>Low</option>
        </select>
        <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>All</option><option>Pending</option><option>Ongoing</option><option>Completed</option><option>Cancelled</option>
        </select>
      </div>
      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Task Title</th><th>Student</th><th>Project</th><th>Priority</th><th>Status</th><th>Due Date</th><th>Score</th><th>Progress</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filtered.map((t, i) => (
            <tr key={t.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600, color: '#1e3a5f' }}>{t.taskTitle}</td>
              <td style={{ fontSize: '13px' }}>{t.studentName}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{t.projectTitle}</td>
              <td><span className={`badge ${priorityClass(t.taskPriorityName)}`}>{t.taskPriorityName}</span></td>
              <td><span className={`badge ${statusClass(t.taskStatusName)}`}>{t.taskStatusName}</span></td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{t.taskDueDate?.slice(0, 10)}</td>
              <td style={{ fontSize: '13px' }}>{t.earnedScore != null ? `${t.earnedScore}/${t.assignedScore}` : `—/${t.assignedScore}`}</td>
              <td style={{ minWidth: 90 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ flex: 1, height: 5, background: '#e2e8f0', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${t.progressPercentage}%`, height: '100%', background: t.progressPercentage === 100 ? '#22c55e' : '#3b82f6', borderRadius: 4 }} />
                  </div>
                  <span style={{ fontSize: 11, color: '#64748b' }}>{t.progressPercentage}%</span>
                </div>
              </td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(t); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => handleDelete(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default Tasks;

import { useState } from 'react';

// SPM_Task - status: Ongoing, Cancelled, Completed, Pending
// SPM_TaskPriority: Critical, Moderate, Low
const projectList = ['AI Chatbot', 'E-Commerce Platform', 'Inventory System', 'IoT Weather Station'];
const studentList = ['Arjun Sharma', 'Priya Patel', 'Rohan Verma', 'Sneha Iyer', 'Vikram Nair'];

const initialTasks = [
  {
    id: 1, title: 'Design Database Schema', project: 'E-Commerce Platform',
    priority: 'Critical', status: 'Completed', assigned: 'Rohan Verma',
    assignedDate: '2024-09-01', startDate: '2024-09-03', dueDate: '2024-09-15', completedDate: '2024-09-14',
    nextFollowUp: '', assignedScore: 10, earnedScore: 9, progress: 100,
    facultyRemarks: 'Well done on the schema.', studentRemarks: 'Completed on time.'
  },
  {
    id: 2, title: 'Setup Project Structure', project: 'E-Commerce Platform',
    priority: 'Moderate', status: 'Ongoing', assigned: 'Rohan Verma',
    assignedDate: '2024-09-15', startDate: '2024-09-16', dueDate: '2024-09-20', completedDate: '',
    nextFollowUp: '2024-09-18', assignedScore: 10, earnedScore: null, progress: 60,
    facultyRemarks: '', studentRemarks: 'In progress.'
  },
  {
    id: 3, title: 'Implement User Authentication', project: 'E-Commerce Platform',
    priority: 'Critical', status: 'Pending', assigned: 'Priya Patel',
    assignedDate: '2024-09-20', startDate: '', dueDate: '2024-10-01', completedDate: '',
    nextFollowUp: '2024-09-25', assignedScore: 15, earnedScore: null, progress: 0,
    facultyRemarks: 'Must use JWT.', studentRemarks: ''
  },
  {
    id: 4, title: 'Create Book Catalog Module', project: 'Inventory System',
    priority: 'Moderate', status: 'Completed', assigned: 'Sneha Iyer',
    assignedDate: '2024-10-01', startDate: '2024-10-02', dueDate: '2024-10-15', completedDate: '2024-10-13',
    nextFollowUp: '', assignedScore: 10, earnedScore: 10, progress: 100,
    facultyRemarks: 'Excellent work.', studentRemarks: ''
  },
  {
    id: 5, title: 'Train NLP Model', project: 'AI Chatbot',
    priority: 'Critical', status: 'Ongoing', assigned: 'Arjun Sharma',
    assignedDate: '2025-01-10', startDate: '2025-01-12', dueDate: '2025-03-01', completedDate: '',
    nextFollowUp: '2025-02-01', assignedScore: 20, earnedScore: null, progress: 45,
    facultyRemarks: 'Focus on accuracy.', studentRemarks: 'Model training in progress.'
  },
];

function TaskForm({ task, onSave, onBack }) {
  const empty = {
    title: '', project: '', priority: 'Moderate', status: 'Pending', assigned: '',
    assignedDate: '', startDate: '', dueDate: '', completedDate: '', nextFollowUp: '',
    assignedScore: '', earnedScore: '', progress: 0,
    facultyRemarks: '', studentRemarks: '', desc: ''
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
          <input className="form-input" value={form.title} onChange={e => ch('title', e.target.value)} placeholder="Enter task title" />
        </div>
        <div className="form-row">
          <label>Description</label>
          <textarea className="form-textarea" value={form.desc || ''} onChange={e => ch('desc', e.target.value)} placeholder="Enter description" />
        </div>
        <div className="form-row">
          <label>Project</label>
          <select className="form-select" value={form.project} onChange={e => ch('project', e.target.value)}>
            <option value="">-- Select Project --</option>
            {projectList.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="form-row">
          <label>Assigned To</label>
          <select className="form-select" value={form.assigned || ''} onChange={e => ch('assigned', e.target.value)}>
            <option value="">-- Select Student --</option>
            {studentList.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-row">
          <label>Priority</label>
          <select className="form-select" value={form.priority} onChange={e => ch('priority', e.target.value)}>
            <option>Critical</option>
            <option>Moderate</option>
            <option>Low</option>
          </select>
        </div>
        <div className="form-row">
          <label>Status</label>
          <select className="form-select" value={form.status} onChange={e => ch('status', e.target.value)}>
            <option>Pending</option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div className="form-card-title" style={{ marginTop: 20 }}>Dates</div>
        <div className="form-row">
          <label>Assigned Date</label>
          <input className="form-input" type="date" value={form.assignedDate} onChange={e => ch('assignedDate', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Start Date</label>
          <input className="form-input" type="date" value={form.startDate} onChange={e => ch('startDate', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Due Date</label>
          <input className="form-input" type="date" value={form.dueDate} onChange={e => ch('dueDate', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Completed Date</label>
          <input className="form-input" type="date" value={form.completedDate} onChange={e => ch('completedDate', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Next Follow-Up Date</label>
          <input className="form-input" type="date" value={form.nextFollowUp} onChange={e => ch('nextFollowUp', e.target.value)} />
        </div>

        <div className="form-card-title" style={{ marginTop: 20 }}>Scores & Remarks</div>
        <div className="form-row">
          <label>Assigned Score</label>
          <input className="form-input" type="number" step="0.01" value={form.assignedScore} onChange={e => ch('assignedScore', e.target.value)} placeholder="Faculty-defined score" />
        </div>
        <div className="form-row">
          <label>Earned Score</label>
          <input className="form-input" type="number" step="0.01" value={form.earnedScore || ''} onChange={e => ch('earnedScore', e.target.value)} placeholder="Obtained score" />
        </div>
        <div className="form-row">
          <label>Progress (%)</label>
          <input className="form-input" type="number" step="0.01" value={form.progress} onChange={e => ch('progress', e.target.value)} />
        </div>
        <div className="form-row">
          <label>Faculty Remarks</label>
          <textarea className="form-textarea" value={form.facultyRemarks} onChange={e => ch('facultyRemarks', e.target.value)} placeholder="Enter faculty remarks" />
        </div>
        <div className="form-row">
          <label>Student Remarks</label>
          <textarea className="form-textarea" value={form.studentRemarks} onChange={e => ch('studentRemarks', e.target.value)} placeholder="Enter student remarks" />
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
  const [tasks, setTasks] = useState(initialTasks);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = tasks.filter(t => {
    const ms  = t.title.toLowerCase().includes(search.toLowerCase());
    const mp  = priorityFilter === 'All' || t.priority === priorityFilter;
    const mst = statusFilter   === 'All' || t.status   === statusFilter;
    return ms && mp && mst;
  });

  const handleSave = (form) => {
    if (editing) {
      setTasks(tasks.map(t => t.id === editing.id ? { ...form, id: t.id } : t));
    } else {
      setTasks([...tasks, { ...form, id: Date.now() }]);
    }
    setView('list'); setEditing(null);
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
          <option>All</option>
          <option>Critical</option>
          <option>Moderate</option>
          <option>Low</option>
        </select>
        <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Pending</option>
          <option>Ongoing</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Title</th>
            <th>Project</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Score</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((t, i) => (
            <tr key={t.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600, color: '#1e3a5f' }}>{t.title}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{t.project}</td>
              <td><span className={`badge ${priorityClass(t.priority)}`}>{t.priority}</span></td>
              <td><span className={`badge ${statusClass(t.status)}`}>{t.status}</span></td>
              <td style={{ fontSize: '13px' }}>{t.assigned}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{t.dueDate}</td>
              <td style={{ fontSize: '13px' }}>
                {t.earnedScore != null ? `${t.earnedScore}/${t.assignedScore}` : `—/${t.assignedScore}`}
              </td>
              <td style={{ minWidth: 90 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ flex: 1, height: 5, background: '#e2e8f0', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${t.progress}%`, height: '100%', background: t.progress === 100 ? '#22c55e' : '#3b82f6', borderRadius: 4 }} />
                  </div>
                  <span style={{ fontSize: 11, color: '#64748b' }}>{t.progress}%</span>
                </div>
              </td>
              <td>
                <button className="act-btn view" onClick={() => { setEditing(t); setView('form'); }}>Edit</button>
                <button className="act-btn delete" onClick={() => setTasks(tasks.filter(x => x.id !== t.id))}>Delete</button>
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

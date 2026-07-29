import { useState } from 'react';

// Faculty CAN: create tasks, assign scores, add faculty remarks, update status
// Faculty CANNOT: change StudentRemarks (student does that), delete allocations

const projectAllocations = [
  { id: 1, label: 'AI Chatbot — Arjun Sharma',         studentName: 'Arjun Sharma'  },
  { id: 2, label: 'Inventory System — Rohan Verma',    studentName: 'Rohan Verma'   },
  { id: 3, label: 'E-Commerce Platform — Priya Patel', studentName: 'Priya Patel'   },
  { id: 4, label: 'Hospital App — Sneha Iyer',         studentName: 'Sneha Iyer'    },
  { id: 5, label: 'IoT Weather Station — Vikram Nair', studentName: 'Vikram Nair'   },
];

const initialTasks = [
  {
    id: 1, allocationId: 1, title: 'Design Database Schema', desc: 'Design the DB schema for chatbot.',
    priority: 'Critical', status: 'Completed', studentName: 'Arjun Sharma',
    assignedDate: '2024-09-01', startDate: '2024-09-03', dueDate: '2024-09-15', completedDate: '2024-09-14',
    nextFollowUp: '', assignedScore: 10, earnedScore: 9, progress: 100,
    facultyRemarks: 'Well done.', studentRemarks: 'Completed on time.',
  },
  {
    id: 2, allocationId: 1, title: 'Train NLP Model', desc: 'Train model on provided dataset.',
    priority: 'Critical', status: 'Ongoing', studentName: 'Arjun Sharma',
    assignedDate: '2025-01-10', startDate: '2025-01-12', dueDate: '2025-03-01', completedDate: '',
    nextFollowUp: '2025-02-01', assignedScore: 20, earnedScore: null, progress: 45,
    facultyRemarks: 'Focus on accuracy.', studentRemarks: 'Training in progress.',
  },
  {
    id: 3, allocationId: 2, title: 'Create Inventory Module', desc: 'Barcode scanning and inventory tracking.',
    priority: 'Moderate', status: 'Pending', studentName: 'Rohan Verma',
    assignedDate: '2025-01-15', startDate: '', dueDate: '2025-02-15', completedDate: '',
    nextFollowUp: '2025-01-25', assignedScore: 15, earnedScore: null, progress: 0,
    facultyRemarks: '', studentRemarks: '',
  },
];

function TaskForm({ task, onSave, onBack }) {
  const empty = {
    allocationId: '', title: '', desc: '', priority: 'Moderate', status: 'Pending',
    assignedDate: '', startDate: '', dueDate: '', completedDate: '', nextFollowUp: '',
    assignedScore: '', earnedScore: '', progress: 0, facultyRemarks: '', studentRemarks: '',
  };
  const [form, setForm] = useState(task || empty);
  const ch = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const alloc = projectAllocations.find(a => a.id === parseInt(form.allocationId));

  return (
    <div>
      <div className="content-header">
        <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
        <p>Home / Manage Tasks / {task ? 'Edit' : 'Add'}</p>
      </div>
      <div className="form-card" style={{ maxWidth: 820 }}>
        <div className="form-card-title">Task Details</div>
        <div className="form-row">
          <label>Project / Student</label>
          <select className="form-select" value={form.allocationId} onChange={e => ch('allocationId', e.target.value)}>
            <option value="">-- Select Allocation --</option>
            {projectAllocations.map(a => <option key={a.id} value={a.id}>{a.label}</option>)}
          </select>
        </div>
        <div className="form-row">
          <label>Task Title</label>
          <input className="form-input" value={form.title} onChange={e => ch('title', e.target.value)} placeholder="Enter task title" />
        </div>
        <div className="form-row">
          <label>Description</label>
          <textarea className="form-textarea" value={form.desc} onChange={e => ch('desc', e.target.value)} placeholder="Enter description" />
        </div>
        <div className="form-row">
          <label>Priority</label>
          <select className="form-select" value={form.priority} onChange={e => ch('priority', e.target.value)}>
            <option>Critical</option><option>Moderate</option><option>Low</option>
          </select>
        </div>
        <div className="form-row">
          <label>Status</label>
          <select className="form-select" value={form.status} onChange={e => ch('status', e.target.value)}>
            <option>Pending</option><option>Ongoing</option><option>Completed</option><option>Cancelled</option>
          </select>
        </div>

        <div className="form-card-title" style={{ marginTop: 20 }}>Dates</div>
        <div className="form-row"><label>Assigned Date</label><input className="form-input" type="date" value={form.assignedDate} onChange={e => ch('assignedDate', e.target.value)} /></div>
        <div className="form-row"><label>Start Date</label><input className="form-input" type="date" value={form.startDate} onChange={e => ch('startDate', e.target.value)} /></div>
        <div className="form-row"><label>Due Date</label><input className="form-input" type="date" value={form.dueDate} onChange={e => ch('dueDate', e.target.value)} /></div>
        <div className="form-row"><label>Completed Date</label><input className="form-input" type="date" value={form.completedDate} onChange={e => ch('completedDate', e.target.value)} /></div>
        <div className="form-row"><label>Next Follow-Up</label><input className="form-input" type="date" value={form.nextFollowUp} onChange={e => ch('nextFollowUp', e.target.value)} /></div>

        <div className="form-card-title" style={{ marginTop: 20 }}>Scores & Remarks</div>
        <div className="form-row"><label>Assigned Score</label><input className="form-input" type="number" step="0.01" value={form.assignedScore} onChange={e => ch('assignedScore', e.target.value)} placeholder="Faculty-defined score" /></div>
        <div className="form-row"><label>Earned Score</label><input className="form-input" type="number" step="0.01" value={form.earnedScore || ''} onChange={e => ch('earnedScore', e.target.value)} placeholder="Obtained score" /></div>
        <div className="form-row"><label>Progress (%)</label><input className="form-input" type="number" step="0.01" value={form.progress} onChange={e => ch('progress', e.target.value)} /></div>
        <div className="form-row"><label>Faculty Remarks</label><textarea className="form-textarea" value={form.facultyRemarks} onChange={e => ch('facultyRemarks', e.target.value)} placeholder="Enter your remarks" /></div>
        <div className="form-row">
          <label>Student Remarks</label>
          {/* Faculty can VIEW student remarks but NOT edit them */}
          <input className="form-input" value={form.studentRemarks || ''} readOnly style={{ background:'#f8fafc', color:'#64748b' }} />
        </div>

        <div className="form-actions">
          <button className="btn-save" onClick={() => {
            const alloc = projectAllocations.find(a => a.id === parseInt(form.allocationId));
            onSave({ ...form, studentName: alloc ? alloc.studentName : form.studentName });
          }}>Save</button>
          <button className="btn-back" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

function priorityClass(p) { return p === 'Critical' ? 'critical' : p === 'Moderate' ? 'moderate' : 'low'; }
function statusClass(s)   { return s === 'Ongoing' ? 'ongoing' : s === 'Completed' ? 'completed' : s === 'Cancelled' ? 'cancelled' : 'pending'; }

function ManageTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const filtered = tasks.filter(t => {
    const ms  = t.title.toLowerCase().includes(search.toLowerCase()) || t.studentName.toLowerCase().includes(search.toLowerCase());
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
          <p className="page-sub">Assign and manage tasks for your students.</p>
        </div>
        <button className="add-btn" onClick={() => { setEditing(null); setView('form'); }}>+ Add Task</button>
      </div>

      <div className="filter-bar">
        <input className="filter-input" placeholder="Search by task or student..." value={search} onChange={e => setSearch(e.target.value)} />
        <select className="filter-select" value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
          <option>All</option><option>Critical</option><option>Moderate</option><option>Low</option>
        </select>
        <select className="filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>All</option><option>Pending</option><option>Ongoing</option><option>Completed</option><option>Cancelled</option>
        </select>
      </div>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Task Title</th><th>Student</th><th>Priority</th><th>Status</th><th>Due Date</th><th>Score</th><th>Progress</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {filtered.map((t, i) => (
            <tr key={t.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight:600, color:'#1e3a5f' }}>{t.title}</td>
              <td style={{ fontSize:'13px' }}>{t.studentName}</td>
              <td><span className={`badge ${priorityClass(t.priority)}`}>{t.priority}</span></td>
              <td><span className={`badge ${statusClass(t.status)}`}>{t.status}</span></td>
              <td style={{ fontSize:'13px', color:'#64748b' }}>{t.dueDate || '—'}</td>
              <td style={{ fontSize:'13px' }}>{t.earnedScore != null ? `${t.earnedScore}/${t.assignedScore}` : `—/${t.assignedScore}`}</td>
              <td style={{ minWidth:90 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <div style={{ flex:1, height:5, background:'#e2e8f0', borderRadius:4, overflow:'hidden' }}>
                    <div style={{ width:`${t.progress}%`, height:'100%', background: t.progress===100 ? '#22c55e' : '#3b82f6', borderRadius:4 }} />
                  </div>
                  <span style={{ fontSize:11, color:'#64748b' }}>{t.progress}%</span>
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
      <div className="faculty-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default ManageTasks;

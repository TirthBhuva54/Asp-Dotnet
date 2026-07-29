import { useState } from 'react';

// Student view of SPM_Task
// Student CAN: view all task details, add/update their own StudentRemarks
// Student CANNOT: change title, priority, status, scores, faculty remarks, dates

const myTasks = [
  { id: 1, title: 'Design UI Wireframes',         desc: 'Create wireframes for all major screens.', priority: 'Moderate', status: 'Completed', assignedDate: '2024-09-05', startDate: '2024-09-06', dueDate: '2024-09-15', completedDate: '2024-09-14', nextFollowUp: '',         assignedScore: 10, earnedScore: 9,    progress: 100, facultyRemarks: 'Good work.',           studentRemarks: 'Completed as required.' },
  { id: 2, title: 'Train NLP Model',              desc: 'Train model on provided dataset.',          priority: 'Critical', status: 'Ongoing',   assignedDate: '2025-01-10', startDate: '2025-01-12', dueDate: '2025-03-01', completedDate: '',           nextFollowUp: '2025-02-01', assignedScore: 20, earnedScore: null, progress: 45,  facultyRemarks: 'Focus on accuracy.',   studentRemarks: 'Training in progress.' },
  { id: 3, title: 'Implement User Authentication', desc: 'JWT-based login and session management.',  priority: 'Critical', status: 'Pending',   assignedDate: '2024-09-20', startDate: '',           dueDate: '2024-10-01', completedDate: '',           nextFollowUp: '2024-09-25', assignedScore: 15, earnedScore: null, progress: 0,   facultyRemarks: 'Must use JWT.',        studentRemarks: '' },
  { id: 4, title: 'Testing & QA',                 desc: 'Unit tests on all modules.',                priority: 'Low',      status: 'Pending',   assignedDate: '2025-02-01', startDate: '',           dueDate: '2025-02-28', completedDate: '',           nextFollowUp: '',           assignedScore: 10, earnedScore: null, progress: 0,   facultyRemarks: '',                     studentRemarks: '' },
  { id: 5, title: 'Final Documentation',          desc: 'Complete project documentation.',           priority: 'Moderate', status: 'Pending',   assignedDate: '2025-02-15', startDate: '',           dueDate: '2025-03-01', completedDate: '',           nextFollowUp: '',           assignedScore: 10, earnedScore: null, progress: 0,   facultyRemarks: '',                     studentRemarks: '' },
];

function priorityClass(p) { return p === 'Critical' ? 'critical' : p === 'Moderate' ? 'moderate' : 'low'; }
function statusClass(s)   { return s === 'Ongoing' ? 'ongoing' : s === 'Completed' ? 'completed' : s === 'Cancelled' ? 'cancelled' : 'pending'; }

function TaskDetail({ task, onBack, onSaveRemark }) {
  const [remark, setRemark] = useState(task.studentRemarks);

  return (
    <div>
      <div className="content-header">
        <h2>Task Detail</h2>
        <p>Home / My Tasks / {task.title}</p>
      </div>

      <div className="info-card">
        <div className="info-card-title">Task Details — Read Only</div>
        <div className="info-row"><span className="info-label">Task Title</span><span className="info-value" style={{ fontWeight:600 }}>{task.title}</span></div>
        <div className="info-row"><span className="info-label">Description</span><span className="info-value">{task.desc}</span></div>
        <div className="info-row"><span className="info-label">Priority</span><span className="info-value"><span className={`badge ${priorityClass(task.priority)}`}>{task.priority}</span></span></div>
        <div className="info-row"><span className="info-label">Status</span><span className="info-value"><span className={`badge ${statusClass(task.status)}`}>{task.status}</span></span></div>
      </div>

      <div className="info-card">
        <div className="info-card-title">Dates — Read Only</div>
        <div className="info-row"><span className="info-label">Assigned Date</span><span className="info-value">{task.assignedDate || '—'}</span></div>
        <div className="info-row"><span className="info-label">Start Date</span><span className="info-value">{task.startDate || '—'}</span></div>
        <div className="info-row"><span className="info-label">Due Date</span><span className="info-value">{task.dueDate || '—'}</span></div>
        <div className="info-row"><span className="info-label">Completed Date</span><span className="info-value">{task.completedDate || '—'}</span></div>
        <div className="info-row"><span className="info-label">Next Follow-Up</span><span className="info-value">{task.nextFollowUp || '—'}</span></div>
      </div>

      <div className="info-card">
        <div className="info-card-title">Scores & Remarks</div>
        <div className="info-row"><span className="info-label">Assigned Score</span><span className="info-value">{task.assignedScore}</span></div>
        <div className="info-row"><span className="info-label">Earned Score</span><span className="info-value">{task.earnedScore != null ? task.earnedScore : '—'}</span></div>
        <div className="info-row">
          <span className="info-label">Progress</span>
          <span className="info-value">
            <div className="progress-wrap">
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width:`${task.progress}%`, background: task.progress===100 ? '#22c55e' : '#3b82f6' }} />
              </div>
              <span className="progress-pct">{task.progress}%</span>
            </div>
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Faculty Remarks</span>
          {/* Student can only VIEW faculty remarks */}
          <span className="info-value" style={{ color: '#64748b', fontStyle: task.facultyRemarks ? 'normal' : 'italic' }}>
            {task.facultyRemarks || 'No remarks yet'}
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Your Remarks</span>
          {/* Student CAN edit their own remarks */}
          <div>
            <textarea
              style={{ padding:'8px 12px', border:'1px solid #e2e8f0', borderRadius:7, fontSize:13, color:'#334155', outline:'none', background:'#fff', width:'100%', resize:'vertical', minHeight:70, fontFamily:'inherit' }}
              value={remark}
              onChange={e => setRemark(e.target.value)}
              placeholder="Add your remarks here..."
            />
            <button
              className="btn-save"
              style={{ marginTop:8 }}
              onClick={() => onSaveRemark(task.id, remark)}
            >
              Save Remark
            </button>
          </div>
        </div>
      </div>

      <button className="btn-back" onClick={onBack}>Back</button>
      <div className="student-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

function MyTasks() {
  const [tasks, setTasks] = useState(myTasks);
  const [selected, setSelected] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const filtered = tasks.filter(t => {
    const ms  = statusFilter   === 'All' || t.status   === statusFilter;
    const mp  = priorityFilter === 'All' || t.priority === priorityFilter;
    return ms && mp;
  });

  const handleSaveRemark = (taskId, remark) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, studentRemarks: remark } : t));
    setSelected(prev => prev ? { ...prev, studentRemarks: remark } : prev);
  };

  if (selected) {
    return (
      <TaskDetail
        task={tasks.find(t => t.id === selected.id) || selected}
        onBack={() => setSelected(null)}
        onSaveRemark={handleSaveRemark}
      />
    );
  }

  return (
    <div className="page-wrap">
      <div className="content-header">
        <h2>My Tasks</h2>
        <p>Tasks assigned by your supervisor. You can view details and add your remarks.</p>
      </div>

      <div style={{ display:'flex', gap:10, marginBottom:18, flexWrap:'wrap' }}>
        <select style={{ padding:'7px 12px', border:'1px solid #e2e8f0', borderRadius:7, fontSize:13, color:'#334155', outline:'none', background:'#fff', fontFamily:'inherit' }} value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}>
          <option>All</option><option>Critical</option><option>Moderate</option><option>Low</option>
        </select>
        <select style={{ padding:'7px 12px', border:'1px solid #e2e8f0', borderRadius:7, fontSize:13, color:'#334155', outline:'none', background:'#fff', fontFamily:'inherit' }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option>All</option><option>Pending</option><option>Ongoing</option><option>Completed</option><option>Cancelled</option>
        </select>
      </div>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Task Title</th><th>Priority</th><th>Status</th><th>Due Date</th><th>Score</th><th>Progress</th><th>Action</th></tr>
        </thead>
        <tbody>
          {filtered.map((t, i) => (
            <tr key={t.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight:600, color:'#1e3a5f' }}>{t.title}</td>
              <td><span className={`badge ${priorityClass(t.priority)}`}>{t.priority}</span></td>
              <td><span className={`badge ${statusClass(t.status)}`}>{t.status}</span></td>
              <td style={{ fontSize:13, color:'#64748b' }}>{t.dueDate || '—'}</td>
              <td style={{ fontSize:13 }}>{t.earnedScore != null ? `${t.earnedScore}/${t.assignedScore}` : `—/${t.assignedScore}`}</td>
              <td style={{ minWidth:90 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <div style={{ flex:1, height:5, background:'#e2e8f0', borderRadius:4, overflow:'hidden' }}>
                    <div style={{ width:`${t.progress}%`, height:'100%', background: t.progress===100 ? '#22c55e' : '#3b82f6', borderRadius:4 }} />
                  </div>
                  <span style={{ fontSize:11, color:'#64748b' }}>{t.progress}%</span>
                </div>
              </td>
              <td>
                <button
                  onClick={() => setSelected(t)}
                  style={{ padding:'4px 11px', background:'#dbeafe', color:'#1d4ed8', border:'none', borderRadius:6, fontSize:12, fontWeight:600, cursor:'pointer', fontFamily:'inherit' }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="student-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default MyTasks;

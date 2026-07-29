// Faculty view of SPM_ProjectAllocation — only their own students
// READ ONLY: faculty cannot add/remove students (admin does that)

const myStudents = [
  { id: 1, fullName: 'Arjun Sharma',  userCode: 'CS-2201', projectTitle: 'AI Chatbot',          assignedDate: '2024-09-01', startDate: '2024-09-01', endDate: '2025-03-01', totalTasks: 8,  completedTasks: 5,  progress: 62.50, grade: ''  },
  { id: 2, fullName: 'Rohan Verma',   userCode: 'IT-2203', projectTitle: 'Inventory System',     assignedDate: '2025-01-01', startDate: '2025-01-01', endDate: '2025-06-30', totalTasks: 6,  completedTasks: 2,  progress: 33.33, grade: ''  },
  { id: 3, fullName: 'Priya Patel',   userCode: 'CS-2202', projectTitle: 'E-Commerce Platform',  assignedDate: '2024-08-15', startDate: '2024-08-15', endDate: '2025-02-15', totalTasks: 10, completedTasks: 10, progress: 100,   grade: 'A' },
  { id: 4, fullName: 'Sneha Iyer',    userCode: 'IT-2204', projectTitle: 'Hospital App',          assignedDate: '2025-02-01', startDate: '2025-02-01', endDate: '2025-08-01', totalTasks: 5,  completedTasks: 1,  progress: 20,    grade: ''  },
  { id: 5, fullName: 'Vikram Nair',   userCode: 'CS-2205', projectTitle: 'IoT Weather Station',  assignedDate: '2025-03-01', startDate: '2025-03-01', endDate: '2025-09-01', totalTasks: 5,  completedTasks: 0,  progress: 0,     grade: ''  },
];

import { useState } from 'react';

function StudentDetail({ s, onBack }) {
  return (
    <div>
      <div className="content-header">
        <h2>Student Detail</h2>
        <p>Home / My Students / {s.fullName}</p>
      </div>
      <div className="info-card">
        <div className="info-card-title">Allocation Details — SPM_ProjectAllocation</div>
        <div className="info-row"><span className="info-label">Student Name</span><span className="info-value" style={{ fontWeight:600 }}>{s.fullName}</span></div>
        <div className="info-row"><span className="info-label">Enrollment No</span><span className="info-value">{s.userCode}</span></div>
        <div className="info-row"><span className="info-label">Project Title</span><span className="info-value">{s.projectTitle}</span></div>
        <div className="info-row"><span className="info-label">Assigned Date</span><span className="info-value">{s.assignedDate}</span></div>
        <div className="info-row"><span className="info-label">Start Date</span><span className="info-value">{s.startDate}</span></div>
        <div className="info-row"><span className="info-label">End Date</span><span className="info-value">{s.endDate}</span></div>
        <div className="info-row"><span className="info-label">Total Tasks Given</span><span className="info-value">{s.totalTasks}</span></div>
        <div className="info-row"><span className="info-label">Completed Tasks</span><span className="info-value">{s.completedTasks}</span></div>
        <div className="info-row">
          <span className="info-label">Progress</span>
          <span className="info-value">
            <div className="progress-wrap">
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width:`${s.progress}%`, background: s.progress===100 ? '#22c55e' : '#3b82f6' }} />
              </div>
              <span className="progress-pct">{s.progress.toFixed(1)}%</span>
            </div>
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Overall Grade</span>
          <span className="info-value">
            {s.grade
              ? <span className="badge active">{s.grade}</span>
              : <span style={{ color:'#94a3b8', fontSize:13 }}>Assigned at end of semester</span>
            }
          </span>
        </div>
      </div>
      <button className="btn-back" onClick={onBack}>Back</button>
      <div className="faculty-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

function MyStudents() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = myStudents.filter(s =>
    s.fullName.toLowerCase().includes(search.toLowerCase()) ||
    s.userCode.toLowerCase().includes(search.toLowerCase())
  );

  if (selected) return <StudentDetail s={selected} onBack={() => setSelected(null)} />;

  return (
    <div className="page-wrap">
      <div className="content-header">
        <h2>My Students</h2>
        <p>Students assigned to you via SPM_ProjectAllocation. Read-only — managed by Admin.</p>
      </div>

      <div className="filter-bar">
        <input className="filter-input" placeholder="Search by name or enrollment no..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Full Name</th><th>Enrollment No</th><th>Project</th><th>Tasks</th><th>Progress</th><th>Grade</th><th>Detail</th></tr>
        </thead>
        <tbody>
          {filtered.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight:600 }}>{s.fullName}</td>
              <td style={{ fontSize:'13px', color:'#64748b' }}>{s.userCode}</td>
              <td>{s.projectTitle}</td>
              <td style={{ fontSize:'13px' }}>{s.completedTasks}/{s.totalTasks}</td>
              <td style={{ minWidth:120 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <div style={{ flex:1, height:5, background:'#e2e8f0', borderRadius:4, overflow:'hidden' }}>
                    <div style={{ width:`${s.progress}%`, height:'100%', background: s.progress===100 ? '#22c55e' : '#3b82f6', borderRadius:4 }} />
                  </div>
                  <span style={{ fontSize:11, color:'#64748b' }}>{s.progress}%</span>
                </div>
              </td>
              <td>
                {s.grade
                  ? <span className="badge active">{s.grade}</span>
                  : <span style={{ fontSize:'12px', color:'#94a3b8' }}>—</span>
                }
              </td>
              <td>
                <button className="act-btn view" onClick={() => setSelected(s)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="faculty-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default MyStudents;

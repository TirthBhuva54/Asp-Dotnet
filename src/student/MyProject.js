// SPM_ProjectMaster + SPM_ProjectAllocation (student view)

const allocation = {
  projectTitle:    'AI Chatbot',
  description:     'Build an AI-powered chatbot for student queries using NLP techniques. The chatbot will assist students with academic schedules, results, and general information.',
  faculty:         'Dr. Rajesh Kumar',
  facultyEmail:    'rajesh@spms.com',
  assignedDate:    '2024-09-01',
  startDate:       '2024-09-01',
  endDate:         '2025-03-01',
  totalTasks:      8,
  completedTasks:  5,
  progress:        62.50,
  grade:           '',
};

function MyProject() {
  const pct = allocation.progress;

  return (
    <div className="page-wrap">
      <div className="content-header">
        <h2>My Project</h2>
        <p>Your assigned project allocation details.</p>
      </div>

      {/* Project Master Info */}
      <div className="info-card">
        <div className="info-card-title">Project Details</div>
        <div className="info-row">
          <span className="info-label">Project Title</span>
          <span className="info-value" style={{ fontWeight: 600 }}>{allocation.projectTitle}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Description</span>
          <span className="info-value">{allocation.description}</span>
        </div>
      </div>

      {/* Allocation Info — SPM_ProjectAllocation */}
      <div className="info-card">
        <div className="info-card-title">Allocation Details</div>
        <div className="info-row">
          <span className="info-label">Supervising Faculty</span>
          <span className="info-value">{allocation.faculty}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Faculty Email</span>
          <span className="info-value">{allocation.facultyEmail}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Assigned Date</span>
          <span className="info-value">{allocation.assignedDate}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Project Start Date</span>
          <span className="info-value">{allocation.startDate}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Project End Date</span>
          <span className="info-value">{allocation.endDate}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Total Tasks Given</span>
          <span className="info-value">{allocation.totalTasks}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Completed Tasks</span>
          <span className="info-value">{allocation.completedTasks}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Progress</span>
          <span className="info-value">
            <div className="progress-wrap">
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${pct}%`, background: pct === 100 ? '#22c55e' : '#3b82f6' }} />
              </div>
              <span className="progress-pct">{pct.toFixed(1)}%</span>
            </div>
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Overall Grade</span>
          <span className="info-value">
            {allocation.grade
              ? <span className="badge active">{allocation.grade}</span>
              : <span style={{ color: '#94a3b8', fontSize: 13 }}>Assigned at end of semester</span>
            }
          </span>
        </div>
      </div>

      <div className="student-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default MyProject;

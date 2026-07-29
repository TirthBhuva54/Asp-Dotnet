// SPM_User (Faculty) linked via SPM_ProjectAllocation.FacultyID

const supervisor = {
  fullName:       'Dr. Rajesh Kumar',
  userCode:       'FAC-001',
  email:          'rajesh@spms.com',
  mobile:         '9870001111',
  department:     'Computer Science',
  initials:       'RK',
};

function MySupervisor() {
  return (
    <div className="page-wrap">
      <div className="content-header">
        <h2>My Supervisor</h2>
        <p>Faculty assigned to supervise your project.</p>
      </div>

      <div className="info-card">
        <div className="sup-card">
          <div className="sup-avatar-big">{supervisor.initials}</div>
          <div>
            <div className="sup-name">{supervisor.fullName}</div>
            <div className="sup-dept">{supervisor.department}</div>
          </div>
        </div>

        <div className="info-card-title">Contact Details</div>
        <div className="info-row">
          <span className="info-label">Faculty Code</span>
          <span className="info-value">{supervisor.userCode}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Email</span>
          <span className="info-value">{supervisor.email}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Mobile Number</span>
          <span className="info-value">{supervisor.mobile}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Department</span>
          <span className="info-value">{supervisor.department}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Status</span>
          <span className="info-value"><span className="badge active">Active</span></span>
        </div>
      </div>

      <div className="student-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default MySupervisor;

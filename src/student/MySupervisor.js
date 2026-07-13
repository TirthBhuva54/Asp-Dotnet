import './MySupervisor.css';

function MySupervisor() {
  return (
    <div className="page-wrap">
      <h2>My Supervisor</h2>
      <p className="page-sub">Your assigned supervisor details.</p>

      <div className="supervisor-card">
        <div className="sup-avatar">RS</div>
        <div className="sup-info">
          <h3>Raj Sharma</h3>
          <p className="sup-dept">Department of Computer Science</p>
        </div>
      </div>

      <div className="detail-box">
        <div className="detail-row"><span className="detail-label">Email</span><span>raj@spms.com</span></div>
        <div className="detail-row"><span className="detail-label">Phone</span><span>+91 98765 43210</span></div>
        <div className="detail-row"><span className="detail-label">Office</span><span>Room 204, CS Block</span></div>
        <div className="detail-row"><span className="detail-label">Office Hours</span><span>Mon - Fri, 10 AM to 12 PM</span></div>
        <div className="detail-row"><span className="detail-label">Specialization</span><span>Artificial Intelligence, Machine Learning</span></div>
      </div>
    </div>
  );
}

export default MySupervisor;

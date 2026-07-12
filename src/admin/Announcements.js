import './Announcements.css';

function Announcements() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Announcements</h2>
          <p className="page-sub">Post notices to students and faculty.</p>
        </div>
        <button className="add-btn">+ New Announcement</button>
      </div>

      <div className="ann-list">
        <div className="ann-card">
          <div className="ann-top">
            <span className="ann-badge all">All</span>
            <span className="ann-date">10 Jul 2026</span>
          </div>
          <h4>Final Project Submission Deadline</h4>
          <p>All students must submit their final project report by 31st July 2026. Late submissions will not be accepted.</p>
        </div>

        <div className="ann-card">
          <div className="ann-top">
            <span className="ann-badge students">Students</span>
            <span className="ann-date">7 Jul 2026</span>
          </div>
          <h4>Project Presentation Schedule</h4>
          <p>Presentations will be held from 1st August to 5th August. Check the notice board for your assigned slot.</p>
        </div>

        <div className="ann-card">
          <div className="ann-top">
            <span className="ann-badge supervisors">Faculty</span>
            <span className="ann-date">3 Jul 2026</span>
          </div>
          <h4>Faculty Evaluation Form</h4>
          <p>Please complete the mid-term evaluation forms for your assigned students before 15th July 2026.</p>
        </div>

        <div className="ann-card">
          <div className="ann-top">
            <span className="ann-badge all">All</span>
            <span className="ann-date">1 Jul 2026</span>
          </div>
          <h4>System Maintenance Notice</h4>
          <p>SPMS will be under scheduled maintenance on 12th July from 12 AM to 4 AM. Please save your work beforehand.</p>
        </div>
      </div>
    </div>
  );
}

export default Announcements;

import './Reports.css';

function Reports() {
  return (
    <div className="page-wrap">
      <h2>Reports</h2>
      <p className="page-sub">Project and student summary reports.</p>
      <div className="report-cards">
        <div className="report-card">
          <p className="r-num">24</p>
          <p className="r-label">Total Projects</p>
        </div>
        <div className="report-card">
          <p className="r-num">138</p>
          <p className="r-label">Total Students</p>
        </div>
        <div className="report-card">
          <p className="r-num">89</p>
          <p className="r-label">Completed</p>
        </div>
        <div className="report-card">
          <p className="r-num">17</p>
          <p className="r-label">Pending</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;

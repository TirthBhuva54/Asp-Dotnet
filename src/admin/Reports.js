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

      <div className="report-section">
        <h3>Project Status Breakdown</h3>
        <table className="page-table">
          <thead>
            <tr><th>Supervisor</th><th>Total Projects</th><th>Completed</th><th>In Progress</th><th>Pending</th></tr>
          </thead>
          <tbody>
            <tr><td>Dr. Rajesh Kumar</td><td>8</td><td>4</td><td>3</td><td>1</td></tr>
            <tr><td>Dr. Anita Desai</td><td>6</td><td>3</td><td>2</td><td>1</td></tr>
            <tr><td>Prof. Suresh Sharma</td><td>10</td><td>5</td><td>4</td><td>1</td></tr>
          </tbody>
        </table>
      </div>

      <div className="report-section">
        <h3>Student Submission Summary</h3>
        <table className="page-table">
          <thead>
            <tr><th>Student</th><th>Project</th><th>Tasks Done</th><th>Tasks Pending</th><th>Last Activity</th></tr>
          </thead>
          <tbody>
            <tr><td>Arjun Sharma</td><td>AI Chatbot</td><td>5</td><td>2</td><td>10 Jul 2026</td></tr>
            <tr><td>Priya Patel</td><td>E-Commerce App</td><td>7</td><td>0</td><td>9 Jul 2026</td></tr>
            <tr><td>Rohan Verma</td><td>Inventory System</td><td>3</td><td>4</td><td>8 Jul 2026</td></tr>
            <tr><td>Sneha Iyer</td><td>Hospital App</td><td>4</td><td>3</td><td>11 Jul 2026</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;

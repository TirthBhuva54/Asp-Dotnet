import './Evaluate.css';

function Evaluate() {
  return (
    <div className="page-wrap">
      <h2>Evaluate</h2>
      <p className="page-sub">Review and grade student project submissions.</p>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Student</th><th>Project</th><th>Submission</th><th>Submitted On</th><th>Grade</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Arjun Sharma</td><td>AI Chatbot</td><td>Mid-Term Report</td><td>10 Jul 2026</td><td>A</td>
            <td><span className="badge reviewed">Reviewed</span></td>
          </tr>
          <tr>
            <td>2</td><td>Rohan Verma</td><td>Inventory System</td><td>Initial Proposal</td><td>8 Jul 2026</td><td>-</td>
            <td><span className="badge pending">Pending</span></td>
          </tr>
          <tr>
            <td>3</td><td>Vikram Nair</td><td>Chat Application</td><td>Progress Report</td><td>11 Jul 2026</td><td>B+</td>
            <td><span className="badge reviewed">Reviewed</span></td>
          </tr>
          <tr>
            <td>4</td><td>Kavya Reddy</td><td>News Aggregator</td><td>Mid-Term Report</td><td>5 Jul 2026</td><td>-</td>
            <td><span className="badge pending">Pending</span></td>
          </tr>
          <tr>
            <td>5</td><td>Amit Joshi</td><td>Online Exam Portal</td><td>Final Report</td><td>9 Jul 2026</td><td>A+</td>
            <td><span className="badge reviewed">Reviewed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Evaluate;

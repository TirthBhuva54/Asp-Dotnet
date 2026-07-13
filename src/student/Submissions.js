import './Submissions.css';

function Submissions() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Submissions</h2>
          <p className="page-sub">Your project report and file submissions.</p>
        </div>
        <button className="add-btn">+ Upload Submission</button>
      </div>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Title</th><th>Type</th><th>Submitted On</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Initial Project Proposal</td><td>PDF</td><td>5 Feb 2026</td>
            <td><span className="badge approved">Approved</span></td>
          </tr>
          <tr>
            <td>2</td><td>Mid-Term Progress Report</td><td>PDF</td><td>10 May 2026</td>
            <td><span className="badge approved">Approved</span></td>
          </tr>
          <tr>
            <td>3</td><td>Final Report Draft</td><td>DOCX</td><td>8 Jul 2026</td>
            <td><span className="badge review">Under Review</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Submissions;

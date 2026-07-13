import './MyStudents.css';

function MyStudents() {
  return (
    <div className="page-wrap">
      <h2>My Students</h2>
      <p className="page-sub">Students assigned to you for supervision.</p>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Name</th><th>Roll No</th><th>Project</th><th>Last Submission</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Arjun Sharma</td><td>CS-2201</td><td>AI Chatbot</td><td>10 Jul 2026</td><td><span className="badge in-progress">In Progress</span></td></tr>
          <tr><td>2</td><td>Rohan Verma</td><td>IT-2203</td><td>Inventory System</td><td>8 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
          <tr><td>3</td><td>Vikram Nair</td><td>CS-2205</td><td>Chat Application</td><td>11 Jul 2026</td><td><span className="badge in-progress">In Progress</span></td></tr>
          <tr><td>4</td><td>Kavya Reddy</td><td>CS-2206</td><td>News Aggregator</td><td>5 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
          <tr><td>5</td><td>Amit Joshi</td><td>CS-2207</td><td>Online Exam Portal</td><td>9 Jul 2026</td><td><span className="badge completed">Completed</span></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyStudents;

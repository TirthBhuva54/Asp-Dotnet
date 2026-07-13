import './MyTasks.css';

function MyTasks() {
  return (
    <div className="page-wrap">
      <h2>My Tasks</h2>
      <p className="page-sub">Tasks assigned to you for your project.</p>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Task</th><th>Due Date</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Design UI Wireframes</td><td>12 Jul 2026</td><td><span className="badge completed">Done</span></td></tr>
          <tr><td>2</td><td>Setup Backend API</td><td>15 Jul 2026</td><td><span className="badge in-progress">In Progress</span></td></tr>
          <tr><td>3</td><td>Design Database Schema</td><td>18 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
          <tr><td>4</td><td>Testing & QA</td><td>22 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
          <tr><td>5</td><td>Final Documentation</td><td>28 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyTasks;

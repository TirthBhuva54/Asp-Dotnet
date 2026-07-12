import './Tasks.css';

function Tasks() {
  return (
    <div className="page-wrap">
      <h2>Tasks</h2>
      <p className="page-sub">All assigned tasks.</p>
      <table className="page-table">
        <thead>
          <tr><th>No</th><th>Task</th><th>Assigned To</th><th>Due Date</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Design UI</td><td>Ali Hassan</td><td>12 Jul 2026</td><td><span className="badge completed">Done</span></td></tr>
          <tr><td>2</td><td>Backend API</td><td>Sara Khan</td><td>15 Jul 2026</td><td><span className="badge in-progress">In Progress</span></td></tr>
          <tr><td>3</td><td>Database Schema</td><td>Usman Tariq</td><td>18 Jul 2026</td><td><span className="badge pending">Pending</span></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;

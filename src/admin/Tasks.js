import './Tasks.css';

function Tasks() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Tasks</h2>
          <p className="page-sub">All assigned tasks across projects.</p>
        </div>
        <button className="add-btn">+ Add Task</button>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Project</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Design UI</td><td>AI Chatbot</td><td>Arjun Sharma</td><td>12 Jul 2026</td>
            <td><span className="badge completed">Done</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>2</td><td>Backend API</td><td>E-Commerce App</td><td>Priya Patel</td><td>15 Jul 2026</td>
            <td><span className="badge in-progress">In Progress</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>3</td><td>Database Schema</td><td>Inventory System</td><td>Rohan Verma</td><td>18 Jul 2026</td>
            <td><span className="badge pending">Pending</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>4</td><td>Testing & QA</td><td>Hospital App</td><td>Sneha Iyer</td><td>22 Jul 2026</td>
            <td><span className="badge pending">Pending</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;

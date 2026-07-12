import './Projects.css';

function Projects() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Projects</h2>
          <p className="page-sub">Manage all student projects.</p>
        </div>
        <button className="add-btn">+ Add Project</button>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Student</th>
            <th>Supervisor</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>AI Chatbot</td><td>Arjun Sharma</td><td>Dr. Rajesh Kumar</td><td>31 Jul 2026</td>
            <td><span className="badge in-progress">In Progress</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>2</td><td>E-Commerce App</td><td>Priya Patel</td><td>Dr. Anita Desai</td><td>20 Jul 2026</td>
            <td><span className="badge completed">Completed</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>3</td><td>Inventory System</td><td>Rohan Verma</td><td>Dr. Rajesh Kumar</td><td>25 Jul 2026</td>
            <td><span className="badge pending">Pending</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>4</td><td>Hospital App</td><td>Sneha Iyer</td><td>Prof. Suresh Menon</td><td>28 Jul 2026</td>
            <td><span className="badge in-progress">In Progress</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Projects;

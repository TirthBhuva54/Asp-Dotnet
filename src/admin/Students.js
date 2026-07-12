import './Students.css';

function Students() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Students</h2>
          <p className="page-sub">All registered students.</p>
        </div>
        <button className="add-btn">+ Add Student</button>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Project</th>
            <th>Supervisor</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Arjun Sharma</td><td>arjun@spms.com</td><td>AI Chatbot</td><td>Dr. Rajesh Kumar</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>2</td><td>Priya Patel</td><td>priya@spms.com</td><td>E-Commerce App</td><td>Dr. Anita Desai</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>3</td><td>Rohan Verma</td><td>rohan@spms.com</td><td>Inventory System</td><td>Dr. Rajesh Kumar</td>
            <td><span className="badge inactive">Inactive</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
          <tr>
            <td>4</td><td>Sneha Iyer</td><td>sneha@spms.com</td><td>Hospital App</td><td>Prof. Suresh Menon</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">View</button><button className="act-btn delete">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Students;

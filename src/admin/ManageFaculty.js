import './ManageFaculty.css';

function ManageFaculty() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Faculty</h2>
          <p className="page-sub">Add, edit or remove faculty and supervisors.</p>
        </div>
        <button className="add-btn">+ Add Faculty</button>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Students Assigned</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Dr. Rajesh Kumar</td><td>rajesh@spms.com</td><td>Computer Science</td><td>5</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>2</td><td>Dr. Anita Desai</td><td>anita@spms.com</td><td>Information Tech</td><td>4</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>3</td><td>Prof. Suresh Sharma</td><td>suresh@spms.com</td><td>Computer Science</td><td>3</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>4</td><td>Dr. Meena Joshi</td><td>meena@spms.com</td><td>Information Tech</td><td>0</td>
            <td><span className="badge inactive">On Leave</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>5</td><td>Prof. Deepak Rao</td><td>deepak@spms.com</td><td>Computer Science</td><td>5</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ManageFaculty;

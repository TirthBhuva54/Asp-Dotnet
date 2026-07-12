import './ManageStudents.css';

function ManageStudents() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Students</h2>
          <p className="page-sub">Add, edit or remove student accounts.</p>
        </div>
        <button className="add-btn">+ Add Student</button>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Arjun Sharma</td><td>CS-2201</td><td>arjun@spms.com</td><td>Computer Science</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>2</td><td>Priya Patel</td><td>CS-2202</td><td>priya@spms.com</td><td>Computer Science</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>3</td><td>Rohan Verma</td><td>IT-2203</td><td>rohan@spms.com</td><td>Information Tech</td>
            <td><span className="badge inactive">Inactive</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>4</td><td>Sneha Iyer</td><td>IT-2204</td><td>sneha@spms.com</td><td>Information Tech</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>5</td><td>Vikram Nair</td><td>CS-2205</td><td>vikram@spms.com</td><td>Computer Science</td>
            <td><span className="badge active">Active</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
          <tr>
            <td>6</td><td>Kavya Reddy</td><td>CS-2206</td><td>kavya@spms.com</td><td>Computer Science</td>
            <td><span className="badge inactive">Inactive</span></td>
            <td><button className="act-btn view">Edit</button><button className="act-btn delete">Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ManageStudents;

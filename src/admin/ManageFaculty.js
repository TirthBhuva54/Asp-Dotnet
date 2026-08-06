import { useState, useEffect } from 'react';
import api from '../api/axios';

function ManageFaculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    api.get('/users/faculty').then(res => setFaculty(res.data));
  }, []);

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Faculty</h2>
          <p className="page-sub">View and manage faculty accounts.</p>
        </div>
      </div>
      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Faculty Code</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((f, i) => (
            <tr key={f.id}>
              <td>{i + 1}</td>
              <td>{f.fullName}</td>
              <td>{f.userCode}</td>
              <td>{f.email}</td>
              <td>{f.mobileNumber}</td>
              <td>{f.isActive ? 'Active' : 'Inactive'}</td>
              <td>
                <button className="act-btn delete" onClick={async () => { await api.delete(`/users/${f.id}`); const res = await api.get('/users/faculty'); setFaculty(res.data); }}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default ManageFaculty;

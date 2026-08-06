import { useState, useEffect } from 'react';
import api from '../api/axios';

function ManageStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get('/users/students').then(res => setStudents(res.data));
  }, []);

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Manage Students</h2>
          <p className="page-sub">View and manage student accounts.</p>
        </div>
      </div>
      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Enrollment No</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.fullName}</td>
              <td>{s.userCode}</td>
              <td>{s.email}</td>
              <td>{s.mobileNumber}</td>
              <td>{s.isActive ? 'Active' : 'Inactive'}</td>
              <td>
                <button className="act-btn delete" onClick={async () => { await api.delete(`/users/${s.id}`); const res = await api.get('/users/students'); setStudents(res.data); }}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-footer">© 2026 SPMS Admin. All Rights Reserved.</div>
    </div>
  );
}

export default ManageStudents;

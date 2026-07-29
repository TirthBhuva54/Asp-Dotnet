import { useState } from 'react';

const initialSubs = [
  { id: 1, title: 'Initial Project Proposal',  type: 'PDF',  submittedOn: '2026-02-05', status: 'Approved'      },
  { id: 2, title: 'Mid-Term Progress Report',  type: 'PDF',  submittedOn: '2026-05-10', status: 'Approved'      },
  { id: 3, title: 'Final Report Draft',        type: 'DOCX', submittedOn: '2026-07-08', status: 'Under Review'  },
];

function statusClass(s) {
  if (s === 'Approved')     return 'approved';
  if (s === 'Under Review') return 'review';
  return 'rejected';
}

function Submissions() {
  const [subs] = useState(initialSubs);

  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Submissions</h2>
          <p className="page-sub">Your project report and file submissions.</p>
        </div>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>File Type</th>
            <th>Submitted On</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600 }}>{s.title}</td>
              <td>
                <span style={{ padding: '2px 8px', background: '#f1f5f9', color: '#475569', borderRadius: 5, fontSize: 12, fontWeight: 600 }}>
                  {s.type}
                </span>
              </td>
              <td style={{ fontSize: 13, color: '#64748b' }}>{s.submittedOn}</td>
              <td><span className={`badge ${statusClass(s.status)}`}>{s.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="student-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default Submissions;

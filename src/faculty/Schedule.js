// Faculty schedule — based on SPM_Task.NextFollowUpDate

const scheduleItems = [
  { id: 1, student: 'Arjun Sharma',  purpose: 'NLP Model Review',       date: '2026-08-01', time: '11:00 AM', status: 'Upcoming' },
  { id: 2, student: 'Rohan Verma',   purpose: 'Inventory Module Review', date: '2026-07-25', time: '10:00 AM', status: 'Upcoming' },
  { id: 3, student: 'Priya Patel',   purpose: 'Final Evaluation',        date: '2026-07-10', time: '02:00 PM', status: 'Done'     },
  { id: 4, student: 'Sneha Iyer',    purpose: 'Progress Review',         date: '2026-07-14', time: '09:00 AM', status: 'Upcoming' },
  { id: 5, student: 'Vikram Nair',   purpose: 'Project Kickoff',         date: '2026-07-20', time: '03:00 PM', status: 'Upcoming' },
];

function Schedule() {
  return (
    <div className="page-wrap">
      <div className="content-header">
        <h2>Schedule</h2>
        <p>Upcoming follow-up sessions with your students, based on task NextFollowUpDate.</p>
      </div>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Student</th><th>Purpose</th><th>Date</th><th>Time</th><th>Status</th></tr>
        </thead>
        <tbody>
          {scheduleItems.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600 }}>{s.student}</td>
              <td>{s.purpose}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{s.date}</td>
              <td style={{ fontSize: '13px', color: '#64748b' }}>{s.time}</td>
              <td><span className={`badge ${s.status === 'Upcoming' ? 'upcoming' : 'done'}`}>{s.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="faculty-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default Schedule;

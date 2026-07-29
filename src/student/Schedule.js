// Follow-up schedule derived from SPM_Task.NextFollowUpDate

const scheduleItems = [
  { id: 1, purpose: 'Progress Review',    with: 'Dr. Rajesh Kumar', date: '2026-07-14', time: '10:00 AM', status: 'Upcoming' },
  { id: 2, purpose: 'Mid-Term Evaluation',with: 'Dr. Rajesh Kumar', date: '2026-07-10', time: '02:00 PM', status: 'Done'     },
  { id: 3, purpose: 'Task Review',        with: 'Dr. Rajesh Kumar', date: '2026-07-16', time: '09:00 AM', status: 'Upcoming' },
  { id: 4, purpose: 'NLP Model Review',   with: 'Dr. Rajesh Kumar', date: '2026-08-01', time: '11:00 AM', status: 'Upcoming' },
];

function Schedule() {
  return (
    <div className="page-wrap">
      <div className="content-header">
        <h2>Schedule</h2>
        <p>Upcoming meetings and follow-up sessions with your supervisor.</p>
      </div>

      <table className="page-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Purpose</th>
            <th>With</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {scheduleItems.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td style={{ fontWeight: 600 }}>{s.purpose}</td>
              <td style={{ fontSize: 13 }}>{s.with}</td>
              <td style={{ fontSize: 13, color: '#64748b' }}>{s.date}</td>
              <td style={{ fontSize: 13, color: '#64748b' }}>{s.time}</td>
              <td>
                <span className={`badge ${s.status === 'Upcoming' ? 'upcoming' : 'done'}`}>{s.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="student-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default Schedule;

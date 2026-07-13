import './Schedule.css';

function Schedule() {
  return (
    <div className="page-wrap">
      <h2>Schedule</h2>
      <p className="page-sub">Your upcoming meetings and review sessions.</p>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Purpose</th><th>With</th><th>Date</th><th>Time</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Progress Review</td><td>Raj Sharma</td><td>14 Jul 2026</td><td>10:00 AM</td>
            <td><span className="badge upcoming">Upcoming</span></td>
          </tr>
          <tr>
            <td>2</td><td>Mid-Term Evaluation</td><td>Raj Sharma</td><td>10 Jul 2026</td><td>2:00 PM</td>
            <td><span className="badge done">Done</span></td>
          </tr>
          <tr>
            <td>3</td><td>Task Review</td><td>Raj Sharma</td><td>16 Jul 2026</td><td>9:00 AM</td>
            <td><span className="badge upcoming">Upcoming</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;

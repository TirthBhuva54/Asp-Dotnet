import './Schedule.css';

function Schedule() {
  return (
    <div className="page-wrap">
      <div className="page-header">
        <div>
          <h2>Schedule</h2>
          <p className="page-sub">Manage meeting and review slots with your students.</p>
        </div>
        <button className="add-btn">+ Add Slot</button>
      </div>

      <table className="page-table">
        <thead>
          <tr><th>#</th><th>Student</th><th>Purpose</th><th>Date</th><th>Time</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>Arjun Sharma</td><td>Progress Review</td><td>14 Jul 2026</td><td>10:00 AM</td>
            <td><span className="badge upcoming">Upcoming</span></td>
          </tr>
          <tr>
            <td>2</td><td>Rohan Verma</td><td>Proposal Discussion</td><td>15 Jul 2026</td><td>11:30 AM</td>
            <td><span className="badge upcoming">Upcoming</span></td>
          </tr>
          <tr>
            <td>3</td><td>Vikram Nair</td><td>Mid-Term Evaluation</td><td>10 Jul 2026</td><td>2:00 PM</td>
            <td><span className="badge done">Done</span></td>
          </tr>
          <tr>
            <td>4</td><td>Kavya Reddy</td><td>Task Review</td><td>16 Jul 2026</td><td>9:00 AM</td>
            <td><span className="badge upcoming">Upcoming</span></td>
          </tr>
          <tr>
            <td>5</td><td>Amit Joshi</td><td>Final Presentation</td><td>8 Jul 2026</td><td>3:00 PM</td>
            <td><span className="badge done">Done</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;

// Faculty view — READ ONLY, cannot create/edit/delete announcements (Admin does that)

const announcements = [
  { id: 1, badge: 'all',         title: 'Final Project Submission Deadline', date: '10 Jul 2026', body: 'All students must submit their final project report by 31st July 2026.' },
  { id: 2, badge: 'supervisors', title: 'Faculty Evaluation Form',           date: '3 Jul 2026',  body: 'Please complete the mid-term evaluation forms for your assigned students before 15th July 2026.' },
  { id: 3, badge: 'all',         title: 'System Maintenance Notice',         date: '1 Jul 2026',  body: 'SPMS will be under scheduled maintenance on 12th July from 12 AM to 4 AM.' },
];

const badgeLabel = { all: 'All', students: 'Students', supervisors: 'Faculty' };

function Announcements() {
  return (
    <div className="page-wrap">
      <div className="content-header">
        <h2>Announcements</h2>
        <p>Notices from admin. Read-only — contact admin to post announcements.</p>
      </div>

      <div className="ann-list">
        {announcements.map(a => (
          <div className="ann-card" key={a.id}>
            <div className="ann-top">
              <span className={`ann-badge ${a.badge}`}>{badgeLabel[a.badge]}</span>
              <span className="ann-date">{a.date}</span>
            </div>
            <h4>{a.title}</h4>
            <p>{a.body}</p>
          </div>
        ))}
      </div>
      <div className="faculty-footer">© 2026 SPMS. All Rights Reserved.</div>
    </div>
  );
}

export default Announcements;

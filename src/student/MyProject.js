import './MyProject.css';

function MyProject() {
  return (
    <div className="page-wrap">
      <h2>My Project</h2>
      <p className="page-sub">Details of your assigned project.</p>

      <div className="project-card">
        <div className="proj-row"><span className="proj-label">Project Title</span><span>AI Chatbot</span></div>
        <div className="proj-row"><span className="proj-label">Supervisor</span><span>Dr. Rajesh Kumar</span></div>
        <div className="proj-row"><span className="proj-label">Department</span><span>Computer Science</span></div>
        <div className="proj-row"><span className="proj-label">Start Date</span><span>1 Jan 2026</span></div>
        <div className="proj-row"><span className="proj-label">Deadline</span><span>31 Jul 2026</span></div>
        <div className="proj-row"><span className="proj-label">Status</span><span className="badge in-progress">In Progress</span></div>
      </div>

      <div className="desc-card">
        <h3>Project Description</h3>
        <p>This project involves building an AI-powered chatbot using natural language processing techniques. The chatbot will assist students with queries related to academic schedules, results, and general information.</p>
      </div>
    </div>
  );
}

export default MyProject;

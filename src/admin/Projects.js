import './Projects.css';

function Projects() {
  return (
    <div className="page-wrap">
      <h2>Projects</h2>
      <p className="page-sub">Manage all student projects here.</p>
      <table className="page-table">
        <thead>
          <tr><th>No</th><th>Project Name</th><th>Student</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>AI Chatbot</td><td>Ali Hassan</td><td><span className="badge in-progress">In Progress</span></td></tr>
          <tr><td>2</td><td>E-Commerce App</td><td>Sara Khan</td><td><span className="badge completed">Completed</span></td></tr>
          <tr><td>3</td><td>Inventory System</td><td>Usman Tariq</td><td><span className="badge pending">Pending</span></td></tr>
          <tr><td>4</td><td>Hospital App</td><td>Ayesha Noor</td><td><span className="badge in-progress">In Progress</span></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Projects;

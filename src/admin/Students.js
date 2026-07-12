import './Students.css';

function Students() {
  return (
    <div className="page-wrap">
      <h2>Students</h2>
      <p className="page-sub">All registered students.</p>
      <table className="page-table">
        <thead>
          <tr><th>No</th><th>Name</th><th>Email</th><th>Project</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Ali Hassan</td><td>ali@email.com</td><td>AI Chatbot</td></tr>
          <tr><td>2</td><td>Sara Khan</td><td>sara@email.com</td><td>E-Commerce App</td></tr>
          <tr><td>3</td><td>Usman Tariq</td><td>usman@email.com</td><td>Inventory System</td></tr>
          <tr><td>4</td><td>Ayesha Noor</td><td>ayesha@email.com</td><td>Hospital App</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Students;

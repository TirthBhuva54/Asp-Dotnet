// Mock user store — mirrors SPM_User table
// Replace with API call to POST /api/auth/login when backend is ready

const users = [
  { userId: 1, email: 'admin@gmail.com',   password: '123',   role: 'admin',   fullName: 'Aarav Patel',  userCode: 'ADM-001', userTypeId: 1 },
  { userId: 3, email: 'rohan@gmail.com',   password: '1234',  role: 'student', fullName: 'Rohan Mehta',  userCode: 'CS-2201', userTypeId: 2 },
  { userId: 2, email: 'raj@gmail.com',     password: '12345', role: 'faculty', fullName: 'Raj Sharma',   userCode: 'FAC-001', userTypeId: 3 },
];

export default users;

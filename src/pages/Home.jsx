import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const Home = () => {
  const { studentInfo } = useContext(StudentContext);

  return (
    <div className="page-container fade-in">
      <div className="hero-section">
        <h1>Welcome back, <span className="highlight">{studentInfo.name}</span>!</h1>
        <p className="subtitle">Manage your courses, grades, and schedule all in one place.</p>
        
        <div className="dashboard-cards">
          <div className="card glass">
            <h3>Student Profile</h3>
            <p><strong>ID:</strong> {studentInfo.studentId}</p>
            <p><strong>Major:</strong> {studentInfo.major}</p>
          </div>
          <div className="card glass">
            <h3>Quick Stats</h3>
            <p><strong>Enrolled Courses:</strong> {studentInfo.enrolledCourses.length}</p>
            <p><strong>Status:</strong> Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

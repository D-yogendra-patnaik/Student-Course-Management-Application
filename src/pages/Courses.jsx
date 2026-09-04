import { Link } from 'react-router-dom';

export const coursesData = [
  { id: 1, title: 'Introduction to Computer Science', code: 'CS101', credits: 4, description: 'Learn the fundamentals of programming and computer architecture.' },
  { id: 2, title: 'Data Structures and Algorithms', code: 'CS201', credits: 4, description: 'Deep dive into efficient data management and algorithmic problem solving.' },
  { id: 3, title: 'Web Development Basics', code: 'CS301', credits: 3, description: 'Master HTML, CSS, and vanilla JavaScript.' },
  { id: 4, title: 'Advanced React Applications', code: 'CS401', credits: 4, description: 'Build scalable and dynamic single-page applications using React and Context API.' },
];

const Courses = () => {
  return (
    <div className="page-container fade-in">
      <h2>Available Courses</h2>
      <p className="subtitle">Browse the catalog of courses for this semester.</p>
      
      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="card course-card glass">
            <div className="course-header">
              <span className="course-code">{course.code}</span>
              <span className="course-credits">{course.credits} Credits</span>
            </div>
            <h3>{course.title}</h3>
            <Link to={`/course/${course.id}`} className="btn-primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

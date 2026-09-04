import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { coursesData } from './Courses';
import { StudentContext } from '../context/StudentContext';

const CourseDetail = () => {
  const { id } = useParams();
  const { studentInfo, setStudentInfo } = useContext(StudentContext);
  
  const courseId = parseInt(id, 10);
  const course = coursesData.find((c) => c.id === courseId);
  const isEnrolled = studentInfo.enrolledCourses.includes(courseId);

  if (!course) {
    return (
      <div className="page-container fade-in">
        <h2>Course Not Found</h2>
        <Link to="/courses" className="btn-secondary">Back to Courses</Link>
      </div>
    );
  }

  const toggleEnrollment = () => {
    setStudentInfo(prev => {
      if (isEnrolled) {
        return { ...prev, enrolledCourses: prev.enrolledCourses.filter(c => c !== courseId) };
      } else {
        return { ...prev, enrolledCourses: [...prev.enrolledCourses, courseId] };
      }
    });
  };

  return (
    <div className="page-container fade-in">
      <div className="card glass course-detail-card">
        <div className="course-header-large">
          <h2>{course.code}: {course.title}</h2>
          <span className="badge">{course.credits} Credits</span>
        </div>
        
        <div className="course-body">
          <h3>Description</h3>
          <p>{course.description}</p>
        </div>

        <div className="course-actions">
          <button 
            className={`btn-primary ${isEnrolled ? 'enrolled' : ''}`} 
            onClick={toggleEnrollment}
          >
            {isEnrolled ? 'Drop Course' : 'Enroll Now'}
          </button>
          <Link to="/courses" className="btn-secondary">Back to Catalog</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

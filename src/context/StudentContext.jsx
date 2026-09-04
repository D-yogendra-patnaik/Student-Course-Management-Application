import { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentInfo, setStudentInfo] = useState({
    name: 'Jane Doe',
    studentId: 'STU-94021',
    major: 'Computer Science',
    enrolledCourses: [1, 2] // Course IDs
  });

  return (
    <StudentContext.Provider value={{ studentInfo, setStudentInfo }}>
      {children}
    </StudentContext.Provider>
  );
};

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import './index.css';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="app-container">
          <nav className="navbar glass-nav">
            <div className="nav-brand">
              <span className="logo-icon">🎓</span>
              <span className="logo-text">EduCore</span>
            </div>
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;

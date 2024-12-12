import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Router components
import Home from './components/Home';
import Application from './Admission/Application';
import About from './components/About';
import Gallery from './components/Gallery';
import Courses from './components/Courses';
import Location from './components/Location';
import Footer from './components/Footer';
import Login from './Start/Login';
import Fpassword from './Start/Fpassword';
import ResetPass from './Start/ResetPass';

import StudentDashboard from './StudentDashboard/StudentDashboard.jsx';
import AdminDashboard from './AdminDashboard/AdminDashboard.jsx';
import OfficerDashboard from './OfficerDashboard/OfficerDashboard.jsx';
import Admission from './Admission/Application';

import './css/Officer.css';
import './js/Officer';
import './css/landingpage.css';
import './css/Application.css';
import './js/script.jsx';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const studentEmailRegex = /^bc\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@cvsu\.edu\.ph$/;

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const getNavigationPath = (user) => {
    if (!user) return '/';

    switch (user.role) {
      case 'Student':
        return studentEmailRegex.test(user.email) ? '/StudentDashboard' : '/Admission';
      case 'Admin':
        return '/AdminDashboard';
      case 'Officer':
        return '/OfficerDashboard';
      default:
        return '/';
    }
  };

  return (
    <Router>
      <div className="website-container">
        <Routes>
          {/* Main route for the website layout */}
          <Route path="/" element={<><Home /><About /><Gallery /><Courses /><Location /><Footer /></>} />

          {/* Separate route for Application (with no common sections like Footer or Home) */}
          <Route path="/Application" element={<Application />} />

          {/* Login Route */}
          <Route
            path="/login"
            element={<Login setUser={(user) => {
              setUser(user);
              localStorage.setItem('user', JSON.stringify(user));
            }} />}
          />

          {/* Forgot Password Route */}
          <Route path="/forgot-password" element={<Fpassword />} />

          {/* Reset Password Route */}
          <Route path="/resetpass" element={<ResetPass />} /> 

          {/* Role-based Dashboard Redirection */}
          <Route
            path="/dashboard"
            element={user ? (
              <Navigate to={getNavigationPath(user)} />
            ) : (
              <Navigate to="/" />
            )}
          />

          {/* Student Dashboard */}
          <Route
            path="/StudentDashboard"
            element={user && user.role === 'Student' ? (
              studentEmailRegex.test(user.email) ? (
                <StudentDashboard logout={handleLogout} />
              ) : (
                <Navigate to="/Admission" />
              )
            ) : (
              <Navigate to="/" />
            )}
          />

          {/* Admin Dashboard */}
          <Route
            path="/AdminDashboard"
            element={user && user.role === 'Admin' ? (
              <AdminDashboard logout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )}
          />

          {/* Officer Dashboard */}
          <Route
            path="/OfficerDashboard"
            element={user && user.role === 'Officer' ? (
              <OfficerDashboard logout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )}
          />

          {/* Admission Route */}
          <Route
            path="/Admission"
            element={user && user.role === 'Student' && !studentEmailRegex.test(user.email) ? (
              <Admission />
            ) : (
              <Navigate to="/" />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

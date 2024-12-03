import React, { useState, } from "react";
import logo from '../assets/images/cvsu-logo.png';
import profile from '../assets/images/profile.jpg';


const Officer = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [dropdowns, setDropdowns] = useState({
    students: false,
    officers: false,
    instructors: false,
    registrar: false,
  });
  const [profileDropdown, setProfileDropdown] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleProfileClick = () => {
    setProfileDropdown((prev) => !prev);
  };

  const closeProfileDropdown = () => {
    setProfileDropdown(false);
  };

  const allProgress = [
    { value: "40%", label: "Students", count: 1500, icon: "bx bx-male-female" },
    { value: "60%", label: "Subjects", count: 234, icon: "bx bxs-notepad" },
    { value: "30%", label: "Instructors", count: 465, icon: "bx bxs-group" },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      {sidebarVisible && (
        <section id="sidebar">
          <a href="#" className="brand">
            <img src={logo} alt="CvSU-Bacoor" /> CvSU-Bacoor
          </a>
          <ul className="side-menu">
            <li>
              <a href="#" className="active">
                <i className="bx bxs-dashboard icon"></i> Dashboard
              </a>
            </li>
            <li className="divider" data-text="main">
              Main
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown("students")}>
                <i className="bx bx-male-female icon"></i> Students{" "}
                <i className="bx bx-chevron-right icon-right"></i>
              </a>
              {dropdowns.students && (
                <ul className="side-dropdown">
                  <li><a href="#">Regular Student</a></li>
                  <li><a href="#">Irregular Student</a></li>
                  <li><a href="#">Returnee Student</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown("officers")}>
                <i className="bx bxs-group icon"></i> Officers{" "}
                <i className="bx bx-chevron-right icon-right"></i>
              </a>
              {dropdowns.officers && (
                <ul className="side-dropdown">
                  <li><a href="#">Information</a></li>
                  <li><a href="#">Checklist</a></li>
                  <li><a href="#">Payment</a></li>
                </ul>
              )}
            </li>
            <li className="divider" data-text="faculty">
              Faculty
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown("instructors")}>
                <i className="bx bxs-group icon"></i> Instructors{" "}
                <i className="bx bx-chevron-right icon-right"></i>
              </a>
              {dropdowns.instructors && (
                <ul className="side-dropdown">
                  <li><a href="#">Information</a></li>
                  <li><a href="#">Class List</a></li>
                  <li><a href="#">Advising</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" onClick={() => toggleDropdown("registrar")}>
                <i className="bx bxs-notepad icon"></i> Registrar{" "}
                <i className="bx bx-chevron-right icon-right"></i>
              </a>
              {dropdowns.registrar && (
                <ul className="side-dropdown">
                  <li><a href="#">Database</a></li>
                  <li><a href="#">Print</a></li>
                </ul>
              )}
            </li>
          </ul>
        </section>
      )}

      {/* Navbar and Main Content */}
      <section id="content">
        <nav>
          <i className="bx bx-menu toggle-sidebar" onClick={toggleSidebar}></i>
          <form action="#">
            <div className="form-group">
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search icon"></i>
            </div>
          </form>
          <a href="#" className="nav-link">
            <i className="bx bxs-bell icon"></i>
            <span className="badge">5</span>
          </a>
          <span className="divider"></span>
          <div
            className={`profile ${profileDropdown ? "show" : ""}`}
            onClick={handleProfileClick}
          >
            <img src={profile} alt="Profile" />
            {profileDropdown && (
              <ul className="profile-link">
                <li>
                  <a href="#">
                    <i className="bx bxs-user-circle icon"></i> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxs-cog"></i> Settings
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxs-log-out-circle"></i> Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <h1 className="title">Dashboard</h1>
          <ul className="breadcrumbs">
            <li><a href="#">Home</a></li>
            <li className="divider">/</li>
            <li><a href="#" className="active">Dashboard</a></li>
          </ul>
          <div className="info-data">
            {allProgress.map((item, index) => (
              <div className="card" key={index}>
                <div className="head">
                  <div>
                    <h2>{item.count}</h2>
                    <p>{item.label}</p>
                  </div>
                  <i className={`${item.icon} icon`}></i>
                </div>
                <span
                  className="progress"
                  style={{ "--value": item.value }}
                ></span>
                <span className="label">{item.value}</span>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default Officer;

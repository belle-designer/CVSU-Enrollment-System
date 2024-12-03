import React from "react";
import logo from '../assets/images/cvsu-logo.png';
import profile from '../assets/images/profile.jpg';

const OfficerDashboard = () => {
  return (
    <div id="wrapper">
      {/* Sidebar */}
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
            <a href="#">
              <i className="bx bx-male-female icon"></i> Profile{" "}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
         
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group icon"></i> Officers{" "}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className="side-dropdown">
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Checklist</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
            </ul>
          </li>
          <li className="divider" data-text="faculty">
            Faculty
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group icon"></i> Instructors{" "}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className="side-dropdown">
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Class List</a>
              </li>
              <li>
                <a href="#">Advising</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-notepad icon"></i> Registrar{" "}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className="side-dropdown">
              <li>
                <a href="#">Database</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Navbar */}
      <section id="content">
        <nav>
          <i className="bx bx-menu toggle-sidebar"></i>
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
          <div className="profile">
          <img src={profile} alt="Profile" />
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
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <h1 className="title">Dashboard</h1>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="divider">/</li>
            <li>
              <a href="#" className="active">
                Dashboard
              </a>
            </li>
          </ul>
          <div className="info-data">
            <div className="card">
              <div className="head">
                <div>
                  <h2>1500</h2>
                  <p>Students</p>
                </div>
                <i className="bx bx-male-female icon"></i>
              </div>
              <span className="progress" data-value="40%"></span>
              <span className="label">40%</span>
            </div>
            <div className="card">
              <div className="head">
                <div>
                  <h2>234</h2>
                  <p>Subjects</p>
                </div>
                <i className="bx bxs-notepad icon down"></i>
              </div>
              <span className="progress" data-value="60%"></span>
              <span className="label">60%</span>
            </div>
            <div className="card">
              <div className="head">
                <div>
                  <h2>465</h2>
                  <p>Instructors</p>
                </div>
                <i className="bx bxs-group icon"></i>
              </div>
              <span className="progress" data-value="30%"></span>
              <span className="label">30%</span>
            </div>
          </div>
          <div className="data">
            <div className="content-data">
              <div className="head">
                <h3>Summary Report</h3>
                <div className="menu">
                  <i className="bx bx-dots-horizontal-rounded icon"></i>
                  <ul className="menu-link">
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Save</a>
                    </li>
                    <li>
                      <a href="#">Remove</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="report-body">
                <div className="report-topic-heading">
                  <h3 className="t-op">Student</h3>
                  <h3 className="t-op">Year/Section</h3>
                  <h3 className="t-op">Classification</h3>
                  <h3 className="t-op">Status</h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default OfficerDashboard;

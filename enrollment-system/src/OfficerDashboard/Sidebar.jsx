import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <img src="/logo.png" alt="" /> CvSU-Bacoor
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
            <i className="bx bx-male-female icon"></i> Students{" "}
            <i className="bx bx-chevron-right icon-right"></i>
          </a>
          <ul className="side-dropdown">
            <li><a href="#">Regular Student</a></li>
            <li><a href="#">Irregular Student</a></li>
            <li><a href="#">Returnee Student</a></li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-group icon"></i> Officers{" "}
            <i className="bx bx-chevron-right icon-right"></i>
          </a>
          <ul className="side-dropdown">
            <li><a href="#">Information</a></li>
            <li><a href="#">Checklist</a></li>
            <li><a href="#">Payment</a></li>
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
            <li><a href="#">Information</a></li>
            <li><a href="#">Class List</a></li>
            <li><a href="#">Advising</a></li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-notepad icon"></i> Registrar{" "}
            <i className="bx bx-chevron-right icon-right"></i>
          </a>
          <ul className="side-dropdown">
            <li><a href="#">Database</a></li>
            <li><a href="#">Print</a></li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;

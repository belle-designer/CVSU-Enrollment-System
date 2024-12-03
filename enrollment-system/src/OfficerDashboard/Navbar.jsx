import React from "react";

function Navbar() {
  return (
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
        <img src="/profile.jpg" alt="" />
        <ul className="profile-link">
          <li><a href="#"><i className="bx bxs-user-circle icon"></i> Profile</a></li>
          <li><a href="#"><i className="bx bxs-cog"></i> Settings</a></li>
          <li><a href="#"><i className="bx bxs-log-out-circle"></i> Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

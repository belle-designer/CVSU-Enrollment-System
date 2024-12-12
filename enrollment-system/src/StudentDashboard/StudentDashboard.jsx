import React, { useState } from "react";
import profile from '../assets/images/profile.jpg';
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  // State to track the current title, active menu item, active section, department, semester, and courses
  const navigate = useNavigate();

  const [title, setTitle] = useState("Profile");
  const [activeMenu, setActiveMenu] = useState("profile");
  const [activeSection, setActiveSection] = useState("profile");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [department, setDepartment] = useState("Computer Science");
  const [semester, setSemester] = useState("First Year, First Semester");

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

 // State for sidebar collapse
 const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    firstName: "Mary",
    middleName: "Torres",
    lastName: "Motol",
    suffix: "Not provided",
    civilStatus: "Single",
    sexAtBirth: "Male",
    religion: "Roman Catholic",
    dateOfBirth: "2023-11-23",
    nationality: "Filipino",
  });
  // Dummy data for courses for different departments and semesters
  const coursesData = {
    "Computer Science": {
      "First Year, First Semester": [
        { code: "CS101", name: "Introduction to Computer Science", prerequisite: "None", grade: "1.0", instructor: "Dr. Smith" },
        { code: "CS102", name: "Data Structures", prerequisite: "CS101", grade: "1.25", instructor: "Prof. Johnson" }
      ],
      "First Year, Second Semester": [
        { code: "CS201", name: "Algorithms", prerequisite: "CS102", grade: "1.25", instructor: "Dr. Williams" },
        { code: "CS202", name: "Computer Networks", prerequisite: "CS101", grade: "1.0", instructor: "Prof. Lee" }
      ]
    },
    "Information Technology": {
      "First Year, First Semester": [
        { code: "IT101", name: "Introduction to IT", prerequisite: "None", grade: "1.0", instructor: "Dr. Lee" },
        { code: "IT102", name: "Web Development", prerequisite: "None", grade: "1.0", instructor: "Prof. Davis" }
      ],
      "First Year, Second Semester": [
        { code: "IT201", name: "Database Systems", prerequisite: "IT101", grade: "1.0", instructor: "Dr. Brown" },
        { code: "IT202", name: "Operating Systems", prerequisite: "IT101", grade: "1.0", instructor: "Prof. Clark" }
      ]
    }
  };

  // Handle changes in input fields
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing((prevState) => !prevState);
  };
  
  // Save changes and exit edit mode
  const handleSave = () => {
    setIsEditing(false);
    // Add any API call or state management logic here to save changes
  };

  // Handle clicks on menu items
  const handleMenuClick = (newTitle, menuItem) => {
    setTitle(newTitle);
    setActiveMenu(menuItem);
    setActiveSection(menuItem);
  };
  
  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false); // Close the dropdown when any item is clicked
  };
  
    // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  // Handle department change
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  // Handle semester change
  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  // Get courses based on department and semester
  const courses = coursesData[department]?.[semester] || [];


  const handleLogoutClick = () => {
    setIsModalOpen(true); // Show the confirmation modal
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleConfirmLogout = () => {
    navigate('/'); // Redirect to the home page
    setIsModalOpen(false); // Close the modal
  };
  
  const handleEnrollment = (event) => {
    event.preventDefault(); // Prevent form submission
  
    // Check if any grade is failing (below 75)
    const grades = document.getElementById("grades").value.split(",").map(grade => parseFloat(grade.trim()));
    const failingGrade = grades.find(grade => grade < 75);
    
    if (failingGrade) {
      document.getElementById("gradeError").textContent = "You have failing grades. You cannot enroll until your grades are improved.";
      return;
    } else {
      document.getElementById("gradeError").textContent = ""; // Clear error message
    }
  
    // Check if proof of payment is uploaded
    const proofOfPayment = document.getElementById("proofOfPayment").files.length;
    if (proofOfPayment === 0) {
      alert("Please upload proof of payment for your society fee.");
      return;
    }
  
    // If all validations pass, proceed with the enrollment
    alert("You are now enrolled.");
  };
  
  

  return (
    <div id="wrapper">
      {/* Sidebar */}
      
    {/* Sidebar */}
    <section id="sidebar" className={sidebarCollapsed ? 'hide' : ''}>
    <a href="#" className="brand">
        <img src="/logo.png" alt="CvSU-Bacoor" />
        CvSU-Bacoor
        </a>
        <ul className="side-menu">
          <li className="divider" data-text="main">Main</li>
          <li>
            <a
              href="#"
              className={`${activeMenu === "profile" ? "bg-green-500 text-white" : "text-gray-800"} hover:bg-green-300 px-4 py-2 rounded-lg transition-all`}
              onClick={() => handleMenuClick("Profile", "profile")}
            >
              <i className="bx bx-male-female icon"></i> Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${activeMenu === "checklist" ? "bg-green-500 text-white" : "text-gray-800"} hover:bg-green-300 px-4 py-2 rounded-lg transition-all`}
              onClick={() => handleMenuClick("Checklist", "checklist")}
            >
              <i className="bx bxs-group icon"></i> Checklist
            </a>
          </li>
          <li className="divider" data-text="faculty">Enrollment</li>
          <li>
            <a
              href="#"
              className={`${activeMenu === "enrollment" ? "bg-green-500 text-white" : "text-gray-800"} hover:bg-green-300 px-4 py-2 rounded-lg transition-all`}
              onClick={() => handleMenuClick("Enrollment", "enrollment")}
            >
              <i className="bx bxs-group icon"></i> Enrollment
            </a>
          </li>
        </ul>
      </section>

 {/* Content Section */}
 <section id="content" className='w-full'>
        <nav>
          <i className="bx bx-menu toggle-sidebar" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}></i>
          <form>
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
           <img 
              src={profile} 
              alt="Profile" 
              onClick={toggleDropdown} 
              className="w-10 h-10 rounded-full cursor-pointer"
            />
              {/* Dropdown menu */}
              {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-100 rounded-lg"
                    onClick={handleDropdownItemClick}
                  >
                    <i className="bx bxs-user-circle icon mr-2"></i> Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-100 rounded-lg"
                    onClick={handleDropdownItemClick}
                  >
                    <i className="bx bxs-cog"></i> Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-100 rounded-lg"
                    onClick={handleLogoutClick} // Trigger logout
                  >
                    <i className="bx bxs-log-out-circle"></i> Logout
                  </a>
                </li>
              </ul>
            )}

{/* Modal for Logout */}
          {isModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-bold text-center mb-4">Are you sure you want to log out?</h2>
                <div className="flex justify-between">
                  <button
                    onClick={handleCancelLogout}
                    className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                onClick={handleConfirmLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Confirm Logout
              </button>
                </div>
              </div>
            </div>
          )}

          </div>
        </nav>

        {/* Main Content */}
        <main>
          <h1 className="title">{title}</h1>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="divider">/</li>
            <li>
              <a href="#" className="active">{title}</a>
            </li>
          </ul>
{activeSection === "profile" && (
  <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-10">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-center text-green-700">Personal Information</h1>
      <button
        onClick={toggleEditMode}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>
    {isEditing ? (
      <div className="mt-6">
        {/* Editable Input Fields */}
        {Object.entries(profileInfo).map(([key, value]) => (
          <div className="mb-4" key={key}>
            <label className="block text-gray-700 capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
        >
          Save
        </button>
      </div>
    ) : (
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Basic Information</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-medium">First Name</span>
              <span>{profileInfo.firstName}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Middle Name</span>
              <span>{profileInfo.middleName}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Last Name</span>
              <span>{profileInfo.lastName}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Suffix</span>
              <span>{profileInfo.suffix}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Civil Status</span>
              <span>{profileInfo.civilStatus}</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Additional Information</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-medium">Sex at Birth</span>
              <span>{profileInfo.sexAtBirth}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Religion</span>
              <span>{profileInfo.religion}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Date of Birth</span>
              <span>{profileInfo.dateOfBirth}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Nationality</span>
              <span>{profileInfo.nationality}</span>
            </li>
          </ul>
        </div>
      </div>
    )}
  </div>
)}

          {/* Checklist Section */}
          {activeSection === "checklist" && (
            <>
              <h1 className="text-3xl font-bold text-green-700 mb-4">Student Checklist</h1>
              
              {/* Department Dropdown */}
              <div className="mb-4">
                <label htmlFor="department" className="block text-gray-700">Department</label>
                <select
                  id="department"
                  className="w-full p-2 bg-white border border-gray-300 rounded-md"
                  value={department}
                  onChange={handleDepartmentChange}
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">Information Technology</option>
                </select>
              </div>

              {/* Semester Dropdown */}
              <div className="mb-4">
                <label htmlFor="semester" className="block text-gray-700">Semester</label>
                <select
                  id="semester"
                  className="w-full p-2 bg-white border border-gray-300 rounded-md"
                  value={semester}
                  onChange={handleSemesterChange}
                >
                  <option value="First Year, First Semester">First Year, First Semester</option>
                  <option value="First Year, Second Semester">First Year, Second Semester</option>
                </select>
              </div>

              {/* Display Courses */}
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 bg-green-500 text-white">Course Code</th>
                      <th className="px-4 py-2 bg-green-500 text-white">Course Name</th>
                      <th className="px-4 py-2 bg-green-500 text-white">Prerequisite</th>
                      <th className="px-4 py-2 bg-green-500 text-white">Grade</th>
                      <th className="px-4 py-2 bg-green-500 text-white">Instructor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border">{course.code}</td>
                        <td className="px-4 py-2 border">{course.name}</td>
                        <td className="px-4 py-2 border">{course.prerequisite}</td>
                        <td className="px-4 py-2 border">{course.grade}</td>
                        <td className="px-4 py-2 border">{course.instructor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {/* Enrollment Section */}
{/* Enrollment Section */}
{activeSection === "enrollment" && (
  <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-10">
    <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Enrollment Section</h1>
    <p className="text-center text-gray-600 mb-8">
      This section will allow students to enroll in courses. Please ensure you meet the requirements below.
    </p>

    {/* Enrollment Form */}
    <form className="space-y-6" onSubmit={handleEnrollment}>
      <div>
        <label htmlFor="studentName" className="block text-sm font-semibold text-gray-700">Student Name</label>
        <input
          type="text"
          id="studentName"
          placeholder="Enter your full name"
          className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      <div>
        <label htmlFor="program" className="block text-sm font-semibold text-gray-700">Program</label>
        <select
          id="program"
          className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Select your program</option>
          <option value="bscs">BSCS (Bachelor of Science in Computer Science)</option>
          <option value="bsit">BSIT (Bachelor of Science in Information Technology)</option>
        </select>
      </div>

      <div>
        <label htmlFor="semester" className="block text-sm font-semibold text-gray-700">Semester</label>
        <select
          id="semester"
          className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Select your semester</option>
          <option value="first">1st Semester</option>
          <option value="second">2nd Semester</option>
          <option value="summer">Summer</option>
        </select>
      </div>

      <div>
        <label htmlFor="grades" className="block text-sm font-semibold text-gray-700">Grades</label>
        <input
          type="text"
          id="grades"
          placeholder="Enter your grades (e.g., 80, 90, 70)"
          className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <p className="text-sm text-red-500 mt-2" id="gradeError"></p> {/* Error message for failing grades */}
      </div>

      <div>
        <label htmlFor="proofOfPayment" className="block text-sm font-semibold text-gray-700">Proof of Payment</label>
        <input
          type="file"
          id="proofOfPayment"
          accept="image/*, .pdf"
          className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <p className="text-sm text-gray-500 mt-2">Please upload the proof of payment for your society fee.</p>
      </div>

      <div>
        <label htmlFor="courses" className="block text-sm font-semibold text-gray-700">Courses</label>
        <select
          id="courses"
          multiple
          className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="course1">Course 1: Computer Science Fundamentals</option>
          <option value="course2">Course 2: Data Structures</option>
          <option value="course3">Course 3: Algorithms</option>
          <option value="course4">Course 4: Database Systems</option>
          <option value="course5">Course 5: Web Development</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Enroll Now
        </button>
      </div>
    </form>
  </div>
)}
        </main>
      </section>
    </div>
  );
};

export default StudentDashboard;

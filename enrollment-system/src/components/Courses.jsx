import React from 'react';
import bscsIcon from '../assets/images/bscs.png'; // Import the BSCS image
import bsitIcon from '../assets/images/bsit.png'; // Import the BSIT image

function Courses() {
  const courseData = [
    {
      title: "Computer Science",
      description: "The study of computing concepts and theories, algorithmic foundations, and new development in computing.",
      image: bscsIcon,  // Image for BSCS
      buttonText: "Visit Page",  // Button text for BSCS
      link: "https://www.facebook.com/acscvsubacoor?mibextid=ZbWKwL"  // Facebook link for BSCS
    },
    {
      title: "Information Technology",
      description: "Includes the study of the utilization of both hardware and software technologies involving planning, installing, customizing, operating, managing, and maintaining information technology infrastructure.",
      image: bsitIcon,  // Image for BSIT
      buttonText: "Visit Page",  // Button text for BSIT
      link: "https://www.facebook.com/its.cvsubacoor?mibextid=ZbWKwL"  // Add the link for BSIT (example, can be a different link)
    }
  ];

  return (
    <section className="courses py-10 bg-gray-100" id="courses">
      {/* Courses Section Header */}
      <header className="section-header">
        <h1>Courses</h1>
        <p>This website focuses on the BSCS (Bachelor of Science in Computer Science) and 
          BSIT (Bachelor of Science in Information Technology) programs, specifically their 
          admission and enrollment processes. Each program has its own dedicated page, 
          which you can visit for more updates and detailed informations.</p>
      </header>

      {/* Courses Content with Two Columns and Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-7xl px-4">
        {courseData.map((course, index) => (
          <div
            className={`category-item bg-white p-6 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center`}
            key={index}
          >
            <div className="category-desc text-center">
              <div className="flex flex-col items-center justify-center mb-4">
                <img
                  src={course.image}
                  alt={`${course.title} Icon`}
                  className="w-16 h-16 object-contain mb-4" // Adjust size for proper centering
                />
                <h3 className="text-xl font-semibold">{course.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{course.description}</p>

              {/* Button */}
              <a
                href={course.link}  // Link to external Facebook page or internal page
                target="_blank"  // Open in a new tab
                rel="noopener noreferrer"  // Security feature when opening new tab
              >
                <button
                  className="py-2 px-6 bg-green-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
                >
                  {course.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

import React from 'react';

function Courses() {
  const courseData = [

    {
      title: "BS Computer Science",
      description: "The study of computing concepts and theories, algorithmic foundations, and new development in computing."
    },
    {
      title: "BS Information Technology",
      description: "Includes the study of the utilization of both hardware and software technologies involving planning, installing, customizing, operating, managing, and maintaining information technology infrastructure."
    },
    {
      title: "BS Secondary Education Major in Math",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "BS Secondary Education Major in English",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "BS Business Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  
    {
      title: "BS Criminology",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "BS Hospitality Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {
      title: "BS Psychology",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }

    
  ];

  return (
    <section className="courses" id="courses">
      {/* Courses Section Header */}
      <header className="section-header">
        <h1>Courses Offered</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </header>

      {/* Courses Content */}
      <div className="courses-contents">
        {courseData.map((course, index) => (
          <div className={`category-item ${index < 4 ? 'spaced-item' : ''}`} key={index}>
            <div className="category-desc">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

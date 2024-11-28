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
      description: "It focused on preparing students to become secondary school teachers specializing in mathematics. It covers both educational theory and mathematics content, including algebra, calculus, and statistics."
    },
    {
      title: "BS Secondary Education Major in English",
      description: "Designed to prepare students to teach English at the secondary school level. It includes courses in English literature, linguistics, teaching methodologies, and educational psychology."
    },
    {
      title: "BS Business Management",
      description: "Focuses on the principles of managing businesses, including organizational behavior, finance, marketing, human resources, and strategic planning. It prepares students for leadership roles in various industries."
    },
  
    {
      title: "BS Criminology",
      description: "A program that studies crime, criminal behavior, law enforcement, and the justice system. It prepares students for careers in law enforcement, corrections, and criminal justice administration."
    },
    {
      title: "BS Hospitality Management",
      description: "A degree program that prepares students for careers in the hospitality industry, including hotels, restaurants, tourism, and event management. It covers topics like customer service, business operations, and hospitality law."
    },

    {
      title: "BS Psychology",
      description: "A program focused on the scientific study of behavior and mental processes. It prepares students for careers in counseling, therapy, human resources, or further education in psychology or related fields."
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

import React, { useState } from "react";


const Application = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Application Details",
      fields: (
        <>
          <div>
            <label htmlFor="fullName" className="label">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="input" />
          </div>
          <div>
            <label htmlFor="age" className="label">Age</label>
            <input type="number" id="age" name="age" className="input" />
          </div>
        </>
      ),
    },
    {
      title: "Applicant Profile",
      fields: (
        <>
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" name="email" className="input" />
          </div>
          <div>
            <label htmlFor="phone" className="label">Phone</label>
            <input type="tel" id="phone" name="phone" className="input" />
          </div>
        </>
      ),
    },
    {
      title: "Family Profile",
      fields: (
        <>
          <div>
            <label htmlFor="guardian" className="label">Guardian's Name</label>
            <input type="text" id="guardian" name="guardian" className="input" />
          </div>
          <div>
            <label htmlFor="guardianContact" className="label">Guardian's Contact</label>
            <input type="tel" id="guardianContact" name="guardianContact" className="input" />
          </div>
        </>
      ),
    },
    {
      title: "Educational Profile",
      fields: (
        <>
          <div>
            <label htmlFor="lastSchool" className="label">Last School Attended</label>
            <input type="text" id="lastSchool" name="lastSchool" className="input" />
          </div>
          <div>
            <label htmlFor="yearGraduated" className="label">Year Graduated</label>
            <input type="number" id="yearGraduated" name="yearGraduated" className="input" />
          </div>
        </>
      ),
    },
    {
      title: "Upload Requirements",
      fields: (
        <>
          <div>
            <label htmlFor="resume" className="label">Upload Resume</label>
            <input type="file" id="resume" name="resume" className="input" />
          </div>
          <div>
            <label htmlFor="certificate" className="label">Upload Certificate</label>
            <input type="file" id="certificate" name="certificate" className="input" />
          </div>
        </>
      ),
    },
    {
      title: "Schedule Appointment",
      fields: (
        <>
          <div>
            <label htmlFor="appointmentDate" className="label">Appointment Date</label>
            <input type="date" id="appointmentDate" name="appointmentDate" className="input" />
          </div>
          <div>
            <label htmlFor="appointmentTime" className="label">Appointment Time</label>
            <input type="time" id="appointmentTime" name="appointmentTime" className="input" />
          </div>
          <button type="submit" className="button submit-button">Submit</button>
        </>
      ),
    },
  ];

  const progressItems = [
    "Application Details",
    "Applicant Profile",
    "Family Profile",
    "Educational Profile",
    "Upload Requirements",
    "Schedule Appointment",
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Admission Portal</h1>
      </header>

      {/* Main Content Wrapper */}
      <div className="main-wrapper">
        {/* Left Side Progress Bar */}
        <div className="progress-bar">
          <h2 className="progress-title">Progress</h2>
          <div>
            {progressItems.map((step, index) => (
              <div key={index} className="progress-item">
                <div
                  className={`progress-circle ${
                    index <= currentStep ? "active" : ""
                  }`}
                >
                  {index + 1}
                </div>
                <p className="progress-label">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Content Area */}
        <div className="content-area">
          <div className="content-box">
            <h2 className="content-title">{steps[currentStep].title}</h2>
            <form id="applicationForm" className="form">
              {steps[currentStep].fields}
              <div className="button-group">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="button previous-button"
                  >
                    Previous
                  </button>
                )}
                {currentStep < steps.length - 1 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="button next-button"
                  >
                    Next
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;

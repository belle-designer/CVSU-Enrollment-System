import React, { useState } from "react";


const Application = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
  title: "Application Details",
  fields: (
    <>
      <div>
        <label htmlFor="typeOfApplicant" className="label">Type of Applicant</label>
        <select id="typeOfApplicant" name="typeOfApplicant" className="input">
        <option value="" disabled>Select Type</option>
          <option value="als">Alternative Learning System (ALS) Passer</option>
          <option value="degree">Bachelor's Degree Graduate</option>
          <option value="grade12">Currently Enrolled Grade 12 Student</option>
          <option value="foreign">Foreign Undergraduate Student Applicant</option>
          <option value="shs">Senior High School Graduate</option>
          <option value="transferee">Transferee</option>
        </select>
      </div>
      <div>
        <label htmlFor="preferredProgram" className="label">Preferred Program</label>
        <select id="preferredProgram" name="preferredProgram" className="input">
          <option value=""disabled>Select Program</option>
          <option value="bscs">Bachelor of Science in Computer Science</option>
          <option value="bsit">Bachelor of Science in Information Technology</option>
          
        </select>
      </div>
    </>
  ),
},

{
  title: "Applicant Profile",
  fields: (
    <>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="label">First Name</label>
          <input type="text" id="firstName" name="firstName" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="middleName" className="label">Middle Name</label>
          <input type="text" id="middleName" name="middleName" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="label">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="suffix" className="label">Suffix (Optional)</label>
          <input type="text" id="suffix" name="suffix" className="input" />
        </div>
      </div>
      <div className="form-row">
  <div className="form-group">
    <label htmlFor="sex" className="label">Sex at Birth</label>
    <select id="sex" name="sex" className="input">
      <option value="" disabled>Select Sex</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div className="form-group">
  <label htmlFor="dob" className="label">Date of Birth</label>
  <input type="date" id="dob" name="dob" className="input" />
</div>

<div className="form-group">
  <label htmlFor="civilStatus" className="label">Civil Status</label>
  <select id="civilStatus" name="civilStatus" className="input">
    <option value="" disabled>Select Civil Status</option>
    <option value="single">Single</option>
    <option value="married">Married</option>
    <option value="widowed">Widowed</option>
    <option value="divorced">Divorced</option>
    <option value="separated">Separated</option>
  </select>
</div>

        <div className="form-group">
          <label htmlFor="sex" className="label">Contact Number</label>
          <input type="text" id="sex" name="sex" className="input" />
        </div>
      
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="label">Religion</label>
          <input type="text" id="firstName" name="firstName" className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="middleName" className="label">Nationality</label>
          <input type="text" id="middleName" name="middleName" className="input" />
        </div>
 
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
      {/* Background Section with Buttons */}
      <div className="background-container">
        <div className="buttons-container">
          <button className="button enroll-now">Enroll Now</button>
          <button className="button login">Login</button>
        </div>
      </div>

      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Admission Portal</h1>
      </header>

      {/* Main Content Wrapper */}
      <div className="main-wrapper">
        {/* Left Side Progress Bar */}
        <div className="progress-bar">
          <h2 className="progress-title">Admission Process</h2>
          <div>
            {progressItems.map((step, index) => (
              <div key={index} className="progress-item">
                <div
                  className={`progress-circle ${index <= currentStep ? "active" : ""}`}
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

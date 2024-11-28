import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa"; // Icon for logout
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation

const Application = () => {
  const [currentStep, setStep] = useState(1); // Start from Step 1
  const [image, setImage] = useState(null); // State for image upload
  const studentName = "Mary Ann"; // Example name

  const navigate = useNavigate(); // Initialize the navigate function

  // Sample scheduled appointment from the admin
  const scheduledDateTime = "2024-12-05 10:00 AM"; // Admin-provided scheduled date and time

  // Step labels and content for each step
  const steps = [
    { title: "Application Details", description: "Type of Applicant and Preferred Program." },
    { title: "Applicant Profile", description: "Enter your personal details." },
    { title: "Family Profile", description: "Provide details about your family background." },
    { title: "Educational Profile", description: "Enter your educational history." },
    { title: "Upload Requirements", description: "Upload necessary documents for your application." },
    { title: "Schedule", description: "View your scheduled appointment date and time." },
  ];

  const handleSubmit = () => {
    // Handle the form submission logic here
    alert("Application submitted successfully!");
  };

  const goToDashboard = () => {
    // Logic to redirect to Step 1 (reset to first step)
    setStep(1);
    alert("Redirecting to Dashboard...");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // On logout, navigate back to the Home component (login page or dashboard)
    navigate("/"); // Redirect to Home.jsx or login page (update with the correct route)
    alert("You have been logged out!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-[#208245] text-white py-4 px-6 shadow-md flex items-center justify-between">
        <h1 className="text-xl font-bold">Welcome, {studentName}!</h1>
        <button
          className="flex items-center gap-2 hover:bg-green-600 px-4 py-2 rounded-lg"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="text-white" />
          <span>Logout</span>
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 h-screen shadow-lg">
          <h2 className="text-center text-xl font-bold py-4">Admission Process</h2>
          <ul className="space-y-2 px-4">
            {steps.map((step, index) => (
              <li key={index}>
                <button
                  disabled={index + 1 !== currentStep} // Disable button if not the current step
                  onClick={() => setStep(index + 1)}
                  className={`flex items-center w-full px-4 py-2 rounded-lg font-medium text-left ${
                    index + 1 === currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-green-200 disabled:opacity-50 disabled:pointer-events-none"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 ${
                      index + 1 === currentStep
                        ? "bg-white text-green-500"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {step.title}
                </button>
              </li>
            ))}
            {/* Exam Result - not part of steps, added after Step 6 */}
            <li>
              <button
                onClick={() => setStep("examResult")}
                className={`flex items-center w-full px-4 py-2 rounded-lg font-medium text-left ${
                  currentStep === "examResult"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-green-500"
                }`}
              >
                Exam Result
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="p-6 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-4">{steps[currentStep - 1]?.title || ""}</h2>
            <p className="text-gray-700">{steps[currentStep - 1]?.description || ""}</p>

            {/* Form for Step 1 */}
            {currentStep === 1 && (
              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Type of Applicant
                  </label>
                  <select className="w-full px-3 py-2 border rounded-lg focus:outline-none">
                    <option value="als">Alternative Learning System (ALS) Passer</option>
                    <option value="degree">Bachelor's Degree Graduate</option>
                    <option value="grade12">Currently Enrolled Grade 12 Student</option>
                    <option value="foreign">Foreign Undergraduate Student Applicant</option>
                    <option value="shs">Senior High School Graduate</option>
                    <option value="transferee">Transferee</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Preferred Program
                  </label>
                  <select className="w-full px-3 py-2 border rounded-lg focus:outline-none">
                    <option>Bachelor of Science in Computer Science</option>
                    <option>Bachelor of Science in Information Technology</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => setStep(2)}
                >
                  Next
                </button>
              </form>
            )}

          {/* Form for Step 2 (Applicant Profile) */}
{currentStep === 2 && (
  <form className="space-y-4 mt-4">
    {/* 2x2 Picture Upload */}
    <div>
      <label className="block text-gray-600 font-medium mb-1">Upload 2x2 Picture</label>
      <div className="w-32 h-32 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center" style={{ aspectRatio: '2 / 2' }}>
        {image ? (
          <img src={image} alt="Uploaded" className="object-cover w-full h-full rounded-md" />
        ) : (
          <p className="text-gray-500 text-center">No image uploaded</p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-2"
      />
    </div>

    {/* 4 Columns Grid for First Name, Middle Name, Suffix, and Last Name */}
    <div className="grid grid-cols-4 gap-4">
      <div>
        <label className="block text-gray-600 font-medium mb-1">First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium mb-1">Middle Name</label>
        <input
          type="text"
          placeholder="Enter your middle name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium mb-1">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-600 font-medium mb-1">Suffix (Optional)</label>
        <input
          type="text"
          placeholder="Enter your suffix"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none"
        />
      </div>
    </div>
 {/* 4 Columns Grid for Gender, Date of Birth, Civil Status, and Contact Number */}
<div className="grid grid-cols-4 gap-4">
  <div>
    <label className="block text-gray-600 font-medium mb-1">Gender</label>
    <select
      className="w-full px-3 py-2 border rounded-lg focus:outline-none"
      placeholder="select your gender"
    >
      <option value="" disabled selected>Select your gender</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="others">Others</option>
    </select>
  </div>

  
  <div>
    <label className="block text-gray-600 font-medium mb-1">Date of Birth</label>
    <input
      type="date"
      className="w-full px-3 py-2 border rounded-lg focus:outline-none"
    />
  </div>
  
  <div>
    <label className="block text-gray-600 font-medium mb-1">Civil Status</label>
    <select
      className="w-full px-3 py-2 border rounded-lg focus:outline-none"
      placeholder="Select your civil status"
    >
       <option value="" disabled selected>Select your civil status</option>
      <option value="single">Single</option>
      <option value="married">Married</option>
      <option value="widowed">Widowed</option>
      <option value="divorced">Divorced</option>
    </select>
  </div>
  
  <div>
    <label className="block text-gray-600 font-medium mb-1">Contact Number</label>
    <input
      type="tel"
      placeholder="Enter your contact number"
      className="w-full px-3 py-2 border rounded-lg focus:outline-none"
    />
  </div>
</div>


    <button
      type="button"
      className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
      onClick={() => setStep(currentStep - 1)}
    >
      Previous
    </button>
    <button
      type="button"
      className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      onClick={() => setStep(3)}
    >
      Next
    </button>
  </form>
)}


            {/* Form for Step 3 (Family Profile) */}
            {currentStep === 3 && (
              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your father's name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your mother's name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                  onClick={() => setStep(currentStep - 1)}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
              </form>
            )}
{/* Form for Step 4 (Educational Profile) */}
{currentStep === 4 && (
              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    School Last Attended
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the last school you attended"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  />
                </div>
                              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Year of Graduation
                </label>
                <input
                  type="month" 
                  placeholder="Enter your year of graduation"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                />
              </div>

                <button
                  type="button"
                  className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                  onClick={() => setStep(currentStep - 1)}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => setStep(5)}
                >
                  Next
                </button>
              </form>
            )}

            {/* Form for Step 5 (Upload Requirements) */}
            {currentStep === 5 && (
              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Upload Requirements
                  </label>
                  <input
                    type="file"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                  onClick={() => setStep(currentStep - 1)}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => setStep(6)}
                >
                  Next
                </button>
              </form>
            )}


            {/* Other Steps... */}
            {currentStep === 6 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Scheduled Appointment</h3>
                <p>Your scheduled appointment: {scheduledDateTime}</p>
              </div>
            )}

            {/* Exam Result Step */}
            {currentStep === "examResult" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Exam Results</h2>
                <p className="text-gray-700">Your examination result is pending.</p>
                <button
                  onClick={goToDashboard}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-800"
                >
                  Go to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;

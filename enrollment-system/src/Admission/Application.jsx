import React, { useState } from "react";

const Application = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Application Details", fields: (
        <>
          <div>
            <label htmlFor="fullName" className="block text-gray-600 font-medium">Full Name</label>
            <input type="text" id="fullName" name="fullName" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
          <div>
            <label htmlFor="age" className="block text-gray-600 font-medium">Age</label>
            <input type="number" id="age" name="age" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
        </>
      ) },
    { title: "Applicant Profile", fields: (
        <>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 font-medium">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
        </>
      ) },
      { title: "Family Profile", fields: (
        <>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 font-medium">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
        </>
      ) },

      { title: "Educational Profile", fields: (
        <>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 font-medium">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
        </>
      ) },

      { title: "Upload Requirements", fields: (
        <>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 font-medium">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
        </>
      ) },

      { title: "Schedule Appointment", fields: (
        <>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 font-medium">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring focus:border-green-300" />
          </div>
        </>
      ) },


    { title: "Submit", fields: (
        <>
          <p className="text-gray-700">Click submit to complete your application.</p>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Submit</button>
       
        </>
      ) }
  ];

  const progressItems = [
    "Application Details",
    "Applicant Profile",
    "Family Profile",
    "Educational Profile",
    "Upload Requirements",
    "Schedule Appointment",
    "Submit"
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="bg-gray-100 font-sans flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="w-full bg-green-500 text-white text-center py-4 fixed top-0 left-0 z-10">
        <h1 className="text-3xl font-bold">Admission Portal</h1>
      </header>

      {/* Main Content Wrapper */}
      <div className="flex w-full mt-16 pt-3">
        {/* Left Side Progress Bar */}
        <div className="w-1/4 bg-gray-200 p-6 fixed top-16 left-0 h-screen">
          <h2 className="text-xl font-bold mb-6 text-gray-700">Progress</h2>
          <div>
            {progressItems.map((step, index) => (
              <div key={index} className="flex items-center mb-4">
                <div
                  className={`h-8 w-8 flex items-center justify-center rounded-full ${index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
                >
                  {index + 1}
                </div>
                <p className="ml-4 text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Content Area */}
        <div className="w-3/4 p-6 ml-auto">
          <div className="w-full min-h-screen bg-white p-8 pt-12 shadow-xl rounded-lg flex flex-col">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">{steps[currentStep].title}</h2>
            <form id="applicationForm" className="space-y-4">
              {steps[currentStep].fields}

              
              <div>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Next
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;

import React from "react";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      {/* Personal Information Section */}
      <h1 className="text-3xl font-bold text-center text-green-700 mb-4">
        Personal Information
      </h1>
      <p className="text-center text-gray-600 mb-8">Your information is displayed here.</p>

      {/* Basic Information */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Basic Information</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-medium">Given Name</span>
              <span>John</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Middle Name</span>
              <span>Not provided</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Suffix</span>
              <span>Not provided</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Civil Status</span>
              <span>Single</span>
            </li>
          </ul>
        </div>

        {/* Additional Information */}
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Additional Information</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-medium">Sex at Birth</span>
              <span>Male</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Religion</span>
              <span>Roman Catholic</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Date of Birth</span>
              <span>2024-02-05</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Nationality</span>
              <span>Filipino</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

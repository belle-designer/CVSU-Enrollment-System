import React, { useState } from 'react';

const Grades = () => {
  // Example professor data with students and their respective courses and sections
  const professorsData = [
    {
      id: 1,
      professor: 'Joven Rios',
      subjects: ['COSC 101', 'COSC 85'],
      sections: [
        {
          id: 1,
          sectionName: 'BSCS 2-2',
          students: [
            { id: 1, name: 'Mary Ann Motol', grade: '' },
            { id: 2, name: 'John Doe', grade: '' },
          ],
        },
        {
          id: 2,
          sectionName: 'BSCS 2-5',
          students: [
            { id: 3, name: 'Jane Smith', grade: '' },
            { id: 4, name: 'Alice Wang', grade: '' },
          ],
        },
      ],
    },
    {
      id: 2,
      professor: 'Mikay Arciaga',
      subjects: ['COSC 70'],
      sections: [
        {
          id: 1,
          sectionName: 'BSIT 3-2',
          students: [
            { id: 5, name: 'Mark Lee', grade: '' },
            { id: 6, name: 'Lucy Green', grade: '' },
          ],
        },
      ],
    },
    {
      id: 3,
      professor: 'Dhan Belgica',
      subjects: ['COSC 25'],
      sections: [
        {
          id: 1,
          sectionName: 'BSCS 4-2',
          students: [
            { id: 7, name: 'Samuel Brown', grade: '' },
            { id: 8, name: 'Chris Adams', grade: '' },
          ],
        },
      ],
    },
  ];

  // State hooks
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [grades, setGrades] = useState({});
  const [showPopup, setShowPopup] = useState(false); // Show success popup

  // Handle selecting a professor
  const handleProfessorClick = (professor) => {
    setSelectedProfessor(professor);
    setSelectedSection(null); // Reset section selection
    setGrades({}); // Clear previous grades if any
    setShowPopup(false); // Hide the success popup when selecting a new professor
  };

  // Handle selecting a section
  const handleSectionChange = (event) => {
    const sectionId = event.target.value;
    const section = selectedProfessor.sections.find(
      (sec) => sec.id === parseInt(sectionId)
    );
    setSelectedSection(section);
    setGrades({});  // Clear grades for the new section
  };

  // Handle grade input change (dropdown)
  const handleGradeChange = (studentId, grade) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [studentId]: grade,
    }));
  };

  // Handle grade submission
  const handleSubmitGrades = () => {
    // Submit logic here (e.g., API call to save grades)
    setShowPopup(true); // Show success popup after grades are submitted
    console.log('Grades submitted:', grades);  // You would send this data to an API or save it in a database
  };

  // Close popup and reset for new professor
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProfessor(null); // Reset the professor selection
    setSelectedSection(null); // Reset the section selection
  };

  return (
    <main>
      {/* Title and Breadcrumb */}
      <h1 className="text-3xl font-semibold mb-2">Grade Management</h1>
      <ul className="flex gap-1 text-sm">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Grades</a></li>
      </ul>

      <h3 className="text-2xl font-semibold pt-6 pb-6">Assign Grades</h3>

      <div className="bg-white rounded-lg">
        {/* Professor List */}
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Select Professor</h4>
          <ul>
            {professorsData.map((professor) => (
              <li
                key={professor.id}
                className="cursor-pointer text-blue-500 hover:text-blue-700 mb-2 hover:bg-gray-50 border-b border-gray-300"
                onClick={() => handleProfessorClick(professor)}
              >
                {professor.professor}
              </li>
            ))}
          </ul>
        </div>

        {/* Section Selection */}
        {selectedProfessor && (
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Select Section</h4>
            <select
              className="p-3 border border-gray-300 rounded-md"
              onChange={handleSectionChange}
              value={selectedSection ? selectedSection.id : ''}
            >
              <option value="">Select Section</option>
              {selectedProfessor.sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.sectionName}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Grade Input Form for Selected Professor and Section */}
        {selectedSection && (
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Assign Grades for {selectedSection.sectionName}</h4>
            <table className="min-w-full table-auto border-collapse">
              <thead className="text-sm text-green-600">
                <tr>
                  <th className="px-4 py-2 text-center">Student Name</th>
                  <th className="px-4 py-2 text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {selectedSection.students.map((student) => (
                  <tr key={student.id}>
                    <td className="px-4 py-2 text-center">{student.name}</td>
                    <td className="px-4 py-2 text-center">
                      {/* Grade dropdown */}
                      <select
                        className="p-2 border border-gray-300 rounded-md"
                        value={grades[student.id] || student.grade}
                        onChange={(e) => handleGradeChange(student.id, e.target.value)}
                      >
                        <option value="">Select Grade</option>
                        <option value="1.00">1.00</option>
                        <option value="1.25">1.25</option>
                        <option value="1.50">1.50</option>
                        <option value="1.75">1.75</option>
                        <option value="2.00">2.00</option>
                        <option value="2.25">2.25</option>
                        <option value="2.50">2.50</option>
                        <option value="2.75">2.75</option>
                        <option value="3.00">3.00</option>
                        <option value="4.00">4.00</option>
                        <option value="5.00">5.00</option>
                        <option value="drp">Dropped</option>
                        <option value="inc">Incomplete</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="mt-4 px-10 py-2 bg-green-700 text-white hover:bg-green-600"
              onClick={handleSubmitGrades}
            >
              Submit Grades
            </button>
          </div>
        )}
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold text-center mb-4">Grades Assigned Successfully!</h3>
            <p className="text-center mb-6">All grades have been assigned for the selected section.</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-6 py-2 bg-green-700 text-white hover:bg-green-600"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Grades;

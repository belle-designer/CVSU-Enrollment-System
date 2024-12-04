import React, { useState } from 'react';

const Instructor = () => {
  // Example professor data
  const allProfessorsData = [
    { id: 1, professor: 'Joven Rios', subjects: 'COSC 101, COSC 85', program: 'BSCS, BSIT', yearlevel: '2nd year 1st sem', classes: 'BSCS 2-2, BSCS 2-5', days: 'Mon, Tue, Wed' },
    { id: 2, professor: 'Mikay Arciaga', subjects: 'COSC 70', program: 'BSIT', yearlevel: '3rd year 2nd sem', classes: 'BSCS 3-2, BSCS 3-6', days: 'Tue, Fri, Sat' },
    { id: 3, professor: 'Dhan Belgica', subjects: 'COSC 25', program: 'BSCS', yearlevel: '4th year 2nd sem', classes: 'BSIT 4-1, BSCS 4-2', days: 'Mon, Tue, Fri' },
  ];

  // State hooks
  const [professors, setProfessors] = useState(allProfessorsData); // State for all professors
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Track delete confirmation modal visibility
  const [selectedProfessor, setSelectedProfessor] = useState(null); // Track selected professor for editing
  const [originalProfessor, setOriginalProfessor] = useState(null); // Track the original professor data for reset
  const [professorToDelete, setProfessorToDelete] = useState(null); // Track professor to be deleted

  // Open edit modal and populate with professor data
  const handleEditClick = (professor) => {
    setSelectedProfessor({ ...professor }); // Create a copy to edit
    setOriginalProfessor({ ...professor }); // Store the original data for reset
    setIsModalOpen(true);
  };

  // Handle Save Button
  const handleSave = () => {
    if (selectedProfessor) {
      // Update professor list with edited data
      setProfessors((prevProfessors) => {
        return prevProfessors.map((prof) =>
          prof.id === selectedProfessor.id ? selectedProfessor : prof
        );
      });
      setIsModalOpen(false); // Close modal after saving
    }
  };

  // Handle Reset Button
  const handleReset = () => {
    setSelectedProfessor({ ...originalProfessor }); // Revert to original data
  };

  // Handle Delete Button
  const handleDeleteClick = (professor) => {
    setProfessorToDelete(professor); // Store the professor to be deleted
    setIsDeleteModalOpen(true); // Open delete confirmation modal
  };

  // Confirm deletion
  const handleDeleteConfirm = () => {
    setProfessors(professors.filter((professor) => professor.id !== professorToDelete.id)); // Remove professor from list
    setIsDeleteModalOpen(false); // Close the delete confirmation modal
    setProfessorToDelete(null); // Clear professor to delete
  };

  // Cancel deletion
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false); // Close the delete confirmation modal
    setProfessorToDelete(null); // Clear professor to delete
  };

  return (
    <main>
      {/* Title and Breadcrumb */}
      <h1 className="text-3xl font-semibold mb-2">Instructor Management</h1>
      <ul className="flex gap-1 text-sm">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Instructors</a></li>
      </ul>

      <h3 className="text-2xl font-semibold pt-6 pb-6">All Instructors Data Summary</h3>

      <div className='bg-white rounded-lg'>
        {/* Top Container (Search Bar + Dropdown + Button) */}
        <div className="flex items-center justify-between space-x-4 p-6">
          {/* Search Bar */}
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-1/3"
            placeholder="Search by professor name"
            // Add search logic here if needed
          />

          {/* Program Dropdown */}
          <select
            className="p-3 border border-gray-300 rounded-md w-1/3"
            // Add program filter logic here if needed
          >
            <option value="all">All Programs</option>
            <option value="bscs">BSCS</option>
            <option value="bsit">BSIT</option>
          </select>

          {/* Search Button */}
          <button
            className="px-10 py-2 bg-green-700 text-white hover:bg-green-600"
            // Add search button handler
          >
            Search
          </button>
        </div>

        {/* Mid Container (Table) */}
        <div className="p-6">
          <table className="min-w-full table-auto border-collapse">
            <thead className="text-sm text-green-600">
              <tr>
                <th className="px-4 py-2 text-center">ID</th>
                <th className="px-4 py-2 text-center">Professor</th>
                <th className="px-4 py-2 text-center">Subjects</th>
                <th className="px-4 py-2 text-center">Program</th>
                <th className="px-4 py-2 text-center">Year Level</th>
                <th className="px-4 py-2 text-center">Classes</th>
                <th className="px-4 py-2 text-center">Days</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* Dynamically render rows */}
              {professors.map((professor) => (
                <tr key={professor.id}>
                  <td className="px-4 py-2 text-center">{professor.id}</td>
                  <td className="px-4 py-2 text-center">{professor.professor}</td>
                  <td className="px-4 py-2 text-center">{professor.subjects}</td>
                  <td className="px-4 py-2 text-center">{professor.program}</td>
                  <td className="px-4 py-2 text-center">{professor.yearlevel}</td>
                  <td className="px-4 py-2 text-center">{professor.classes}</td>
                  <td className="px-4 py-2 text-center">{professor.days}</td>
                  <td className="px-4 py-2 text-center">
                    {/* Edit Button */}
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-4"
                      onClick={() => handleEditClick(professor)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" fill="#5f6368" viewBox="0 -960 960 960">
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/>
                      </svg>
                    </button>

                    {/* Delete Button */}
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteClick(professor)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BD4C31"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Professor</h2>
            <form>
              {/* Form Fields */}
              <div>
                <label className="block text-sm font-medium">Professor Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedProfessor?.professor || ''}
                  onChange={(e) => setSelectedProfessor({ ...selectedProfessor, professor: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Subject Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedProfessor?.subjects || ''}
                  onChange={(e) => setSelectedProfessor({ ...selectedProfessor, subjects: e.target.value })}
                />
              </div>

              {/* Other input fields for Program, Year Level, Classes, Days */}
              <div>
                <label className="block text-sm font-medium">Program</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedProfessor?.program || ''}
                  onChange={(e) => setSelectedProfessor({ ...selectedProfessor, program: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Year Level</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedProfessor?.yearlevel || ''}
                  onChange={(e) => setSelectedProfessor({ ...selectedProfessor, yearlevel: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Classes</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedProfessor?.classes || ''}
                  onChange={(e) => setSelectedProfessor({ ...selectedProfessor, classes: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Days</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedProfessor?.days || ''}
                  onChange={(e) => setSelectedProfessor({ ...selectedProfessor, days: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md"
                  onClick={handleReset}
                >
                  Reset
                </button>

                <button
                  type="button"
                  className="px-4 py-2 bg-green-700 text-white rounded-md"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete {professorToDelete?.professor}?</p>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Instructor;

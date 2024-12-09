import React, { useState } from 'react';

const Students = () => {
  // Example student data
  const allStudents = [
    { id: 1, studentNo: '202211839', firstName: 'Mary Ann', middleName: 'Torres', lastName: 'Motol', suffix: 'NA', dob: '02/05/2001', program: 'BSCS', status: 'Regular', yearEnrolled: 2022,  },
    { id: 2, studentNo: '202211840', firstName: 'John', middleName: 'William', lastName: 'Doe', suffix: 'Jr', dob: '10/02/2000', program: 'BSIT', status: 'Irregular', yearEnrolled: 2021,  },
    { id: 3, studentNo: '202211841', firstName: 'Jane', middleName: 'Marie', lastName: 'Smith', suffix: 'Sr', dob: '06/15/1999', program: 'BSBA', status: 'Returnee', yearEnrolled: 2023,  },
    { id: 4, studentNo: '202211842', firstName: 'Alice', middleName: 'Grace', lastName: 'Wang', suffix: 'NA', dob: '03/25/2002', program: 'BSCS', status: 'Regular', yearEnrolled: 2022, },
    // Add more students...
  ];

  // State hooks
  const [name, setName] = useState('');
  const [status, setStatus] = useState('regular');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredStudents, setFilteredStudents] = useState(allStudents);
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false); // Edit Modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Delete Modal
  const [selectedStudent, setSelectedStudent] = useState(null); // For editing
  const [originalStudent, setOriginalStudent] = useState(null); // To reset changes
  const [studentToDelete, setStudentToDelete] = useState(null); // For deletion

  // Constants for pagination
  const rowsPerPage = 10;

  // Filter students based on name and status
  const filterStudents = () => {
    const filtered = allStudents.filter((student) => {
      return (
        (student.firstName.toLowerCase().includes(name.toLowerCase()) || student.lastName.toLowerCase().includes(name.toLowerCase())) &&
        (status === 'all' || student.status.toLowerCase() === status.toLowerCase())
      );
    });
    setFilteredStudents(filtered);
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  // Handle search button click
  const handleSearch = () => {
    filterStudents();
  };

  // Handle pagination
  const totalPages = Math.ceil(filteredStudents.length / rowsPerPage);
  const currentRows = filteredStudents.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle Previous and Next buttons
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Open Edit Modal and populate with student data
  const handleEditClick = (student) => {
    setSelectedStudent({ ...student }); // Create a copy to edit
    setOriginalStudent({ ...student }); // Store the original data for reset
    setIsModalOpen(true);
  };

  // Handle Save in Edit Modal
  const handleSave = () => {
    if (selectedStudent) {
      // Update student list with edited data
      setFilteredStudents((prevStudents) => {
        return prevStudents.map((stu) =>
          stu.id === selectedStudent.id ? selectedStudent : stu
        );
      });
      setIsModalOpen(false); // Close modal after saving
    }
  };

  // Handle Reset in Edit Modal
  const handleReset = () => {
    setSelectedStudent({ ...originalStudent }); // Revert to original data
  };

  // Open Delete Confirmation Modal
  const handleDeleteClick = (student) => {
    setStudentToDelete(student); // Store the student to be deleted
    setIsDeleteModalOpen(true); // Open delete confirmation modal
  };

  // Confirm deletion
  const handleDeleteConfirm = () => {
    setFilteredStudents(filteredStudents.filter((stu) => stu.id !== studentToDelete.id)); // Remove student from list
    setIsDeleteModalOpen(false); // Close the delete confirmation modal
    setStudentToDelete(null); // Clear student to delete
  };

  // Cancel deletion
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false); // Close the delete confirmation modal
    setStudentToDelete(null); // Clear student to delete
  };

  return (
    <main>
      {/* Title and Breadcrumb */}
      <h1 className="text-3xl font-semibold mb-2">Student Management</h1>
      <ul className="flex gap-1 text-sm">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">All Students</a></li>
      </ul>

      <h3 className="text-2xl font-semibold pt-6 pb-6">All Students Data Summary</h3>

      <div className='bg-white rounded-lg'>
        {/* Top Container (Search Bar + Dropdown + Button) */}
        <div className="flex items-center justify-between space-x-4 p-6">
          {/* Search Bar */}
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-1/3"
            placeholder="Search with name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Status Dropdown */}
          <select
            className="p-3 border border-gray-300 rounded-md w-1/3"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="regular">Regular</option>
            <option value="irregular">Irregular</option>
            <option value="returnee">Returnee</option>
            <option value="all">All</option>
          </select>

          {/* Search Button */}
          <button
            className="px-10 py-2 bg-green-700 text-white hover:bg-green-600 rounded-lg"
            onClick={handleSearch}
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
                <th className="px-4 py-2 text-center">Student no.</th>
                <th className="px-4 py-2 text-center">First Name</th>
                <th className="px-4 py-2 text-center">Middle Name</th>
                <th className="px-4 py-2 text-center">Last Name</th>
                <th className="px-4 py-2 text-center">Suffix</th>
                <th className="px-4 py-2 text-center">Date of Birth</th>
                <th className="px-4 py-2 text-center">Program</th>
                <th className="px-4 py-2 text-center">Status</th>
                <th className="px-4 py-2 text-center">Year Enrolled</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* Dynamically render rows based on current page */}
              {currentRows.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 border-b border-gray-300">
                  <td className="px-4 py-2 text-center">{student.id}</td>
                  <td className="px-4 py-2 text-center">{student.studentNo}</td>
                  <td className="px-4 py-2 text-center">{student.firstName}</td>
                  <td className="px-4 py-2 text-center">{student.middleName}</td>
                  <td className="px-4 py-2 text-center">{student.lastName}</td>
                  <td className="px-4 py-2 text-center">{student.suffix}</td>
                  <td className="px-4 py-2 text-center">{student.dob}</td>
                  <td className="px-4 py-2 text-center">{student.program}</td>
                  <td className="px-4 py-2 text-center">{student.status}</td>
                  <td className="px-4 py-2 text-center">{student.yearEnrolled}</td>
                  <td className="px-4 py-2 text-center">
                    {/* Actions: Edit and Delete buttons */}
                    <div className="flex justify-center gap-2">
                      {/* Edit Button */}
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleEditClick(student)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" fill="#5f6368" viewBox="0 -960 960 960">
                          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/>
                        </svg>
                      </button>

                      {/* Delete Button */}
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteClick(student)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BD4C31">
                          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Container (Pagination) */}
        <div className="mb-6 p-4 rounded-md">
          {/* Pagination Controls */}
          <div className="flex items-center justify-end space-x-2">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-md hover:text-green-700"
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Page Number Buttons */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? 'bg-green-700 text-white' : 'bg-white text-gray-700'}`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-md hover:text-green-700"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedStudent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Edit Student</h2>
            <form>
              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Student No.</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.studentNo || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, studentNo: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.firstName || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Middle Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.middleName || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, middleName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.lastName || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, lastName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Suffix</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.suffix || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, suffix: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.dob || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, dob: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Program</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.program || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, program: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Status</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.status || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, status: e.target.value })}
                  >
                    <option value="Regular">Regular</option>
                    <option value="Irregular">Irregular</option>
                    <option value="Returnee">Returnee</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">Year Enrolled</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedStudent.yearEnrolled || ''}
                    onChange={(e) => setSelectedStudent({ ...selectedStudent, yearEnrolled: e.target.value })}
                  />
                </div>
                
              </div>

              <div className="flex justify-end gap-4 mt-6">
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
      {isDeleteModalOpen && studentToDelete && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete <strong>{studentToDelete.firstName} {studentToDelete.lastName}</strong>?</p>
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

export default Students;

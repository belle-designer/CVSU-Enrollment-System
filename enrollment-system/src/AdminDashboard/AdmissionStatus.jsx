import React, { useState } from 'react';

const AdmissionStatus = () => {
  // Example student data with different admission statuses
  const allStudents = [
    { id: 1, studentNo: '202211839', firstName: 'Mary Ann', middleName: 'Torres', lastName: 'Motol', suffix: 'NA', dob: '02/05/2001', program: 'BSCS', examresult: 'Failed', adstat: 'Denied' },
    { id: 2, studentNo: '202211840', firstName: 'John', middleName: 'William', lastName: 'Doe', suffix: 'Jr', dob: '10/02/2000', program: 'BSIT', examresult: 'Passed', adstat: 'Accepted' },
    { id: 3, studentNo: '202211841', firstName: 'Jane', middleName: 'Marie', lastName: 'Smith', suffix: 'Sr', dob: '06/15/1999', program: 'BSIT', examresult: 'Passed', adstat: 'Pending' },
    { id: 4, studentNo: '202211842', firstName: 'Alice', middleName: 'Grace', lastName: 'Wang', suffix: 'NA', dob: '03/25/2002', program: 'BSCS', examresult: 'Failed', adstat: 'Denied' },
    // Add more students...
  ];

  // State hooks
  const [name, setName] = useState('');
  const [status, setStatus] = useState('all');  // Default value 'all' to show all students
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredStudents, setFilteredStudents] = useState(allStudents);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'edit' or 'delete'
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Constants for pagination
  const rowsPerPage = 10;

  // Filter students based on name and admission status
  const filterStudents = () => {
    const filtered = allStudents.filter((student) => {
      return (
        (student.firstName.toLowerCase().includes(name.toLowerCase()) || student.lastName.toLowerCase().includes(name.toLowerCase())) &&
        (status === 'all' || student.adstat.toLowerCase() === status.toLowerCase())
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

  // Open the modal for editing or deleting
  const openModal = (student, type) => {
    setSelectedStudent(student);
    setModalType(type);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
    setModalType('');
  };

  // Handle delete confirmation
  const handleDelete = () => {
    // Logic to delete the student
    alert(`Student with ID ${selectedStudent.id} deleted.`);
    closeModal();
  };

  // Handle editing the student details
  const handleEdit = () => {
    // Logic to save the edited student details
    alert(`Student with ID ${selectedStudent.id} edited.`);
    closeModal();
  };

  return (
    <main>
      {/* Title and Breadcrumb */}
      <h1 className="text-3xl font-semibold mb-2">Admission Management</h1>
      <ul className="flex gap-1 text-sm">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Admission Status</a></li>
      </ul>

      <h3 className="text-2xl font-semibold pt-6 pb-6">Admission Status</h3>

      <div className='bg-white rounded-lg'>
        {/* Top Container (Search Bar + Dropdown + Button) */}
        <div className="flex items-center justify-between space-x-4 p-6">
          {/* Search Bar */}
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-1/3"
            placeholder="Search by name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Status Dropdown */}
          <select
            className="p-3 border border-gray-300 rounded-md w-1/3"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="denied">Denied</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
          </select>

          {/* Search Button */}
          <button
            className="px-10 py-2 bg-green-700 text-white hover:bg-green-600"
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
                <th className="px-4 py-2 text-center">Student No.</th>
                <th className="px-4 py-2 text-center">First Name</th>
                <th className="px-4 py-2 text-center">Middle Name</th>
                <th className="px-4 py-2 text-center">Last Name</th>
                <th className="px-4 py-2 text-center">Suffix</th>
                <th className="px-4 py-2 text-center">Date of Birth</th>
                <th className="px-4 py-2 text-center">Program</th>
                <th className="px-4 py-2 text-center">Exam Result</th>
                <th className="px-4 py-2 text-center">Admission Status</th>
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
                  <td className="px-4 py-2 text-center">{student.examresult}</td>
                  <td className="px-4 py-2 text-center">{student.adstat}</td>
                  <td className="px-4 py-2 text-center">
                    {/* Actions: Edit and Delete buttons */}
                    <div className="flex justify-center gap-2">
                      <button className="text-blue-500 hover:text-blue-700" onClick={() => openModal(student, 'edit')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" fill="#5f6368" viewBox="0 -960 960 960">
                          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM120-360v-170l367-367q12-12 27-18t30-6q18 0 33 6t27 18q12 12 18 27t6 30q0 18-6 33t-18 27L654 585V760q0 18-12.5 30.5T612-360H120Z" />
                        </svg>
                      </button>
                      <button className="text-red-500 hover:text-red-700" onClick={() => openModal(student, 'delete')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" fill="#5f6368" viewBox="0 -960 960 960">
                          <path d="M720-120q-33 0-56.5-23.5T640-200v-560q0-33 23.5-56.5T720-840h357l-80 80H720v560h560v-278l80-80v358q0 33-23.5 56.5T880-120H720Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q18 0 33 6t27 18q12 12 18 27t6 30q0 18-6 33t-18 27L654 585V760q0 18-12.5 30.5T612-360H360Z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between p-6">
          <button onClick={handlePrev} className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50" disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded-md disabled:opacity-50" disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedStudent && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {modalType === 'edit' ? (
              <>
                <h3 className="text-xl font-semibold mb-4">Edit Student</h3>
                <p><strong>Student No:</strong> {selectedStudent.studentNo}</p>
                <p><strong>Name:</strong> {selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}</p>
                {/* Edit form fields for student */}
                <input type="text" defaultValue={selectedStudent.firstName} className="border p-2 rounded mt-2" />
                {/* Add other fields here */}
                <div className="flex justify-end mt-4">
                  <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-md ml-2">Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-4">Delete Student</h3>
                <p>Are you sure you want to delete student {selectedStudent.firstName}?</p>
                <div className="flex justify-end mt-4">
                  <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-md ml-2">Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default AdmissionStatus;

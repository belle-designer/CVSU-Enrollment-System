import React, { useState } from 'react';

const EnrollmentManagement = () => {
  // Sample enrollment data
  const enrollmentHistory = [
    { 
      id: 1, 
      studentName: "Mary Ann Motol", 
      program: "BSCS", 
      status: "Enrolled", 
      enrollDate: "2024-08-15", 
      semesterYear: "2024-2025", 
      dropDate: "N/A", 
      createdAt: "2024-08-01", 
      updatedAt: "2024-08-01"
    },
    { 
      id: 2, 
      studentName: "John Doe", 
      program: "BSIT", 
      status: "Pending", 
      enrollDate: "2023-12-10", 
      semesterYear: "2023-2024", 
      dropDate: "N/A", 
      createdAt: "2023-12-01", 
      updatedAt: "2023-12-10"
    },
    { 
      id: 3, 
      studentName: "Jane Smith", 
      program: "BSIT", 
      status: "Dropped", 
      enrollDate: "2023-05-05", 
      semesterYear: "2023-2024", 
      dropDate: "2023-05-20", 
      createdAt: "2023-05-01", 
      updatedAt: "2023-05-20"
    },
    { 
      id: 4, 
      studentName: "Alice Grace Wang", 
      program: "BSCS", 
      status: "Enrolled", 
      enrollDate: "2024-01-10", 
      semesterYear: "2024-2025", 
      dropDate: "N/A", 
      createdAt: "2024-01-01", 
      updatedAt: "2024-01-10"
    }
  ];

  // State hooks for search and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Filter students based on search term
  const filterStudents = () => {
    return enrollmentHistory.filter(student => 
      student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Handle pagination
  const totalPages = Math.ceil(filterStudents().length / rowsPerPage);
  const currentRows = filterStudents().slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

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

  // Handle Search Button Click
  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page after search
  };

  return (
    <main>
      <h1 className="text-3xl font-semibold mb-2">Enrollment Management</h1>
      <ul className="flex gap-1 text-sm mb-5">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Enrollment Management</a></li>
      </ul>

      <div className="bg-white rounded-lg">
        {/* Search Bar with Search Button */}
        <div className="flex items-center justify-between p-6">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-1/3"
            placeholder="Search by student name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-green-700 text-white hover:bg-green-600 rounded-md"
          >
            Search
          </button>
        </div>

        {/* Table Container */}
        <div className="p-6">
          <table className="min-w-full table-auto border-collapse">
            <thead className="text-sm text-green-600">
              <tr>
                <th className="px-4 py-2 text-center">Student Name</th>
                <th className="px-4 py-2 text-center">Program</th>
                <th className="px-4 py-2 text-center">Enrollment Status</th>
                <th className="px-4 py-2 text-center">Enroll Date</th>
                <th className="px-4 py-2 text-center">Semester Year</th>
                <th className="px-4 py-2 text-center">Drop Date</th>
                <th className="px-4 py-2 text-center">Created At</th>
                <th className="px-4 py-2 text-center">Updated At</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {currentRows.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50 border-b border-gray-300">
                  <td className="px-4 py-2 text-center">{entry.studentName}</td>
                  <td className="px-4 py-2 text-center">{entry.program}</td>
                  <td className="px-4 py-2 text-center">{entry.status}</td>
                  <td className="px-4 py-2 text-center">{entry.enrollDate}</td>
                  <td className="px-4 py-2 text-center">{entry.semesterYear}</td>
                  <td className="px-4 py-2 text-center">{entry.dropDate}</td>
                  <td className="px-4 py-2 text-center">{entry.createdAt}</td>
                  <td className="px-4 py-2 text-center">{entry.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="mb-6 p-4 rounded-md">
          <div className="flex items-center justify-end space-x-2">
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
    </main>
  );
};

export default EnrollmentManagement;

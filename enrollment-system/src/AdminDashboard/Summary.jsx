import React, { useState } from 'react';

const Summary = () => {
  // Example student data
  const allStudents = [
    { id: 1, studentNo: '202211839', firstName: 'Mary Ann', middleName: 'Torres', lastName: 'Motol', suffix: 'NA', program: 'BSCS', yearLevel: '2nd year 1st sem', status: 'Regular', paymentStatus: 'Paid' },
    { id: 2, studentNo: '202211840', firstName: 'John', middleName: 'William', lastName: 'Doe', suffix: 'Jr', program: 'BSIT', yearLevel: '3rd year 2nd sem', status: 'Irregular', paymentStatus: 'Pending' },
    { id: 3, studentNo: '202211841', firstName: 'Jane', middleName: 'Marie', lastName: 'Smith', suffix: 'Sr', program: 'BSBA', yearLevel: '4th year 2nd sem', status: 'Returnee', paymentStatus: 'Paid' },
    { id: 4, studentNo: '202211842', firstName: 'Alice', middleName: 'Grace', lastName: 'Wang', suffix: 'NA', program: 'BSCS', yearLevel: '2nd year 1st sem', status: 'Regular', paymentStatus: 'Pending' },
  ];

  // State hooks
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredStudents, setFilteredStudents] = useState(allStudents);

  // Constants for pagination
  const rowsPerPage = 5;

  // Filter students based on search term and status
  const filterStudents = () => {
    let filtered = allStudents.filter((student) => {
      const matchesSearch = student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || student.studentNo.includes(searchTerm);
      const matchesStatus = statusFilter === 'all' || student.status.toLowerCase() === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
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

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-2">Reports</h1>
      <ul className="flex gap-1 text-sm mb-5">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Report</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Summary</a></li>
      </ul>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Student Summary</h1>

        {/* Print Icon on the right side */}
        <button className="p-2 rounded-md hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000">
            <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"/>
          </svg>
        </button>
      </div>

      <div className='bg-white rounded-lg p-5'>
      {/* Search Bar and Filters */}
      <div className="flex items-center justify-between gap-4 mb-6 bg">
        {/* Search Bar */}
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md w-1/3"
          placeholder="Search by name or student no."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Status Dropdown - made wider */}
        <select
          className="p-2 border border-gray-300 rounded-md w-1/3"  // Increased width here
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="regular">Regular</option>
          <option value="irregular">Irregular</option>
          <option value="returnee">Returnee</option>
        </select>

        {/* Search Button - made wider and aligned correctly */}
        <button
          className="px-8 py-2 bg-green-700 text-white rounded-md"  // Increased padding for a wider button
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Table for Student Summary */}
      <div className="bg-white rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-sm text-gray-600">
            <tr>
              <th className="px-4 py-2 text-center">ID</th>
              <th className="px-4 py-2 text-center">Student No.</th>
              <th className="px-4 py-2 text-center">First Name</th>
              <th className="px-4 py-2 text-center">Middle Name</th>
              <th className="px-4 py-2 text-center">Last Name</th>
              <th className="px-4 py-2 text-center">Suffix</th>
              <th className="px-4 py-2 text-center">Program</th>
              <th className="px-4 py-2 text-center">Year Level</th>
              <th className="px-4 py-2 text-center">Student Status</th>
              <th className="px-4 py-2 text-center">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {currentRows.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 border-b border-gray-300">
                <td className="px-4 py-2 text-center">{student.id}</td>
                <td className="px-4 py-2 text-center">{student.studentNo}</td>
                <td className="px-4 py-2 text-center">{student.firstName}</td>
                <td className="px-4 py-2 text-center">{student.middleName}</td>
                <td className="px-4 py-2 text-center">{student.lastName}</td>
                <td className="px-4 py-2 text-center">{student.suffix}</td>
                <td className="px-4 py-2 text-center">{student.program}</td>
                <td className="px-4 py-2 text-center">{student.yearLevel}</td>
                <td className="px-4 py-2 text-center">{student.status}</td>
                <td className="px-4 py-2 text-center">{student.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 p-5">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
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
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      </div>
    </main>
  );
};

export default Summary;

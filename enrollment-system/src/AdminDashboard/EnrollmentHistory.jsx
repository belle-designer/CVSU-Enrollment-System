import React, { useState } from 'react';

const EnrollmentHistory = () => {
  // Sample data for enrollment history with student names
  const [enrollmentHistory, setEnrollmentHistory] = useState([
    {
      full_name: 'Mary Ann Motol',
      enroll_date: '2024-08-15',
      status: 'Enrolled',
      semester_year: '2024-2025',
      drop_date: null,
      created_at: '2024-08-01T10:00:00Z',
      updated_at: '2024-08-01T10:00:00Z',
    },
    {
      full_name: 'John Doe',
      enroll_date: '2023-12-10',
      status: 'Pending',
      semester_year: '2023-2024',
      drop_date: null,
      created_at: '2023-12-01T09:00:00Z',
      updated_at: '2023-12-10T12:00:00Z',
    },
    {
      full_name: 'Jane Smith',
      enroll_date: '2023-05-05',
      status: 'Dropped',
      semester_year: '2023-2024',
      drop_date: '2023-05-20',
      created_at: '2023-05-01T08:30:00Z',
      updated_at: '2023-05-20T15:00:00Z',
    },
    {
      full_name: 'Alice Wang',
      enroll_date: '2022-10-15',
      status: 'Enrolled',
      semester_year: '2022-2023',
      drop_date: null,
      created_at: '2022-10-01T11:00:00Z',
      updated_at: '2022-10-15T13:00:00Z',
    },
  ]);

  // States for search and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Number of rows per page

  // Format date for display
  const formatDate = (date) => {
    if (!date) return 'N/A';
    const d = new Date(date);
    return d.toLocaleDateString('en-US');
  };

  // Filtered data based on search query
  const filteredData = enrollmentHistory.filter(
    (item) =>
      item.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.semester_year.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentRows = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <main>
      {/* Title and Breadcrumb */}
      <h1 className="text-3xl font-semibold mb-2">Enrollment History</h1>
      <ul className="flex gap-1 text-sm">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Enrollment Management</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Enrollment History</a></li>
      </ul>

      {/* Descriptions for each column */}
      <div className="mb-4 text-sm text-gray-700 pt-3">
        <p><strong>Student Name:</strong> The full name of the student.</p>
        <p><strong>Enroll Date:</strong> The date the student enrolled in the program.</p>
        <p><strong>Status:</strong> The current status of the student's enrollment (e.g., Enrolled, Pending, Dropped).</p>
        <p><strong>Semester Year:</strong> The academic year the student is enrolled for (e.g., 2023-2024).</p>
        <p><strong>Drop Date:</strong> The date the student dropped the course or was removed (if applicable).</p>
        <p><strong>Created At:</strong> The timestamp when the enrollment record was created.</p>
        <p><strong>Updated At:</strong> The timestamp when the enrollment record was last updated.</p>
      </div>

      {/* Container for Search Bar, Table, and Pagination */}
      <div className="bg-white rounded-lg shadow-lg p-6">

        {/* Search Bar */}
        <div className="flex items-center justify-between space-x-4 mb-6">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-1/3"
            placeholder="Search by name or semester"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="px-10 py-2 bg-green-700 text-white hover:bg-green-600">
            Search
          </button>
        </div>

        {/* Table */}
        <table className="min-w-full table-auto border-collapse">
          <thead className="text-sm text-green-600">
            <tr>
              <th className="px-4 py-2 text-center">Student Name</th>
              <th className="px-4 py-2 text-center">Enroll Date</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center">Semester Year</th>
              <th className="px-4 py-2 text-center">Drop Date</th>
              <th className="px-4 py-2 text-center">Created At</th>
              <th className="px-4 py-2 text-center">Updated At</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentRows.length > 0 ? (
              currentRows.map((history, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b border-gray-300">
                  <td className="px-4 py-2 text-center">{history.full_name}</td>
                  <td className="px-4 py-2 text-center">{formatDate(history.enroll_date)}</td>
                  <td className="px-4 py-2 text-center">{history.status}</td>
                  <td className="px-4 py-2 text-center">{history.semester_year}</td>
                  <td className="px-4 py-2 text-center">{formatDate(history.drop_date)}</td>
                  <td className="px-4 py-2 text-center">{formatDate(history.created_at)}</td>
                  <td className="px-4 py-2 text-center">{formatDate(history.updated_at)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center px-4 py-2">No Enrollment History Available</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-end items-center space-x-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-md hover:text-green-700"
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
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
    </main>
  );
};

export default EnrollmentHistory;

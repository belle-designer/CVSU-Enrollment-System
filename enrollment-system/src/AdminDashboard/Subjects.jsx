import React, { useState } from 'react';

const Subjects = () => {
  // Example professor data with subjects, sections, and year levels
  const allProfessors = [
    { id: 1, professor: 'Joven Rios', subjects: 'COSC 101, COSC 85', program: 'BSCS', sections: 'BSCS 2-2, BSCS 2-5', yearlevel: '2nd year 1st sem' },
    { id: 2, professor: 'Mikay Arciaga', subjects: 'COSC 70', program: 'BSIT', sections: 'BSCS 3-2, BSCS 3-6', yearlevel: '3rd year 2nd sem' },
    { id: 3, professor: 'Dhan Belgica', subjects: 'COSC 25', program: 'BSCS', sections: 'BSIT 4-1, BSCS 4-2', yearlevel: '4th year 2nd sem' },
    { id: 4, professor: 'Mary Ann Motol', subjects: 'COSC 120, COSC 115', program: 'BSIT', sections: 'BSIT 2-2, BSIT 2-3', yearlevel: '2nd year 1st sem' },
  ];

  // State hooks
  const [name, setName] = useState('');
  const [program, setProgram] = useState('BSCS');  // Default set to BSCS
  const [subject, setSubject] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProfessors, setFilteredProfessors] = useState(allProfessors);

  // Constants for pagination
  const rowsPerPage = 10;

  // Create a list of unique programs and subjects from the data
  const uniqueSubjects = Array.from(new Set(allProfessors.flatMap(prof => prof.subjects.split(', '))));

  // Filter professors based on name, program, and subject
  const filterProfessors = () => {
    const filtered = allProfessors.filter((professor) => {
      const nameMatch = professor.professor.toLowerCase().includes(name.toLowerCase());
      const subjectMatch = subject === 'all' || professor.subjects.toLowerCase().includes(subject.toLowerCase());
      return nameMatch && subjectMatch;
    });
    setFilteredProfessors(filtered);
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  // Handle search button click
  const handleSearch = () => {
    filterProfessors();
  };

  // Handle pagination
  const totalPages = Math.ceil(filteredProfessors.length / rowsPerPage);
  const currentRows = filteredProfessors.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

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
    <main>
      {/* Title and Breadcrumb */}
      <h1 className="text-3xl font-semibold mb-2">Subject Management</h1>
      <ul className="flex gap-1 text-sm mb-5">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Subject</a></li>
      </ul>

      <div className='bg-white rounded-lg'>
        {/* Top Container (Search Bar + Dropdown + Button) */}
        <div className="flex items-center justify-between space-x-4 p-6">
          {/* Search Bar */}
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-md w-1/3"
            placeholder="Search by professor name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Subject Dropdown */}
          <select
            className="p-3 border border-gray-300 rounded-md w-1/3"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="all">All Subjects</option>
            {uniqueSubjects.map((sub, index) => (
              <option key={index} value={sub}>{sub}</option>
            ))}
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
                <th className="px-4 py-2 text-center">Professor</th>
                <th className="px-4 py-2 text-center">Subjects</th>
                <th className="px-4 py-2 text-center">Sections</th>
                <th className="px-4 py-2 text-center">Year Level</th>
                <th className="px-4 py-2 text-center"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* Dynamically render rows based on current page */}
              {currentRows.map((professor) => (
                <tr key={professor.id} className="hover:bg-gray-50 border-b border-gray-300">
                  <td className="px-4 py-2 text-center">{professor.id}</td>
                  <td className="px-4 py-2 text-center">{professor.professor}</td>
                  <td className="px-4 py-2 text-center">{professor.subjects}</td>
                  <td className="px-4 py-2 text-center">{professor.sections}</td>
                  <td className="px-4 py-2 text-center">{professor.yearlevel}</td>
                  <td className="px-4 py-2 text-center">
                    {/* Actions: Edit and Delete buttons */}
                    <div className="flex justify-center gap-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" fill="#5f6368" viewBox="0 -960 960 960">
                          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/>
                        </svg>
                      </button>

                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#Ff0000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
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
    </main>
  );
};

export default Subjects;

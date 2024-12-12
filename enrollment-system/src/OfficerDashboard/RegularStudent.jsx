import React, { useState } from 'react';

const RegularStudent = () => {
  // Mock data similar to Students.jsx
  const allStudents = [
    { id: 1, studentNo: '202211839', firstName: 'Mary Ann', middleName: 'Torres', lastName: 'Motol', suffix: 'NA', dob: '02/05/2001', program: 'BSCS', status: 'Regular', yearEnrolled: 2022, paymentStatus: 'Paid' },
    { id: 2, studentNo: '202211840', firstName: 'John', middleName: 'William', lastName: 'Doe', suffix: 'Jr', dob: '10/02/2000', program: 'BSIT', status: 'Irregular', yearEnrolled: 2021, paymentStatus: 'Paid' },
    { id: 3, studentNo: '202211841', firstName: 'Jane', middleName: 'Marie', lastName: 'Smith', suffix: 'Sr', dob: '06/15/1999', program: 'BSBA', status: 'Returnee', yearEnrolled: 2023, paymentStatus: 'Paid' },
    { id: 4, studentNo: '202211842', firstName: 'Alice', middleName: 'Grace', lastName: 'Wang', suffix: 'NA', dob: '03/25/2002', program: 'BSCS', status: 'Regular', yearEnrolled: 2022, paymentStatus: 'Paid' },
    // Add more students as needed...
  ];

  // Filter only regular students
  const regularStudents = allStudents.filter(student => student.status === 'Regular');

  return (
    <main>
        <h1 className="text-3xl font-semibold mb-2">Student Management</h1>
        <ul className="flex gap-1 text-sm">
            <li><a href="#" className="text-blue-500">Home</a></li>
            <li className="text-gray-400">/</li>
            <li><a href="#" className="text-gray-700 font-semibold">RegularStudents</a></li>
        </ul>

      <h3 className="text-2xl font-semibold pt-6 pb-6">Regular Students Data Summary</h3>

      <div className="bg-white rounded-lg p-6">
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
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center">Year Enrolled</th>
              <th className="px-4 py-2 text-center">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* Render only regular students */}
            {regularStudents.length > 0 ? (
              regularStudents.map(student => (
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
                  <td className="px-4 py-2 text-center">{student.paymentStatus}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="px-4 py-2 text-center">No Regular Students Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default RegularStudent;

import React from 'react';

const Checklist = () => {
  // Data for BSCS and BSIT checklist
  const bscsSubjects = [
    { semester: '1st Year 1st Sem', subjects: ['COSC 101 - Introduction to Computing', 'MATH 101 - College Algebra', 'ENG 101 - English Communication'] },
    { semester: '1st Year 2nd Sem', subjects: ['COSC 102 - Computer Programming', 'MATH 102 - Trigonometry', 'ENG 102 - Speech Communication'] },
    { semester: '2nd Year 1st Sem', subjects: ['COSC 201 - Data Structures', 'MATH 201 - Discrete Mathematics', 'ENG 201 - Technical Writing'] },
    { semester: '2nd Year 2nd Sem', subjects: ['COSC 202 - Object-Oriented Programming', 'MATH 202 - Differential Calculus', 'COSC 203 - Computer Organization'] },
    { semester: '3rd Year 1st Sem', subjects: ['COSC 301 - Database Systems', 'COSC 302 - Computer Networks', 'MATH 301 - Probability & Statistics'] },
    { semester: '3rd Year 2nd Sem', subjects: ['COSC 303 - Operating Systems', 'COSC 304 - Software Engineering', 'COSC 305 - Web Development'] },
    { semester: '4th Year 1st Sem', subjects: ['COSC 401 - Software Engineering', 'COSC 402 - Artificial Intelligence', 'COSC 403 - Capstone Project'] },
    { semester: '4th Year 2nd Sem', subjects: ['COSC 404 - Cloud Computing', 'COSC 405 - Machine Learning', 'COSC 406 - Cybersecurity'] }
  ];

  const bsitSubjects = [
    { semester: '1st Year 1st Sem', subjects: ['COSC 100 - Fundamentals of Computing', 'MATH 100 - Basic Math', 'ENG 100 - Communication Skills'] },
    { semester: '1st Year 2nd Sem', subjects: ['COSC 101 - Introduction to Programming', 'MATH 101 - Algebra', 'ENG 101 - Technical Writing'] },
    { semester: '2nd Year 1st Sem', subjects: ['COSC 200 - Programming Fundamentals', 'MATH 200 - Discrete Math', 'IT 201 - Network Fundamentals'] },
    { semester: '2nd Year 2nd Sem', subjects: ['COSC 202 - Data Structures', 'IT 202 - Web Development', 'IT 203 - Database Management'] },
    { semester: '3rd Year 1st Sem', subjects: ['COSC 300 - Computer Graphics', 'COSC 301 - Data Analysis', 'IT 301 - Operating Systems'] },
    { semester: '3rd Year 2nd Sem', subjects: ['COSC 302 - Software Engineering', 'IT 302 - Systems Analysis', 'IT 303 - Information Security'] },
    { semester: '4th Year 1st Sem', subjects: ['COSC 400 - Web Design', 'COSC 401 - Mobile App Development', 'IT 400 - Project Management'] },
    { semester: '4th Year 2nd Sem', subjects: ['COSC 402 - Advanced Programming', 'IT 402 - IT Project', 'IT 403 - Capstone Project'] }
  ];

  return (
    <main>
      <h1 className="text-3xl font-semibold mb-6">Course Checklist</h1>
      
      {/* BSCS Checklist Table */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-center p-4 bg-green-100">BSCS (Bachelor of Science in Computer Science) Checklist</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead className="text-sm text-green-600">
            <tr>
              <th className="px-4 py-2 text-center">Semester</th>
              <th className="px-4 py-2 text-center">Subjects</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {bscsSubjects.map((item) => (
              <tr key={item.semester} className="hover:bg-gray-50 border-b border-gray-300">
                <td className="px-4 py-2 text-center">{item.semester}</td>
                <td className="px-4 py-2 text-center">{item.subjects.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BSIT Checklist Table */}
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center p-4 bg-blue-100">BSIT (Bachelor of Science in Information Technology) Checklist</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead className="text-sm text-blue-600">
            <tr>
              <th className="px-4 py-2 text-center">Semester</th>
              <th className="px-4 py-2 text-center">Subjects</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {bsitSubjects.map((item) => (
              <tr key={item.semester}className="hover:bg-gray-50 border-b border-gray-300">
                <td className="px-4 py-2 text-center">{item.semester}</td>
                <td className="px-4 py-2 text-center">{item.subjects.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Checklist;

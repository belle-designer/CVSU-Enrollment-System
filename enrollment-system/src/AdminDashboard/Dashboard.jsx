import React, { useState } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="w-full">
      <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
      <ul className="flex gap-1 text-sm">
        <li><a href="#" className="text-blue-500">Home</a></li>
        <li className="text-gray-400">/</li>
        <li><a href="#" className="text-gray-700 font-semibold">Dashboard</a></li>
      </ul>

      <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="p-5 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-semibold">1500</h2>
              <p className="text-sm">Students</p>
            </div>
            <i className="bx bx-male-female text-green-500 text-xl"></i>
          </div>
          <span className="block mt-6 h-2 w-full bg-gray-300 rounded-full relative mb-1">
            <span className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></span>
          </span>
          <span className="text-sm font-semibold">40%</span>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-semibold">234</h2>
              <p className="text-sm">Subjects</p>
            </div>
            <i className="bx bxs-notepad text-red-500 text-xl"></i>
          </div>
          <span className="block mt-6 h-2 w-full bg-gray-300 rounded-full relative mb-1">
            <span className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></span>
          </span>
          <span className="text-sm font-semibold">60%</span>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-semibold">465</h2>
              <p className="text-sm">Instructors</p>
            </div>
            <i className="bx bxs-group text-blue-500 text-xl"></i>
          </div>
          <span className="block mt-6 h-2 w-full bg-gray-300 rounded-full relative mb-1">
            <span className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: '30%' }}></span>
          </span>
          <span className="text-sm font-semibold">30%</span>
        </div>
      </div>

      <div className="mt-5 w-full flex flex-wrap gap-5 justify-center">
        <div className="flex flex-col flex-grow p-5 bg-white rounded-lg shadow-lg w-full lg:w-2/3">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-semibold">Summary Report</h3>
            <div className="relative flex items-center">
              <i className="bx bx-dots-horizontal-rounded cursor-pointer" onClick={toggleMenu}></i>
              <ul
                className={`absolute top-full right-0 w-36 bg-white rounded-lg shadow-md mt-2 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all ease-in-out duration-300`}
              >
                <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Edit</a></li>
                <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Save</a></li>
                <li><a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Remove</a></li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full table-auto text-center">
              {/* Table Header */}
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 rounded-tl-full rounded-bl-full">Student</th>
                  <th className="py-2 px-4">Year/Section</th>
                  <th className="py-2 px-4">Classification</th>
                  <th className="py-2 px-4 rounded-tr-full rounded-br-full">Status</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                <tr className="border-b mb-4">
                  <td className="py-2 px-4 font-semibold">Article 73</td>
                  <td className="py-2 px-4">2.9k</td>
                  <td className="py-2 px-4">210</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Article 72</td>
                  <td className="py-2 px-4">1.5k</td>
                  <td className="py-2 px-4">360</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Article 71</td>
                  <td className="py-2 px-4">1.1k</td>
                  <td className="py-2 px-4">150</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Article 70</td>
                  <td className="py-2 px-4">1.2k</td>
                  <td className="py-2 px-4">420</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Article 69</td>
                  <td className="py-2 px-4">2.6k</td>
                  <td className="py-2 px-4">190</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Article 68</td>
                  <td className="py-2 px-4">1.9k</td>
                  <td className="py-2 px-4">390</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Article 67</td>
                  <td className="py-2 px-4">1.2k</td>
                  <td className="py-2 px-4">580</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold">Article 66</td>
                  <td className="py-2 px-4">3.6k</td>
                  <td className="py-2 px-4">160</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-4 font-semibold">Article 65</td>
                  <td className="py-2 px-4">1.3k</td>
                  <td className="py-2 px-4">220</td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-green-500 text-white px-4 rounded-full">Published</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

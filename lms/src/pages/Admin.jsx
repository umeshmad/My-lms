import React from 'react';

export default function Admin() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#D5ECE9] to-[#EAF3F1]">
      {/* Navigation */}
      <nav className="bg-linear-to-r from-cyan-50 to-blue-50 shadow-xl border-b border-gray-200">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              A
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <button className="p-2 text-gray-600 hover:text-teal-600 transition-all relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">admin@lms.com</p>
              </div>
              <div className="w-10 h-10 bg-linear-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
          <p className="text-gray-600">Welcome back! Here's what's happening with your platform today.</p>
        </div>

        {/* Stats Cards - Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-teal-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-linear-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-semibold mb-1">Total Students</h3>
              <p className="text-4xl font-bold text-gray-800 mb-2">500+</p>
              <p className="text-sm text-gray-500">Active learners on platform</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">24 Live</span>
              </div>
              <h3 className="text-gray-500 text-sm font-semibold mb-1">Active Courses</h3>
              <p className="text-4xl font-bold text-gray-800 mb-2">24</p>
              <p className="text-sm text-gray-500">Available for enrollment</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-purple-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-linear-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">15 Active</span>
              </div>
              <h3 className="text-gray-500 text-sm font-semibold mb-1">Total Tutors</h3>
              <p className="text-4xl font-bold text-gray-800 mb-2">15</p>
              <p className="text-sm text-gray-500">Expert instructors</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-teal-600 hover:bg-teal-50 transition-all group">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-all">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <p className="font-semibold text-gray-700">Add Student</p>
            </button>

            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-all">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <p className="font-semibold text-gray-700">Add Course</p>
            </button>

            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-all">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <p className="font-semibold text-gray-700">Add Tutor</p>
            </button>

            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-green-600 hover:bg-green-50 transition-all group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-all">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <p className="font-semibold text-gray-700">Reports</p>
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Students */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Recent Students</h3>
              <button className="text-sm text-teal-600 font-semibold hover:text-teal-700">View All</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">John Doe</p>
                    <p className="text-xs text-gray-500">Web Development</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    JS
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Jane Smith</p>
                    <p className="text-xs text-gray-500">Python Programming</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                    MJ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Mike Johnson</p>
                    <p className="text-xs text-gray-500">Digital Marketing</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">Inactive</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white font-bold">
                    SW
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Williams</p>
                    <p className="text-xs text-gray-500">UI/UX Design</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
              <button className="text-sm text-teal-600 font-semibold hover:text-teal-700">View All</button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">New student enrolled in Web Development</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Course "Python Programming" was updated</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">New tutor joined the platform</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Monthly report generated successfully</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">System maintenance completed</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Management */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Course Management</h3>
            <button className="px-5 py-2 bg-linear-to-r from-teal-500 to-teal-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all">
              + Add New Course
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Course Name</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Students</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Tutor</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Status</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">Web Development Basics</p>
                    <p className="text-xs text-gray-500">8 weeks • 30 lessons</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">150</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-700">Dr. John Smith</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">Edit</button>
                      <button className="text-gray-600 hover:text-gray-700 font-semibold text-sm">View</button>
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">Python Programming</p>
                    <p className="text-xs text-gray-500">10 weeks • 40 lessons</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">120</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-700">Dr. Sarah Lee</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">Edit</button>
                      <button className="text-gray-600 hover:text-gray-700 font-semibold text-sm">View</button>
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">Digital Marketing</p>
                    <p className="text-xs text-gray-500">6 weeks • 25 lessons</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">95</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-700">Prof. Mike Brown</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">Edit</button>
                      <button className="text-gray-600 hover:text-gray-700 font-semibold text-sm">View</button>
                    </div>
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-all">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">UI/UX Design</p>
                    <p className="text-xs text-gray-500">7 weeks • 28 lessons</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800">85</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-700">Emma Davis</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Draft</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">Edit</button>
                      <button className="text-gray-600 hover:text-gray-700 font-semibold text-sm">View</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
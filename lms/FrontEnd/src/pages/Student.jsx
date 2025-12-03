import React from 'react'

export default function Student() {
  return (
     <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Web Development Fundamentals</h1>
          <p className="text-gray-600">Complete lessons and assignments to finish the course</p>
          <div className="mt-4 flex gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">3/8 Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-600">1/4 Assignments</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Lessons</h2>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <h3 className="font-medium text-gray-900">Introduction to HTML</h3>
                    <p className="text-sm text-gray-500">15 min</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Completed</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <h3 className="font-medium text-gray-900">CSS Basics</h3>
                    <p className="text-sm text-gray-500">20 min</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Completed</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <h3 className="font-medium text-gray-900">JavaScript Fundamentals</h3>
                    <p className="text-sm text-gray-500">30 min</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Completed</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-blue-200 rounded-lg bg-blue-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <div>
                    <h3 className="font-medium text-gray-900">Responsive Design</h3>
                    <p className="text-sm text-gray-500">25 min</p>
                  </div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">In Progress</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-gray-900">React Introduction</h3>
                    <p className="text-sm text-gray-500">35 min</p>
                  </div>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Locked</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-900">Assignments</h2>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div>
                  <h3 className="font-medium text-gray-900">Build a Personal Portfolio</h3>
                  <p className="text-sm text-gray-500">Due: Dec 10, 2025</p>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Submitted</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-orange-200 rounded-lg bg-orange-50 cursor-pointer">
                <div>
                  <h3 className="font-medium text-gray-900">CSS Grid Layout Challenge</h3>
                  <p className="text-sm text-gray-500">Due: Dec 15, 2025</p>
                </div>
                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Pending</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer opacity-60">
                <div>
                  <h3 className="font-medium text-gray-900">JavaScript Calculator</h3>
                  <p className="text-sm text-gray-500">Due: Dec 20, 2025</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Locked</span>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer opacity-60">
                <div>
                  <h3 className="font-medium text-gray-900">Final Project</h3>
                  <p className="text-sm text-gray-500">Due: Dec 30, 2025</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Locked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

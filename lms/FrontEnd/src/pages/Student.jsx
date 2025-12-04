import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CheckCircle, Clock, BookOpen, FileText } from 'lucide-react';

export default function Student() {
  const { studentId } = useParams();
  const [studentdata, setStudentData] = useState(null);
  const [courseContent, setCourseContent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/student/${studentId}`)
      .then((response) => {
        setStudentData(response.data.student);
        setCourseContent(response.data.courseContent);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
        setError('Failed to load student dashboard. Please try again.');
        setLoading(false);
      });
  }, [studentId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (!studentdata || !courseContent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No data available</p>
        </div>
      </div>
    );
  }


  const completedLessons = courseContent.lessons.filter(l => l.status === 'completed').length;
  const totallessons = courseContent.lessons.length;
  const completedassignments = courseContent.assignments.filter(a => a.status === 'submitted').length;
  const totalAssignments = courseContent.assignments.length;

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
      case 'submitted':
        return <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Completed</span>;
      case 'in-progress':
        return <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">In Progress</span>;
      case 'pending':
        return <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Pending</span>;
      case 'locked':
        return <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Locked</span>;
      default:
        return <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Not Started</span>;
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed':
      case 'submitted':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
      case 'pending':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{courseContent.courseName}</h1>
          <p className="text-gray-600">Welcome, {studentdata.fullname}!</p>
          <p className="text-sm text-gray-500">Student ID: {studentdata.student_id || 'N/A'}</p>
          
          <div className="mt-4 flex gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">{completedLessons}/{totallessons} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-600">{completedassignments}/{totalAssignments} Assignments</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>{Math.round(((completedLessons + completedassignments) / (totallessons + totalAssignments)) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-teal-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((completedLessons + completedassignments) / (totallessons + totalAssignments)) * 100}%` }}
              ></div>
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
              {courseContent.lessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all
                    ${lesson.status === 'in-progress' ? 'border-blue-200 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}
                    ${lesson.status === 'locked' ? 'opacity-60' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(lesson.status)}
                    <div>
                      <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                      <p className="text-sm text-gray-500">{lesson.duration}</p>
                    </div>
                  </div>
                  {getStatusBadge(lesson.status)}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-900">Assignments</h2>
            </div>
            <div className="space-y-3">
              {courseContent.assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all
                    ${assignment.status === 'pending' ? 'border-orange-200 bg-orange-50' : 'border-gray-200 hover:bg-gray-50'}
                    ${assignment.status === 'locked' ? 'opacity-60' : ''}`}
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                    <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                  </div>
                  {getStatusBadge(assignment.status)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// src/App.jsx - Simplified version that works without full context setup
import React, { useState } from 'react';
import LoadingSpinner from './components/common/LoadingSpinner';

// Import your existing component
// You can copy the StudentDashboard code from the document into this file temporarily
// Or create the file src/features/dashboard/components/StudentDashboard.jsx

// Mock data for now
const mockStudent = {
  id: 1,
  name: "Alex Johnson",
  school: "Tech High School",
  level: 5,
  xp: 1240,
  nextLevelXp: 1500,
  winRate: 78.5,
  points: 2840,
  rank: 3,
  totalStudents: 156
};

const mockLeaderboard = [
  { place: 1, name: "Sarah Chen", level: 6, xp: 1680, winRate: 89.2, points: 3120 },
  { place: 2, name: "Marcus Rodriguez", level: 5, xp: 1520, winRate: 85.1, points: 2950 },
  { place: 3, name: "Alex Johnson", level: 5, xp: 1240, winRate: 78.5, points: 2840 },
  { place: 4, name: "Emma Liu", level: 4, xp: 1180, winRate: 82.3, points: 2720 },
  { place: 5, name: "David Kim", level: 4, xp: 980, winRate: 75.6, points: 2510 }
];

const mockChallenges = [
  {
    id: 1,
    title: "Array Manipulation Master",
    difficulty: "Medium",
    points: 150,
    timeLimit: "45 min",
    dueDate: "2025-08-25",
    status: "available",
    description: "Implement efficient array sorting and searching algorithms"
  },
  {
    id: 2,
    title: "String Processing Pro",
    difficulty: "Easy",
    points: 100,
    timeLimit: "30 min",
    dueDate: "2025-08-24",
    status: "completed",
    score: 95,
    description: "Master string manipulation techniques"
  },
  {
    id: 3,
    title: "Binary Tree Traversal",
    difficulty: "Hard",
    points: 200,
    timeLimit: "60 min",
    dueDate: "2025-08-26",
    status: "available",
    description: "Implement various tree traversal algorithms"
  }
];

// Simple Dashboard Component (you can move this to a separate file later)
import { Trophy, User, Code, TrendingUp, Award, BookOpen, Clock, Target, Users, Settings, Plus, Eye, BarChart3, Calendar, CheckCircle, XCircle } from 'lucide-react';

const SimpleDashboard = () => {
  const progressPercentage = (mockStudent.xp / mockStudent.nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <Code className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">CodeClimb</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </button>
              <button className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                Challenges
              </button>
              <div className="flex items-center text-sm text-gray-700">
                <User className="h-4 w-4 mr-1" />
                {mockStudent.name}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Current Rank</p>
                <p className="text-2xl font-bold text-gray-900">#{mockStudent.rank}</p>
                <p className="text-xs text-gray-500">of {mockStudent.totalStudents} students</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Level</p>
                <p className="text-2xl font-bold text-gray-900">{mockStudent.level}</p>
                <div className="mt-1">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${progressPercentage}%`}}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{mockStudent.xp}/{mockStudent.nextLevelXp} XP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Win Rate</p>
                <p className="text-2xl font-bold text-gray-900">{mockStudent.winRate}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-gray-900">{mockStudent.points}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                  Leaderboard - {mockStudent.school}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">XP</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockLeaderboard.map((student, index) => (
                      <tr key={student.place} className={student.name === mockStudent.name ? 'bg-indigo-50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {student.place <= 3 && (
                              <Trophy className={`h-4 w-4 mr-2 ${
                                student.place === 1 ? 'text-yellow-500' : 
                                student.place === 2 ? 'text-gray-400' : 'text-amber-600'
                              }`} />
                            )}
                            <span className="font-semibold">{student.place}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="ml-3 font-medium text-gray-900">{student.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                            Level {student.level}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{student.xp}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.winRate}%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-600">{student.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Recent Challenges */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <BookOpen className="h-5 w-5 text-indigo-500 mr-2" />
                  Recent Challenges
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {mockChallenges.map((challenge) => (
                  <div key={challenge.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{challenge.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{challenge.description}</p>
                        <div className="flex items-center mt-2 space-x-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {challenge.difficulty}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {challenge.timeLimit}
                          </span>
                          <span className="text-sm font-medium text-indigo-600">{challenge.points} pts</span>
                        </div>
                      </div>
                      <div className="ml-4 flex items-center">
                        {challenge.status === 'completed' ? (
                          <div className="text-center">
                            <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                            <span className="text-sm font-semibold text-green-600">{challenge.score}%</span>
                          </div>
                        ) : (
                          <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700 transition-colors">
                            Start
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-gray-200">
                <button className="w-full text-indigo-600 text-sm font-medium hover:text-indigo-700">
                  View All Challenges →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <SimpleDashboard />
    </div>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import StudentDashboard from './features/dashboard/components/StudentDashboard';
// import ChallengesPage from './features/challenges/components/ChallengesPage';
// import LoginPage from './features/authentication/components/LoginPage';
// import LoadingSpinner from './components/common/LoadingSpinner';

// // Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, isLoading } = useAuth();
  
//   if (isLoading) {
//     return <LoadingSpinner />;
//   }
  
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// // Main App Content
// const AppContent = () => {
//   const { isAuthenticated, isLoading } = useAuth();
  
//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <Routes>
//       <Route 
//         path="/login" 
//         element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" replace />} 
//       />
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <StudentDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/challenges"
//         element={
//           <ProtectedRoute>
//             <ChallengesPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route path="/" element={<Navigate to="/dashboard" replace />} />
//       <Route path="*" element={<div>404 - Page Not Found</div>} />
//     </Routes>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="App">
//           <AppContent />
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
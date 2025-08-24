import React, { useState } from 'react';
import { Code, Clock, Target, CheckCircle, XCircle, Filter } from 'lucide-react';

// Mock data - replace with API call
const mockChallenges = [
  {
    id: 1,
    title: "Array Manipulation Master",
    difficulty: "Medium",
    points: 150,
    timeLimit: "45 min",
    dueDate: "2025-08-25",
    status: "available",
    description: "Implement efficient array sorting and searching algorithms",
    tags: ["Arrays", "Sorting", "Searching"]
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
    description: "Master string manipulation techniques",
    tags: ["Strings", "Manipulation"]
  },
  {
    id: 3,
    title: "Binary Tree Traversal",
    difficulty: "Hard",
    points: 200,
    timeLimit: "60 min",
    dueDate: "2025-08-26",
    status: "available",
    description: "Implement various tree traversal algorithms",
    tags: ["Trees", "Recursion", "Data Structures"]
  },
  {
    id: 4,
    title: "Dynamic Programming Basics",
    difficulty: "Medium",
    points: 175,
    timeLimit: "50 min",
    dueDate: "2025-08-27",
    status: "available",
    description: "Solve problems using dynamic programming techniques",
    tags: ["Dynamic Programming", "Optimization"]
  }
];

const ChallengesPage = () => {
  const [challenges] = useState(mockChallenges);
  const [filter, setFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const filteredChallenges = challenges.filter(challenge => {
    const statusMatch = filter === 'all' || challenge.status === filter;
    const difficultyMatch = difficultyFilter === 'all' || challenge.difficulty === difficultyFilter;
    return statusMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status, score) => {
    if (status === 'completed') {
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    }
    if (status === 'failed') {
      return <XCircle className="h-6 w-6 text-red-500" />;
    }
    return null;
  };

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
              <button className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </button>
              <button className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                Challenges
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Coding Challenges</h1>
          <p className="mt-2 text-gray-600">Test your skills and climb the leaderboard</p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Challenges</option>
              <option value="available">Available</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                </div>
                <div className="ml-4">
                  {getStatusIcon(challenge.status, challenge.score)}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {challenge.tags.map((tag, index) => (
                  <span key={index} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {challenge.timeLimit}
                </span>
                <span className="text-sm font-medium text-indigo-600 flex items-center">
                  <Target className="h-3 w-3 mr-1" />
                  {challenge.points} pts
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  Due: {new Date(challenge.dueDate).toLocaleDateString()}
                </div>
                <div>
                  {challenge.status === 'completed' ? (
                    <span className="text-sm font-semibold text-green-600">{challenge.score}%</span>
                  ) : (
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition-colors">
                      {challenge.status === 'in_progress' ? 'Continue' : 'Start Challenge'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredChallenges.length === 0 && (
          <div className="text-center py-12">
            <Code className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No challenges found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more challenges.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengesPage;
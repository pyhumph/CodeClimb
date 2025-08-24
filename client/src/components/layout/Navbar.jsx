import React from 'react';
import { Code, User } from 'lucide-react';

const Navbar = ({ studentName, onNavigate, currentView }) => {
  const navItems = [
    { key: 'student-dashboard', label: 'Dashboard' },
    { key: 'challenges', label: 'Challenges' },
  ];

  return (
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
            {navItems.map(item => (
              <button 
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === item.key
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center text-sm text-gray-700">
              <User className="h-4 w-4 mr-1" />
              {studentName}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
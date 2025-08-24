import React from 'react';
import { Trophy } from 'lucide-react';
import UserAvatar from '../../../components/common/UserAvatar';

const LeaderboardTable = ({ students, currentStudentName, schoolName }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
          Leaderboard - {schoolName}
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
            {students.map((student) => (
              <tr key={student.place} className={student.name === currentStudentName ? 'bg-indigo-50' : ''}>
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
                    <UserAvatar name={student.name} />
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
  );
};

export default LeaderboardTable;
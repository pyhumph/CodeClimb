import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import StatsSection from './StatsSection';
import LeaderboardTable from '../../leaderboard/components/LeaderboardTable';
import RecentChallenges from '../../challenges/components/RecentChallenges';

const StudentDashboard = ({ 
  student, 
  leaderboard, 
  challenges, 
  onNavigate, 
  onChallengeSelect,
  currentView 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar 
        studentName={student.name}
        onNavigate={onNavigate}
        currentView={currentView}
      />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <StatsSection student={student} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LeaderboardTable 
              students={leaderboard}
              currentStudentName={student.name}
              schoolName={student.school}
            />
          </div>

          <div className="space-y-6">
            <RecentChallenges 
              challenges={challenges}
              onChallengeSelect={onChallengeSelect}
              onViewAll={() => onNavigate('challenges')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
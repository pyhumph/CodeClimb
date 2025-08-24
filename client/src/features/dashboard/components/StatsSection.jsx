import React from 'react';
import { Trophy, Award, TrendingUp, Target } from 'lucide-react';
import StatsCard from '../../../components/ui/StatsCard';
import ProgressBar from '../../../components/ui/ProgressBar';

const StatsSection = ({ student }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <StatsCard
        icon={Trophy}
        title="Current Rank"
        value={`#${student.rank}`}
        subtitle={`of ${student.totalStudents} students`}
        color="yellow"
      />
      
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Award className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm font-medium text-gray-600">Level</p>
            <p className="text-2xl font-bold text-gray-900">{student.level}</p>
            <ProgressBar 
              current={student.xp} 
              total={student.nextLevelXp} 
              color="purple" 
            />
          </div>
        </div>
      </div>

      <StatsCard
        icon={TrendingUp}
        title="Win Rate"
        value={`${student.winRate}%`}
        color="green"
      />

      <StatsCard
        icon={Target}
        title="Total Points"
        value={student.points}
        color="blue"
      />
    </div>
  );
};

export default StatsSection;
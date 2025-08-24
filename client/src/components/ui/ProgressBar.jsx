import React from 'react';

const ProgressBar = ({ current, total, color = 'purple' }) => {
  const percentage = (current / total) * 100;
  
  const colorMap = {
    purple: 'bg-purple-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600'
  };

  return (
    <div className="mt-1">
      <div className="bg-gray-200 rounded-full h-2">
        <div 
          className={`${colorMap[color]} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{current}/{total} XP</p>
    </div>
  );
};

export default ProgressBar;
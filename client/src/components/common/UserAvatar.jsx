import React from 'react';

const UserAvatar = ({ name, size = 'md' }) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  const sizeMap = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-12 w-12 text-base'
  };

  return (
    <div className={`${sizeMap[size]} bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium`}>
      {initials}
    </div>
  );
};

export default UserAvatar;
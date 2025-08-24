export const ENDPOINTS = {
  // Authentication
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  
  // User
  PROFILE: '/user/profile',
  UPDATE_PROFILE: '/user/profile',
  
  // Dashboard
  STUDENT_STATS: '/dashboard/student-stats',
  LEADERBOARD: '/dashboard/leaderboard',
  
  // Challenges
  CHALLENGES: '/challenges',
  CHALLENGE_DETAIL: (id) => `/challenges/${id}`,
  SUBMIT_SOLUTION: (id) => `/challenges/${id}/submit`,
  RUN_CODE: (id) => `/challenges/${id}/run`,
  
  // Admin
  ADMIN_CHALLENGES: '/admin/challenges',
  CREATE_CHALLENGE: '/admin/challenges',
  UPDATE_CHALLENGE: (id) => `/admin/challenges/${id}`,
  DELETE_CHALLENGE: (id) => `/admin/challenges/${id}`,
};
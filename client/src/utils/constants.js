export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  CHALLENGES: '/challenges',
  LEADERBOARD: '/leaderboard',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register'
};

export const USER_ROLES = {
  STUDENT: 'student',
  ADMIN: 'admin',
  TEACHER: 'teacher'
};

export const CHALLENGE_DIFFICULTY = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard'
};

export const CHALLENGE_STATUS = {
  AVAILABLE: 'available',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  FAILED: 'failed'
};
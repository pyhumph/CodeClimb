import { useState, useEffect } from 'react';
import { useApi } from './useApi';
import { ENDPOINTS } from '../services/endpoints';

export const useDashboard = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  
  const { 
    data: studentStats, 
    loading: statsLoading, 
    error: statsError 
  } = useApi(ENDPOINTS.STUDENT_STATS + `?refresh=${refreshKey}`);
  
  const { 
    data: leaderboard, 
    loading: leaderboardLoading, 
    error: leaderboardError 
  } = useApi(ENDPOINTS.LEADERBOARD + `?refresh=${refreshKey}`);

  const refresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return {
    studentStats,
    leaderboard,
    loading: statsLoading || leaderboardLoading,
    error: statsError || leaderboardError,
    refresh,
  };
};

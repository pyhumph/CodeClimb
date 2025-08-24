import { useState, useEffect } from 'react';
import api from '../services/api';

export const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { immediate = true, method = 'GET', ...config } = options;

  const execute = async (customConfig = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api({
        url: endpoint,
        method,
        ...config,
        ...customConfig,
      });
      
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [endpoint, immediate]);

  return {
    data,
    loading,
    error,
    execute,
    refetch: () => execute(),
  };
};
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import api from '../services/api';
import { ENDPOINTS } from '../services/endpoints';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (credentials) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await api.post(ENDPOINTS.LOGIN, credentials);
      const { token, user } = response.data;
      
      localStorage.setItem('authToken', token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
      
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      dispatch({ type: 'LOGIN_FAILURE', payload: message });
      return { success: false, error: message };
    }
  };

  const logout = async () => {
    try {
      await api.post(ENDPOINTS.LOGOUT);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('authToken');
      dispatch({ type: 'LOGOUT' });
    }
  };

  const register = async (userData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await api.post(ENDPOINTS.REGISTER, userData);
      const { token, user } = response.data;
      
      localStorage.setItem('authToken', token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
      
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed';
      dispatch({ type: 'LOGIN_FAILURE', payload: message });
      return { success: false, error: message };
    }
  };

  // Check if user is logged in on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verify token and get user data
      api.get(ENDPOINTS.PROFILE)
        .then(response => {
          dispatch({ type: 'LOGIN_SUCCESS', payload: { user: response.data } });
        })
        .catch(() => {
          localStorage.removeItem('authToken');
          dispatch({ type: 'SET_LOADING', payload: false });
        });
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const value = {
    ...state,
    login,
    logout,
    register,
    updateUser: (userData) => dispatch({ type: 'UPDATE_USER', payload: userData }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

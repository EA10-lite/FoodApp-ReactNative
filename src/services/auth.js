import {fetchWithAuth} from './api';

export const loginAsUser = async (data) => {
    try {
      return await fetchWithAuth('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
};
  
  export const signupAsUser = async (data) => {
    try {
      return await fetchWithAuth('/auth/signupUser', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

export const verifyUserEmail = async (data) => {
  try {
    return await fetchWithAuth('/auth/verify-email', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error;
  }
};

export const ResendOTP = async (data) => {
  try {
    return await fetchWithAuth('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error resending otp:', error);
    throw error;
  }
};

export const Logout = async data => {
  try {
    return await fetchWithAuth('/auth/logout', {
      method: 'POST',
      body: JSON.stringify({}),
    });
  } catch (error) {
    console.error('Error logging:', error);
    throw error;
  }
};

export const forgotUserPassword = async (data) => {
  try {
    return await fetchWithAuth('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const resetUserPassword = async (data) => {
  try {
    return await fetchWithAuth('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

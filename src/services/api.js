const BASE_URL = 'https://foodgo-server.onrender.com/api';

export const fetchWithAuth = async (url, options = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${url}`, { ...options, headers });
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
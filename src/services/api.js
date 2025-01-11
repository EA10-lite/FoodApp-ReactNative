import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = 'https://foodgo-server.onrender.com/api';

export const fetchWithoutAuth = async (url, options = {}) => {
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

export const fetchWithAuth = async (url, options = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const token = await AsyncStorage.getItem('access_token');

    if (token) {
      headers.Authorization = `Bearer ${ token.slice(1, token.length - 1)}`;
    }


    const response = await fetch(`${BASE_URL}${url}`, { ...options, headers });
    const result =  await response.json();

    console.log("result: ", result);
    return result;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
import {fetchWithAuth} from './api';

export const updateProfile = async (data) => {
    try {
      return await fetchWithAuth('/user', {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    } catch (error) {
      throw error;
    }
};

import axios from 'axios';
import { AppError } from '../Utils/AppError';


const NEWS_API_KEY = '423c416733b14bab9c8aac3798b82404';

const apiClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
  timeout: 60000,
});

// Use an interceptor to automatically add the API key to every request
apiClient.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    apiKey: NEWS_API_KEY,
  };

const fullUrl = `${config.baseURL}${config.url}`;
  console.log('API Request URL:', fullUrl);
  
  if (config.data) {
    console.log('Request Body:', config.data);
  }
  if (config.params) {
    console.log('Request Params:', config.params);
  }
  return config;
});

// Optional: Interceptor to handle responses globally
apiClient.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.data);
    // If the request was successful, just return the data part of the response
    return response
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    // Reject the promise so the .catch() block in the component can handle it
    // Always reject with an Error object
    if (error instanceof Error) {
      console.log('Error details:', error.message);
      return Promise.reject(error);
    } else if (error?.message) {
       console.log('Error details-2:', error?.message);
      return Promise.reject(new Error(error.message));
    } else {
       console.log('Error details-3:', error);
      return Promise.reject(new Error('Unknown network error'));
    }
  }
);

export default apiClient;
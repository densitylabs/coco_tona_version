import axios from 'axios';

class APIHttpClient {
  static async get({ path = '' }: { path: string }) {
    try {
      const response = await fetch('/covid_api/US', {
        method: 'GET',
      });
      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

export default APIHttpClient;

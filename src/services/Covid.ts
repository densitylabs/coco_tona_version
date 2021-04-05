import querystring from 'querystring';
import APIHttpClient from 'lib/APIHttpClient';

class Covid {
  static async getStatus({
    date,
    country,
    countries,
  }: {
    date?: string;
    country: string;
    countries?: string[];
  }) {
    let path;

    if (country) {
      path = `/${country}`;
    }

    if (date) {
      path += querystring.stringify({ date });
    }

    const countryInformation = APIHttpClient.get({ path });
    console.log(countryInformation);

    return countryInformation;
  }
}

export default Covid;

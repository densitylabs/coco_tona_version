import querystring from 'querystring';
import APIHttpClient from 'lib/APIHttpClient';
import { dateToApiString } from './../apps/dashboard/ChartHelpers';

class Covid {
  static async getStatus({ date, country }: { date?: Date; country: string }) {
    let path;

    if (country) {
      path = `${country}`;
    }

    if (date) {
      path += '?' + querystring.stringify({ date: dateToApiString(date) });
    }

    const countryInformation = APIHttpClient.get({ path });
    return countryInformation;
  }
}

export default Covid;

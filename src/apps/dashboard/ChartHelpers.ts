type countryData = {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  color: string;
  name: string;
};

const defaultDataSetInfo = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
};

export const decorateCountriesForChart = ({
  countries,
}: {
  countries: countryData[];
}) => {
  console.log('countries', countries);

  const datasets = countries.map((country) => {
    return {
      ...defaultDataSetInfo,
      backgroundColor: country.color,
      borderColor: country.color,
      pointBorderColor: country.color,
      pointHoverBackgroundColor: country.color,
      label: country.name,
      data: [country.cases, country.deaths, country.recovered],
    };
  });

  return {
    labels: ['Cases', 'Deaths', 'Recovered'],
    datasets,
  };
};

const padStr = (i: number) => {
  return i < 10 ? '0' + i : '' + i;
};

export const dateToApiString = (date: Date) => {
  return `${padStr(date.getFullYear())}-${padStr(1 + date.getMonth())}-${padStr(
    date.getDate()
  )}`;
};

import React from 'react';
import { ChartWrapper } from './DashboardStyles';
import { Bar } from 'react-chartjs-2';
import { useQueries } from 'react-query';
import Covid from 'services/Covid';
import { decorateCountriesForChart } from './ChartHelpers';

const dataBackup = {
  labels: ['Cases', 'Deaths', 'Recovered'],
  datasets: [
    {
      label: 'US',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderCapStyle: 'butt',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'blue',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'blue',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80],
    },
  ],
};

type CountrySelectionProps = {
  [key: string]: { color: string; name: string };
};

const CountrySelection = ({ countries }: CountrySelectionProps) => {
  const countryCodes = Object.keys(countries);

  const countryQueries = useQueries(
    countryCodes.map((countryCode) => {
      return {
        queryKey: ['countryCode', countryCode],
        queryFn: () => Covid.getStatus({ country: countryCode }),
      };
    })
  );

  console.log('countryQueries', countryQueries);

  if (!countryCodes.length) {
    return (
      <ChartWrapper>
        {!countryCodes.length && (
          <div>
            <br />
            <h3>Start adding countries to review.</h3>
          </div>
        )}
      </ChartWrapper>
    );
  }

  const isLoadingCountries = countryQueries.find(
    (countryQuery) => countryQuery.isLoading
  );

  const isErrorCountries = countryQueries.find(
    (countryQuery) => countryQuery.isError
  );

  if (isLoadingCountries) {
    return <ChartWrapper>Loading content ...</ChartWrapper>;
  }

  if (isErrorCountries) {
    return <ChartWrapper>Something went wrong.</ChartWrapper>;
  }

  const data = decorateCountriesForChart({
    countries: countryQueries.map((countryQuery) => {
      const data = countryQuery.data;

      return {
        ...data,
        ...countries[data.country],
      };
    }),
  });

  return (
    <ChartWrapper>
      <Bar data={data} />
    </ChartWrapper>
  );
};

export default CountrySelection;

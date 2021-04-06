import React from 'react';
import { ChartWrapper } from './DashboardStyles';
import { Bar } from 'react-chartjs-2';
import { useQueries } from 'react-query';
import Covid from 'services/Covid';
import { decorateCountriesForChart, dateToApiString } from './ChartHelpers';

type ChartProps = {
  countries: {
    [key: string]: { color: string; name: string };
  };
  date: Date;
};

const Chart = ({ countries, date }: ChartProps) => {
  const countryCodes = Object.keys(countries);

  if (!countryCodes.length) {
    return (
      <ChartWrapper>
        {!countryCodes.length && <h3>Start adding countries to review.</h3>}
      </ChartWrapper>
    );
  }

  const countryQueries = useQueries(
    countryCodes.map((countryCode) => {
      return {
        queryKey: ['countryCode', countryCode, dateToApiString(date)],
        queryFn: () => Covid.getStatus({ country: countryCode, date }),
      };
    })
  );

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

export default Chart;

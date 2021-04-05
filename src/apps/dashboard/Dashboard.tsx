import React, { useState, useEffect } from 'react';
import { H1 } from 'shared/components/htmlElements';
import CountrySelection from './CountrySelection';
import CountrySelectionEditor from './CountrySelectionEditor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import RoundedButton from 'shared/components/RoundedButton';
import {
  DashboardWrapper,
  CountrySelectionsWrapper,
  CountrySelectionWrapper,
  ChartWrapper,
} from './DashboardStyles';
import { countries } from 'shared/lib/countries';
import Chart from './Chart';

const ADD = 'ADD';
const EDIT = 'EDIT';

const Dashboard = () => {
  const [comparedCountries, setComparedCountries] = useState([]);
  const [countryCodeUnderEdit, setCountryCodeUnderEdit] = useState('');
  const [countryModalOperation, setCountryModalOperation] = useState('');

  const onCountrySelection = (countryCode?: string) => {
    let countries;
    switch (countryModalOperation) {
      case ADD:
        countries = [...comparedCountries, countryCode];
        break;
      case EDIT:
        countries = comparedCountries.reduce((acc, comparedCountry) => {
          const newCountryValue =
            comparedCountry === countryCodeUnderEdit
              ? countryCode
              : comparedCountry;

          return newCountryValue ? [...acc, newCountryValue] : [...acc];
        }, []);
        break;
    }

    setCountryCodeUnderEdit('');
    setCountryModalOperation('');
    setComparedCountries(countries);
  };

  const comparedCountriesData = comparedCountries.reduce(
    (acc, comparedCountryCode) => {
      const countryData = countries[comparedCountryCode];

      return {
        ...acc,
        [comparedCountryCode]: countryData,
      };
    },
    {}
  );

  return (
    <DashboardWrapper>
      <H1>Compare new cases from different countries</H1>
      <br />

      <CountrySelectionsWrapper>
        {comparedCountries.map((comparedCountryCode) => {
          const country = countries[comparedCountryCode];
          return (
            <CountrySelectionWrapper>
              <CountrySelection
                countryCode={comparedCountryCode}
                borderColor={country.color}
                countryName={country.name}
                onClick={() => {
                  setCountryCodeUnderEdit(comparedCountryCode);
                  setCountryModalOperation(EDIT);
                }}
              />
            </CountrySelectionWrapper>
          );
        })}

        <CountrySelectionWrapper>
          <RoundedButton
            borderColor={'#C54A83'}
            label={'Add New Country'}
            iconComponent={
              <FontAwesomeIcon
                icon={faPlus}
                color="black"
                style={{
                  marginTop: '16px',
                  marginRight: '10px',
                }}
              />
            }
            onClick={() => {
              setCountryCodeUnderEdit('');
              setCountryModalOperation(ADD);
            }}
          />
        </CountrySelectionWrapper>

        {countryModalOperation && (
          <CountrySelectionEditor
            onClose={() => {
              setCountryCodeUnderEdit('');
              setCountryModalOperation('');
            }}
            onSelection={onCountrySelection}
            countryCode={countryCodeUnderEdit}
          />
        )}
      </CountrySelectionsWrapper>

      <br />
      <Chart countries={comparedCountriesData} />
    </DashboardWrapper>
  );
};

export default Dashboard;

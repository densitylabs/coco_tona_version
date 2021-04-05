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
import { onAddNewCountryTypes } from './DashboardTypes';
import Covid from 'services/Covid';
import { countries } from 'shared/lib/countries';

const Dashboard = () => {
  const [comparedCountries, setComparedCountries] = useState([]);
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [addNewCountryInProgress, setAddNewCountryInProgress] = useState(false);
  const [countriesInformation, setCountriesInformation] = useState({});

  const onAddNewCountry = (countryCode: string) => {
    setAddNewCountryInProgress(false);
    setComparedCountries([...comparedCountries, countryCode]);
  };

  console.log('comparedCountries', comparedCountries);

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
            onClick={() => setAddNewCountryInProgress(true)}
          />
        </CountrySelectionWrapper>

        {addNewCountryInProgress && (
          <CountrySelectionEditor onClose={onAddNewCountry} />
        )}
      </CountrySelectionsWrapper>

      <ChartWrapper>
        {!comparedCountries.length && (
          <div>
            <br />
            <h3>Start adding countries to review.</h3>
          </div>
        )}
      </ChartWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

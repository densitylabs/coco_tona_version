import React, { useState } from 'react';
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
} from './DashboardStyles';
import { onAddNewCountryTypes } from './DashboardTypes';

const Dashboard = () => {
  const [comparedCountries, setComparedCountries] = useState([]);
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [addNewCountryInProgress, setAddNewCountryInProgress] = useState(false);

  const onAddNewCountry = (countryCode: string) => {
    setAddNewCountryInProgress(false);
    setComparedCountries([...comparedCountries, countryCode]);
  };

  const AddButton = (
    <RoundedButton
      borderColor={'#C54A83'}
      label={'Add New'}
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
  );

  return (
    <DashboardWrapper>
      <H1>Compare new cases from different countries</H1>
      <CountrySelectionsWrapper>
        <CountrySelectionWrapper>
          <CountrySelection />
        </CountrySelectionWrapper>
        <CountrySelectionWrapper>
          <CountrySelection />
        </CountrySelectionWrapper>
        <CountrySelectionWrapper>{AddButton}</CountrySelectionWrapper>
      </CountrySelectionsWrapper>

      {addNewCountryInProgress && (
        <CountrySelectionEditor onClose={onAddNewCountry} />
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;

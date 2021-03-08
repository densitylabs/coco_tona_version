import React, { useState } from 'react';
import styled from 'styled-components';
import { H1 } from 'shared/components/htmlElements';
import CountrySelection from './CountrySelection';
import CountrySelectionEditor from './CountrySelectionEditor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import RoundedButton from 'shared/components/RoundedButton';

const Dashboard = () => {
  const DashboardWrapper = styled.div`
    border-radius: 4px;
    box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, 0.3);
    width: 1072px;
  `;

  const CountrySelectionsWrapper = styled.div`
    padding: 0 22px;
  `;

  const AddButton = (
    <RoundedButton
      borderColor={'#C54A83'}
      label={'Add New'}
      iconComponent={
        <FontAwesomeIcon
          icon={faPlus}
          color='black'
          style={{
            marginTop: '16px',
            marginRight: '10px'
          }}
        />
      }
    />
  );

  return (
    <DashboardWrapper>
      <H1>Compare new cases from different countries</H1>
      <CountrySelectionsWrapper>
        <CountrySelection />
        {AddButton}
      </CountrySelectionsWrapper>
      <CountrySelectionEditor />
    </DashboardWrapper>
  );
};

export default Dashboard;

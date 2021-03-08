import React from 'react';
import RoundedButton from 'shared/components/RoundedButton';
import ReactCountryFlag from 'react-country-flag';

type CountrySelectionProps = {
  countryCode?: string,
  countryName?: string
};

const CountrySelection = ({
  countryCode = 'us',
  countryName = 'United States',
}: CountrySelectionProps) => {
  return (
    <RoundedButton
      borderColor='red'
      label={countryName}
      iconComponent={
        <ReactCountryFlag
          style={{
            fontSize: '1.5em',
            lineHeight: '48px',
            marginRight: '4px',
          }}
          countryCode={countryCode}
        />
      }
    />
  )
};

export default CountrySelection;

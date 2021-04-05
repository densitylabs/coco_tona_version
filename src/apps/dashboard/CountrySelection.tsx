import React from 'react';
import RoundedButton from 'shared/components/RoundedButton';
import ReactCountryFlag from 'react-country-flag';

type CountrySelectionProps = {
  countryCode?: string;
  countryName?: string;
  borderColor?: string;
  onClick?: React.MouseEventHandler;
};

const CountrySelection = ({
  countryCode,
  countryName,
  borderColor,
  onClick,
}: CountrySelectionProps) => {
  return (
    <RoundedButton
      borderColor={borderColor}
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
      onClick={onClick}
    />
  );
};

export default CountrySelection;

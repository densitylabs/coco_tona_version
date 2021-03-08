import React from 'react';
import Select, { components } from 'react-select';
import ReactCountryFlag from 'react-country-flag';
import { countries } from 'shared/lib/countries.js';
import { get } from 'lodash';
import styled from 'styled-components';
import { H2 } from 'shared/components/htmlElements';

const DeleteButton = styled.button`
  background: red;
  border: 0px;
  border-radius: 5px;
  color: white;
  line-height: 30px;
  margin-left: 15px;
  padding: 0 10px;
`;

const OptionWrapper = styled.div`
  display: flex;
  padding-left: 24px;
`;

const OperationsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CountryEditor = ({ countryCode = '' }) => {
  const Wrapper = styled.div`
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    height: 600px;
    width: 600px;

    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  `;

  const SelectWrapper = styled.div`
    width: 280px;
  `;

  const buildOptionData = ((countryCode:string) : object => countryCode
    ? { value: countryCode, label: countries[countryCode].name }
    : {}
  );

  const options = Object.keys(countries).map(countryCode =>
    buildOptionData(countryCode)
  );

  const Control = ({ children, ...props }) => {
    const selectedCountryCode = get(props.getValue(), '[0].value', '');

    return (
      <components.Control {...props}>
        {
          selectedCountryCode &&
          <ReactCountryFlag
            countryCode={selectedCountryCode}
            style={{
              paddingLeft: '15px'
            }}
          />
        }
        {children}
      </components.Control>
    );
  };

  const Option = props => {
    return (
      <OptionWrapper>
        <ReactCountryFlag
          countryCode={props.data.value}
          style={{
            fontSize: '1.6em',
            lineHeight: '1.5em',
          }}
        />
        <components.Option {...props} />
      </OptionWrapper>
    );
  };

  return (
    <Wrapper>
      <H2>Country Selection</H2>
      <br />
      <OperationsWrapper>
        <SelectWrapper>
          <Select
            placeholder='Select country'
            options={options}
            components={{ Control, Option }}
            value={buildOptionData(countryCode)}
            styles={{
              option: base => ({
                ...base,
                fontSize: '14px',
                cursor: 'pointer',
              }),
            }}
          />
        </SelectWrapper>
        <DeleteButton>Delete Country</DeleteButton>
      </OperationsWrapper>
    </Wrapper>
  );
};

export default CountryEditor;

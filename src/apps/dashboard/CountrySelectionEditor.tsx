import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import ReactCountryFlag from 'react-country-flag';
import { countries } from 'shared/lib/countries.js';
import { get } from 'lodash';
import { H2 } from 'shared/components/htmlElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  DeleteButton,
  OptionWrapper,
  OperationsWrapper,
  Wrapper,
  SelectWrapper,
  CloseIconWrapper,
} from './CountrySelectionEditorStyles';
import {
  buildSelectorOptions,
  buildOptionData,
} from './CountrySelectionEditorHelpers';
import { NEW_COUNTRY } from './helpers';

type CountrySelectionEditorTypes = {
  countryCode?: string;
  onSelection: (countryCode: string) => void;
  onClose: () => void;
};

const Control = ({ children, ...props }) => {
  const selectedCountryCode = get(props.getValue(), '[0].value', '');

  return (
    <components.Control {...props}>
      {selectedCountryCode && (
        <ReactCountryFlag
          countryCode={selectedCountryCode}
          style={{
            paddingLeft: '15px',
          }}
        />
      )}
      {children}
    </components.Control>
  );
};

const Option = (props: any) => {
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

const CountrySelectionEditor = ({
  countryCode = '',
  onSelection,
  onClose,
}: CountrySelectionEditorTypes) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [selectorOptions, setSelectorOptions] = useState([]);

  useEffect(() => {
    setSelectedCountryCode(countryCode);
    setSelectorOptions(buildSelectorOptions());
  }, []);

  return (
    <Wrapper>
      <CloseIconWrapper>
        <FontAwesomeIcon
          icon={faTimes}
          color="black"
          style={{
            marginTop: '16px',
            marginRight: '10px',
            fontSize: 20,
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        />
      </CloseIconWrapper>
      <H2>Country Selection</H2>
      <br />
      <OperationsWrapper>
        <SelectWrapper>
          <Select
            placeholder="Select country"
            options={selectorOptions}
            components={{ Control, Option }}
            value={countryCode ? buildOptionData(countryCode) : ''}
            styles={{
              option: (base: any) => ({
                ...base,
                fontSize: '14px',
                cursor: 'pointer',
              }),
            }}
            onChange={({ value }: { value: string }) => onSelection(value)}
          />
        </SelectWrapper>
        <DeleteButton onClick={() => onSelection(null)}>
          Delete Country
        </DeleteButton>
      </OperationsWrapper>
    </Wrapper>
  );
};

export default CountrySelectionEditor;

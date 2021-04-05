import { countries } from 'shared/lib/countries';

export const buildOptionData = (countryCode: string): object =>
  countryCode ? { value: countryCode, label: countries[countryCode].name } : {};

export const buildSelectorOptions = () =>
  Object.keys(countries).map((countryCode) => buildOptionData(countryCode));

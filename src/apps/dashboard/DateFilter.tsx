import React from 'react';
import DatePicker from 'react-datepicker';
import { FilterWrapper, DateFilterWrapper } from './DashboardStyles';

import 'react-datepicker/dist/react-datepicker.css';
import './DateFilter-styles.css';

const DateFilter = ({
  startDate,
  onChange,
}: {
  startDate: Date;
  onChange: (date: Date) => void;
}) => {
  return (
    <FilterWrapper>
      <DateFilterWrapper>
        <span>Choose a Date: &nbsp;</span>
        <DatePicker selected={startDate} onChange={onChange} />
      </DateFilterWrapper>
    </FilterWrapper>
  );
};

export default DateFilter;

import React from 'react';
import styled from 'styled-components';

type RoundedButtonProps = {
  borderColor: string,
  iconComponent: JSX.Element,
  label: string
};

const RoundedButton = ({ borderColor, iconComponent, label }: RoundedButtonProps) => {
  const Wrapper = styled.div`
    border: 1px solid ${borderColor};
    border-radius: 28px;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 400px;
    height: 48px;
    line-height: 48px;
    padding: 0 22px;
    width: fit-content;
  `;

  return (
    <Wrapper>
      {iconComponent}
      <span>{label}</span>
    </Wrapper>
  );
}

export default RoundedButton;

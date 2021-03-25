import React from 'react';
import styled from 'styled-components';

type RoundedButtonTypes = {
  borderColor: string;
  iconComponent: JSX.Element;
  label: string;
  // onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick: React.MouseEventHandler;
};

const RoundedButton = ({
  borderColor,
  iconComponent,
  label,
  onClick,
}: RoundedButtonTypes) => {
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
    <Wrapper onClick={onClick}>
      {iconComponent}
      <span>{label}</span>
    </Wrapper>
  );
};

export default RoundedButton;

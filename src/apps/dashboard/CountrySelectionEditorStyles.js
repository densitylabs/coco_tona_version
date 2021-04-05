import styled from 'styled-components';

export const DeleteButton = styled.button`
  background: red;
  border: 0px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  line-height: 30px;
  margin-left: 15px;
  padding: 0 10px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  padding-left: 24px;
`;

export const OperationsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
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

export const SelectWrapper = styled.div`
  width: 280px;
`;

export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
`;

import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

const WidgetWrapper = styled.div`
  position: relative;
`;

const ErrorMessage = styled.span`
  position: absolute;
  color: #ff1310;
  font-size: 16px;
  font-style: italic;
  top: -16px;
  user-select: none;
`;

const LabelHelper = styled.label`
  position: absolute;
  color: #484848;
  font-size: 16px;
  left: 10px;
  top: 2px;
  user-select: none;
  text-transform: capitalize;
`;

const InputEl = styled.input`
  padding: 26px 25px 0 10px;
  font-size: 18px;
  font-family: vollkorn;
  ${({ hasError }) => hasError && 'border: 2px #ff1310 dotted;'}
`;

const FulfillmentInput = observer(({ title, store, field, error, ...others }) => {
  return (
    <WidgetWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <LabelHelper>{title}</LabelHelper>
      <InputEl
        {...others}
        hasError={Boolean(error)}
        onChange={(e) => (store[field] = e.target.value)}
        value={store[field] || ''}
        required
      />
    </WidgetWrapper>
  );
});

export default FulfillmentInput;

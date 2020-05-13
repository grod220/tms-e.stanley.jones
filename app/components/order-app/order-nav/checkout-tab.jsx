import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import OrderStore from '../stores/order-store';
import SectionTab from './section-tab';

const CartCount = styled.div`
  background-color: #8f2e2d;
  width: 5px;
  height: 5px;
  padding: 7px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: -15px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const CheckoutTab = observer(() => {
  return (
    <Wrapper>
      <SectionTab>Checkout</SectionTab>
      {OrderStore.shoppingCart.length > 0 && <CartCount>{OrderStore.shoppingCart.length}</CartCount>}
    </Wrapper>
  );
});

export default CheckoutTab;

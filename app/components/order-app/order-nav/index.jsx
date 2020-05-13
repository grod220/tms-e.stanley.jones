import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import SectionTab from './section-tab';
import CheckoutTab from './checkout-tab';

const Container = styled.div`
  height: 7rem;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  div + div {
    margin-left: 20px;
  }
`;

const MenuNavItemsWrapper = styled.div`
  display: flex;
`;

const OrderNav = observer(() => {
  return (
    <Container>
      <Content>
        <MenuNavItemsWrapper>
          <SectionTab>Full menu</SectionTab>
          <SectionTab>Vegetarian/Vegan</SectionTab>
          <SectionTab>Gluten-free</SectionTab>
        </MenuNavItemsWrapper>
        <CheckoutTab />
      </Content>
    </Container>
  );
});

export default OrderNav;

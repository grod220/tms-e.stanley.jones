import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import OrderStore from '../../stores/order-store';
import addZero from '../../../../utilities/add-zero';

const Highlight = styled.div`
  color: #902e2d;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PicksContainer = styled(ItemContainer)`
  margin-left: 20px;
`;

const Dots = styled.div`
  flex-grow: 1;
  height: 10px;
  margin: 0 9px;
  border-bottom: 2px dotted #4e4e4e;
`;

const Choices = styled.div`
  font-size: 18px;
  margin-left: 20px;
  color: #484848;
`;

const Price = styled.div`
  color: black;
`;

const Category = styled.span`
  font-style: italic;
`;

const RemoveX = styled.div`
  margin-right: 10px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

const SpaceBetween = styled.div`
  margin-bottom: 15px;
`;

const SummaryItem = observer(({ item, shoppingCartIndex }) => {
  const removeFromCart = (index) => {
    OrderStore.shoppingCart.splice(index, 1);
  };
  return (
    <SpaceBetween>
      <ItemContainer>
        <RemoveX onClick={() => removeFromCart(shoppingCartIndex)}>×</RemoveX>
        <Highlight>{item.dishName}</Highlight>
        <Dots />
        <div>${addZero(item.basePrice)}</div>
      </ItemContainer>
      {Boolean(Object.keys(item.choices).length) &&
        Object.entries(item.choices).map(([optionName, picks], i) => (
          <Choices key={i}>
            <Category>{optionName}:</Category>
            {picks.map((pick, i) => (
              <PicksContainer key={i}>
                <div>{pick.name}</div>
                {pick.extra && (
                  <>
                    <Dots />
                    <Price>+${addZero(pick.extra)}</Price>
                  </>
                )}
              </PicksContainer>
            ))}
          </Choices>
        ))}
    </SpaceBetween>
  );
});

export default SummaryItem;

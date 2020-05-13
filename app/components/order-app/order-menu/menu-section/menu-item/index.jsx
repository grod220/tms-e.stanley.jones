import React, { useState } from 'react';
import styled from 'styled-components';

import formatPrice from '../../../../../utilities/add-zero';
import VeggieSVG from '../../legend/veggie-mark.svg';
import GlutenFreePNG from '../../legend/gluten-free-icon.png';
import MenuItemModal from './modal';
import OrderStore from '../../../stores/order-store';

const ItemContainer = styled.div`
  border: ${({ hasItem }) => (hasItem ? '3px solid #84bf5b' : '1px solid #cecece')};
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  position: relative;

  ${({ isPromo }) =>
    !isPromo &&
    `
    &:hover {
        cursor: pointer;
    }`}
`;

const ItemCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #84bf5b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ItemTitle = styled.h5`
  margin: 0;
  color: #902e2d;
`;

const Price = styled.span`
  font-size: 18px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  font-size: 16px;
  color: #4c4c4c;
`;

const SVG = styled.img`
  margin-left: 7px;
`;

const Details = styled.div`
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
`;

const VeganPlus = styled.span`
  color: #017f00;
  font-size: 18px;
`;

const Wheat = styled.img`
  margin-left: 7px;
  width: 21px;
`;

const LeftSide = styled.div`
  padding: 12px;
`;

const RightSide = styled.div`
  flex: 0 0 160px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-image: url(${({ image }) => image});
`;

const MenuItem = ({ itemData, category }) => {
  const [modal, setModal] = useState(false);
  const itemCount = OrderStore.shoppingCart.filter((item) => item.dishName === itemData.name).length;
  return (
    <>
      {modal && <MenuItemModal {...itemData} category={category} closeFunc={() => setModal(false)} />}
      <ItemContainer
        hasItem={OrderStore.shoppingCart.map((item) => item.dishName).includes(itemData.name)}
        onClick={() => !itemData.isPromo && setModal(!modal)}
        isPromo={itemData.isPromo}
      >
        {itemCount > 0 && <ItemCounter>{itemCount}</ItemCounter>}
        <LeftSide>
          <ItemTitle>{itemData.name}</ItemTitle>
          <Description>{itemData.description}</Description>
          <Details>
            {itemData.price && <Price>${formatPrice(itemData.price)}</Price>}
            {itemData.gf && <Wheat src={GlutenFreePNG} />}
            {(itemData.vegetarian || itemData.vegan) && <SVG width="16px" src={VeggieSVG} />}
            {itemData.vegan && <VeganPlus>+</VeganPlus>}
          </Details>
        </LeftSide>
        {itemData.image && <RightSide image={itemData.image} />}
      </ItemContainer>
    </>
  );
};

export default MenuItem;

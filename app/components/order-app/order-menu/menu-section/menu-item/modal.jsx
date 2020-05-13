import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite';

import OrderStore from '../../../stores/order-store';
import ItemStore from '../../../stores/item-store';
import MenuItemOptions from './menu-item-options';
import AddToCart from './add-to-cart';
// import './modal.css';

const Content = styled.div`
  width: 100%;
  position: relative;
  margin-top: -40px;
`;

const ImageContainer = styled.div`
  height: 250px;
`;

const Dismiss = styled.div`
  position: sticky;
  z-index: 1;
  margin-left: auto;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px, rgba(0, 0, 0, 0.04) 0px 4px 4px;
`;

const ImageHero = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-image: url(${({ image }) => image});
`;

const Description = styled.div`
  padding: 20px;
  color: #4c4c4c;
  font-size: 16px;
`;

const Name = styled.div`
  font-size: 30px;
  color: #902e2d;
`;

const Modal = observer(
  ({ name, price, description, options, vegan, vegetarian, gf, image, closeFunc, category, isPromo }) => {
    ReactModal.setAppElement('#root');
    const itemStoreInstance = new ItemStore();
    itemStoreInstance.basePrice = price;
    itemStoreInstance.dishName = name;
    if (options) {
      itemStoreInstance.selectionsRequired = options.filter((option) =>
        option.choices.some((choice) => choice.selection),
      ).length;
      itemStoreInstance.additionsRequired = options
        .filter((option) => option.minimum)
        .reduce((acc, option) => {
          acc[option.name] = option.minimum;
          return acc;
        }, {});
    }
    if (isPromo) {
      itemStoreInstance.selectionsRequired = 100;
    }

    return (
      <ReactModal
        isOpen={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={closeFunc}
        className="modal-box"
        overlayClassName="modal-overlay"
      >
        <Dismiss onClick={closeFunc}>
          <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24">
            <path
              d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
              fill="#4c4c4c"
            />
          </svg>
        </Dismiss>
        <Content>
          {image && (
            <>
              <ImageContainer>
                <ImageHero image={image} />
              </ImageContainer>
            </>
          )}
          <Description>
            <Name>
              <div>{name}</div>
            </Name>
            <div>{description}</div>
          </Description>
          <MenuItemOptions store={itemStoreInstance} options={options} />
          <AddToCart shoppingCart={OrderStore.shoppingCart} itemStore={itemStoreInstance} closeFunc={closeFunc} />
        </Content>
      </ReactModal>
    );
  },
);

export default Modal;

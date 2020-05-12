import React, { useState } from 'react';
import styled from 'styled-components';

import CurbsidePickupPic from './curbside-pickup.jpg';
import Link from 'next/link';

const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.62);
`;

const Modal = styled.div`
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 800px;
  margin: 40px;
  border-radius: 10px;
  padding: 35px;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
`;

const X = styled.span`
  position: absolute;
  right: 45px;
  top: 45px;
  font-family: sans-serif;
  font-size: 35px;
  color: #902e2d;

  &:hover {
    cursor: pointer;
  }
`;

const WelcomeTitle = styled.h2`
  font-family: 'Dancing Script', cursive;
  color: #902e2d;
  font-size: 55px;
  margin-top: 0;

  @media (max-width: 550px) {
    font-size: 40px;
    max-width: 200px;
  }
`;

const OrderLink = styled.a`
  font-weight: bold;
  color: #902e2d;
  font-style: italic;
  text-decoration: underline;
  white-space: nowrap;
`;

const FeatureImage = styled.img`
  width: 270px;
  max-width: 50%;
  float: right;
  margin: 5px 0 5px 5px;
`;

export default function Overlay() {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <BlurredBackground onClick={() => setOpen(false)}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <X onClick={() => setOpen(false)}>X</X>
          <WelcomeTitle>Hello Famiglia,</WelcomeTitle>
          <p>
            In these very challenging times, TMS, is doing all we can to keep us all safe. We now have Curbside Pickup
            available all day. We are happy to walk your order out to the curb of our front door. Options:
          </p>
          <p>
            <Link href="/order/pickup" passHref>
              <OrderLink>Pickup Order</OrderLink>
            </Link>
          </p>
          <p>
            <OrderLink
              href="https://www.ubereats.com/orlando/food-delivery/the-meatball-stoppe/yBDto8eNQ2-X2HhNvMY39Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delivery via Uber Eats
            </OrderLink>{' '}
            -
            <OrderLink
              href="https://www.ubereats.com/en-US/orlando/food-delivery/primo-vegan-vegetarian-and-gluten-free-by-the-meatball-stoppe/PV2V5fEsTEaVEUBSQdLcSQ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Primo Vegan
            </OrderLink>
          </p>
          <p>
            <OrderLink href="https://www.grubhub.com/restaurant/the-meatball-stoppe-7325-lake-underhill-rd-orlando/547192">
              Grub Hub
            </OrderLink>
          </p>
          <p>
            ...or call it in to our staff,{' '}
            <OrderLink href="tel:+1-407-270-6505">
              <b>407-270-6505</b>
            </OrderLink>
            .
          </p>
          <FeatureImage src={CurbsidePickupPic} />
          <p>Please include instructions that you’d prefer curbside service.</p>
          <p>
            On another note, several are now finding themselves working remotely or having to stay home with their
            children, let me encourage you to get in the 'cucina' with your children and bake something for a friend,
            neighbor or your famiglia. If you're picking up lunch/dinner for your famiglia, order a few extra meatballs
            and polenta or pasta and share them with your neighbor. Remember it's the little things that bring us the
            greatest joy. Do something nice for someone today.
          </p>
          <p>Con Amore,</p>
          <p>- Jeff & Isabella</p>
        </Modal>
      </BlurredBackground>
    )
  );
}

import React, { useState } from 'react';
import styled from 'styled-components';
import { addDays, isBefore } from 'date-fns';

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

const MEMORIAL_DAY_2020 = new Date(2020, 4, 25, 0, 0);
export const onOrBeforeMemorialDay = isBefore(Date.now(), addDays(MEMORIAL_DAY_2020, 1));

export default function Overlay() {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <BlurredBackground onClick={() => setOpen(false)}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <X onClick={() => setOpen(false)}>X</X>
          <WelcomeTitle>Happy Memorial Day</WelcomeTitle>
          <p>
            To all of The Meatball Stoppe Famiglia! We will be closed Monday to allow time for our celebration of past
            and present hero’s. <b>We will reopen Tuesday at 11am</b> and we’d be honored to serve you in our newly
            remodeled dining room. Curbside pickup and Delivery is our norm.
          </p>
          <p>
            <i>— Jeff & Isabella Morgia</i>
          </p>
        </Modal>
      </BlurredBackground>
    )
  );
}

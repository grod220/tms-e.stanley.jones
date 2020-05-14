import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import ShortHero from '../../components/shared/short-hero';
import FamilyStorePic from '../../components/about-us/family-drone-pic.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  text-align: center;
`;

const Headline = styled.div`
  font-size: 27px;
  font-weight: bold;
`;

export default function Cancelled() {
  return (
    <div>
      <Head>
        <title>Order Cancelled :: The Meatball Stoppe</title>
      </Head>
      <ShortHero image={FamilyStorePic} headline="Order cancelled" />
      <Container>
        <div>
          <Headline>
            Looks like your order was cancelled{' '}
            <span role="img" aria-label="red x">
              ❌
            </span>
          </Headline>
          <div>Feel free to try again</div>
        </div>
      </Container>
    </div>
  );
}

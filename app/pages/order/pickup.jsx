import React from 'react';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import MeatballHero from '../../components/order-online/five-ball.jpg';
import OrderApp from '../../components/order-app';

export default function Pickup() {
  return (
    <div>
      <Head>
        <title>Pickup :: The Meatball Stoppe</title>
        <meta name="description" content="Order a pickup so it'll be ready when you arrive" />
      </Head>
      <ShortHero image={MeatballHero} headline="Pickup Order" />
      <OrderApp />
    </div>
  );
}

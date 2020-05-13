import React from 'react';
import Head from 'next/head';

import ShortHero from '../../components/shared/short-hero';
import CateringHero from '../../components/order/baked-pasta.jpg';

export default function Catering() {
  return (
    <div>
      <Head>
        <title>Catering Order :: The Meatball Stoppe</title>
        <meta name="description" content="Order some catering for pickup or delivery." />
      </Head>
      <ShortHero image={CateringHero} headline="Catering Order" />
      {/*<OrderModule />*/}
    </div>
  );
}

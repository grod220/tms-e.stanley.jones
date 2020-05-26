import React from 'react';
import Head from 'next/head';
import LazyLoad from 'react-lazyload';

import BigHero from '../components/homepage/big-hero';
import OrderBar from '../components/homepage/order-bar';
import SocialBar from '../components/homepage/social-bar';
import MenuPreview from '../components/homepage/menu-preview';
import TestimonialTaster from '../components/homepage/testimonial-taster';
import LaDifferenzaPromo from '../components/homepage/la-differenza-promo';
import Map from '../components/homepage/map';
import Passion from '../components/homepage/passion';
import Footer from '../components/homepage/footer';

export default function Index() {
  return (
    <div>
      <Head>
        <title>The Meatball Stoppe :: Love & Famiglia, All Rolled Up</title>
        <meta
          name="description"
          content="An authentic Italian restaurant loved by Guy Fieri & the entire community. Orlando's #1 ranked most family-friendly restaurant by USA Today."
        />
      </Head>
      {/*{onOrBeforeMemorialDay && <Overlay />} buggy...*/}
      <BigHero />
      <OrderBar />
      <LazyLoad height={350}>
        <SocialBar />
      </LazyLoad>
      <LazyLoad height={400}>
        <MenuPreview />
      </LazyLoad>
      <LazyLoad height={350}>
        <TestimonialTaster />
      </LazyLoad>
      <LazyLoad height={400}>
        <LaDifferenzaPromo />
      </LazyLoad>
      <LazyLoad height={450}>
        <Map />
      </LazyLoad>
      <LazyLoad height={400}>
        <Passion />
      </LazyLoad>
      <LazyLoad height={160}>
        <Footer />
      </LazyLoad>
    </div>
  );
}

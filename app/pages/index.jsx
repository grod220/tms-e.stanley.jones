import Head from 'next/head';
import Overlay from '../components/homepage/modal-overlay/modal-overlay';
import BigHero from '../components/homepage/hero/big-hero';
import OrderBar from '../components/homepage/order-bar';
import SocialBar from '../components/homepage/social-bar/social-bar';
import MenuPreview from '../components/homepage/menu-preview/menu-preview';
import TestimonialTaster from '../components/homepage/testimonial-taster/testimonial-taster';

export default function Index() {
  return (
    <div>
      <Head>
        <title>The Meatball Stoppe :: Love & Famiglia, All Rolled Up</title>
        <meta
          name="description"
          content="Authentic Italian food loved by Guy Fieri & the entire community. Orlando's #1 ranked most family-friendly restaurant by USA Today."
        />
      </Head>
      {/*<Overlay />*/}
      <BigHero />
      <OrderBar />
      <SocialBar />
      <MenuPreview />
      <TestimonialTaster />
    </div>
  );
}

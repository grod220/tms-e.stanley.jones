import Head from 'next/head';
import Overlay from '../components/homepage/modal-overlay/modal-overlay';
import BigHero from '../components/homepage/hero/big-hero';

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
    </div>
  );
}

import Head from 'next/head';
import TopText from '../components/menu/top-text';

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Menu :: The Meatball Stoppe</title>
        <meta name="description" content="We have the best Italian food you'll find in Orlando" />
      </Head>
      <TopText />
    </div>
  );
}

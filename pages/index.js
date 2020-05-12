import Head from 'next/head';
import Navigation from '../components/navigation';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <Navigation />
      <main>Hello world!</main>
    </div>
  );
}

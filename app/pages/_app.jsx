import React from 'react';
import '../public/global-styles.css';
import Navigation from '../components/navigation';
import { initializeGoogleAnalytics } from '../utilities/google-analytics';

initializeGoogleAnalytics();

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

import Head from 'next/head'
import Navigation from '../components/navigation'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <Navigation />
      <main>
        This is body stuff
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css?family=Vollkorn:400,400i,700");
        @import url("https://fonts.googleapis.com/css?family=Dancing+Script:400,700");

        html {
          font-size: 62.5%;
        }

        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 2.2rem;
          font-family: 'Vollkorn', serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </div>
  )
}

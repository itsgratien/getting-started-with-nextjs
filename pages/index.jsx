import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='container'>
      <Head>
        <title>Getting started using Next JS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Link href='/posts/first-post'>Read this page</Link>
      </div>
      <style jsx>
        {`
          .container {
            margin: auto;
          }
        `}
      </style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;

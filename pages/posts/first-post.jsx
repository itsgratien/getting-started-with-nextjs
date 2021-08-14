import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First post</h1>
      <h2>
        <Link href='/'>
          <a>Back home</a>
        </Link>
      </h2>
      <br />
      <Image
        src='/images/react.png'
        layout='responsive'
        width={144}
        height={144}
      />
    </Layout>
  );
};
export default FirstPost;

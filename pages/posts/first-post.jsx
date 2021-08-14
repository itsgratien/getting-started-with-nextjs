import React from 'react';
import Link from 'next/link';

const FirstPost = () => {
  return (
    <>
      <h1>First post</h1>
      <h2>
          <Link href="/">
              <a>Back home</a>
          </Link>
      </h2>
    </>
  );
};
export default FirstPost;

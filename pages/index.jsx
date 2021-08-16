import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getUsers } from '../lib/posts';

const Home = (props) => {
  const { allPostsData, users } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Getting started with next js]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <section>
      <h2 className={utilStyles.headingLg}>Users</h2>
        <ul>{users && users.map((user, index) => <li key={index}>{user.username}</li>)}</ul>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  const users = await getUsers();

  return {
    props: {
      allPostsData,
      users,
    },
  };
};

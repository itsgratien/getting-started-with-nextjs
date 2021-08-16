import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export const getStaticPaths = () => {
  //return the list of possible value id
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log('par', params);
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

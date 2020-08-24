import Head from 'next/head';

import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  const titleStyle = 'text-xl font-bold';

  return (
    <Layout>
      <Head>
        <title>
          {postData.title}
        </title>
      </Head>
      <article>
        {postData.instagram && (
          <div className="mt-3 text-gray-500 leading-tight">
            Conteúdo auxiliar para
            {' '}
            <a href={postData.instagram}>o post</a>
            {' '}
            no Instagram.
          </div>
        )}

        {postData.link ? (
          <a href={postData.link}>
            <h1 className={titleStyle}>{postData.title}</h1>
          </a>
        ) : (
          <h1 className={titleStyle}>
            {postData.title}
          </h1>
        )}

        <div className="text-xs text-gray-500">
          <Date dateString={postData.date} />
        </div>

        <div className="my-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

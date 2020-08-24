import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({
            id, date, title, instagram,
          }) => (
            <li className="my-4" key={id}>
              <Link href="/post/[id]" as={`/post/${id}`}>
                <a>{title}</a>
              </Link>
              {instagram && (
                <div className="text-xs">
                  Conteúdo auxiliar para
                  {' '}
                  <a href={instagram}>o post</a>
                  {' '}
                  no Instagram.
                </div>
              )}
              <div className="text-xs text-gray-500">
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

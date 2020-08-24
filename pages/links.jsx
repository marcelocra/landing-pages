import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const LinkContent = ({ post }) => (
  <div className="text-xl">
    {post.linkNumber}
    {post.draft && <div className="italic text-xs text-gray-500">draft</div>}
  </div>
);

export default function Links({ allPostsData }) {
  const [showDetails, setShowDetails] = useState(false);

  const AllLinks = () => (
    <>
      {allPostsData
        .filter((post) => post.link)
        .sort((a, b) => b.linkNumber - a.linkNumber)
        .map((post) => (
          <React.Fragment key={post.link}>
            {showDetails ? (
              <div className="border rounded p-2 shadow">
                <a href={post.link}>
                  <LinkContent post={post} />
                </a>
                <p className="text-xs">{post.title}</p>
                <Link href="/post/[id]" as={`/post/${post.id}`}>
                  <a className="text-xs justify-end">(post)</a>
                </Link>
              </div>
            ) : (
              <a href={post.link} className="border rounded p-2 shadow hover:bg-gray-300 hover:no-underline">
                <LinkContent post={post} />
              </a>
            )}
          </React.Fragment>
        ))}
    </>
  );

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="mx-3 grid grid-cols-3 gap-1 items-center">
        <div className="col-span-2">
          <p>
            Links
          </p>
          <p className="text-xs">Clique no botão ao lado para ver os posts relacionados.</p>
        </div>
        <div className="col-span-1 text-right">
          <button
            className="text-xs border rounded p-1 shadow"
            type="button"
            onClick={() => setShowDetails((old) => !old)}
          >
            {showDetails ? '- detalhes' : '+ detalhes'}
          </button>
        </div>
      </section>

      {showDetails ? (
        <section className="m-3 grid grid-cols-2 gap-2 text-center sm:grid-cols-4">
          <AllLinks />
        </section>
      ) : (
        <section className="m-3 grid grid-cols-4 gap-2 text-center sm:grid-cols-6">
          <AllLinks />
        </section>
      )}
    </Layout>
  );
}

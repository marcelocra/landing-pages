import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import utilStyles from '../styles/utils.module.css';

import styles from './layout.module.css';

export const siteTitle = 'Code Evolution';

export default function Layout({ children, home, ogImage }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="Software com menos bugs, mais fácil de manter e estender. Conteúdos diversos sobre design de software, programação e ferramentas relacionadas."
        />
        {ogImage && (
          <meta
            property="og:image"
            content={ogImage}
          />
        )}
        <meta
          property="og:url"
          content="https://codeevolution.dev"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content={siteTitle} />
        <meta name="twitter:image:alt" content="Code Evolution profile picture" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={siteTitle}
            />
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={siteTitle}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{siteTitle}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <button
            type="button"
            onClick={() => router.back()}
            className="hover:no-underline text-sm"
          >
            ← Voltar
          </button>
        </div>
      )}
    </div>
  );
}

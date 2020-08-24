import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="flex justify-center text-center text-xs sm:text-base">
        <p>
          Vamos compartilhar conhecimento e crescer juntos!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
        <a href="https://instagram.com/codeevolution" className="p-3 border border-gray-500 rounded hover:bg-gray-300 hover:no-underline">
          <h3>
            Instagram
          </h3>
          <p className="text-gray-500 text-xs">
            Principal canal de comunicação, junto com a lista de email (que ainda será criada).
          </p>
        </a>

        <a href="https://youtube.com/channel/UCliE3zhsaWd-P0Sd3xVy3yA" className="p-3 border border-gray-500 rounded hover:bg-gray-300 hover:no-underline">
          <h3>
            YouTube
          </h3>
          <p className="text-gray-500 text-xs">
            Vídeos completos sobre diversos assuntos.
          </p>
        </a>

        <Link href="/links">
          <a className="p-3 border border-gray-500 rounded hover:bg-gray-300 hover:no-underline">
            <h3>
              Referências para posts do Instagram
            </h3>
            <p className="text-gray-500 text-xs">
              Todas as referências dos meus posts no Instagram.
            </p>
          </a>
        </Link>

        <Link href="/posts">
          <a className="p-3 border border-gray-500 rounded hover:bg-gray-300 hover:no-underline">
            <h3>
              Blog
            </h3>
            <p className="text-gray-500 text-xs">
              Conteúdos diversos, sobre design de software, programação, ferramentas,
              {' '}
              produtividade, etc.
            </p>
          </a>
        </Link>

        <a className="p-3 border border-gray-500 rounded hover:bg-gray-300 hover:no-underline">
          <h3>
            Newsletter (lista de email)
          </h3>
          <p className="text-gray-500 text-xs">
            <span role="img" aria-label="obra">🚧</span>
            {' '}
            Em construção! Assim que a lista estiver pronta, avisaremos no Instagram.
          </p>
        </a>
      </section>
    </Layout>
  );
}

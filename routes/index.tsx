/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

import DarkToggle from "../islands/DarkToggle.tsx";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main
      class={tw`min-h-screen bg-gray-800 ${dark ? "dark" : ""}`}
    >
      <div
        class={tw`max-w-4xl mx-auto p-4`}
      >
        <figure class={tw`rounded-xl`}>
          <img
            class={tw`md:(w-48 h-auto) w-32 h-32 rounded-full mx-auto`}
            src="/profile.min.webp"
            alt="Marcelo smiling at the camera, with light blue and light ping background."
            width="192"
            height="192"
          />
          <div class={tw`my-3 text(center white) space-y-4`}>
            <div class={tw`text-4xl font-extrabold font-sans`}>
              <DarkToggle setDark={() => setDark} />
            </div>
            <div class={tw`px-1 font-sans`}>
              Olá! Meu nome é <strong>Marcelo</strong>, sou{" "}
              <strong>desenvolvedor e designer de software</strong>. Aqui você
              pode conferir meus projetos e mídias.
            </div>
          </div>
        </figure>

        <div class={tw`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          {SECTIONS.map((section) => (
            <a
              class={tw`hover:bg-purple-800 text-white p-3 border border-gray-400 rounded-md drop-shadow-md`}
              href={section.link ?? "#"}
              title={section.link ? "" : "Em construção"}
              {...section.props}
            >
              {section.title &&
                (
                  <div
                    class={tw`text-xl font-bold`}
                  >
                    {section.link ? "" : "🚧 "}
                    {section.title}
                  </div>
                )}
              {section.description &&
                (
                  <div class={tw`mt-2`}>
                    {section.description}
                  </div>
                )}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

const SECTIONS = [
  {
    title: "Blog",
    link: "https://blog.marcelocra.dev",
    description:
      "Aprenda sobre design de software, programação, ferramentas de desenvolvimento e produtividade, e muito mais.",
  },
  {
    title: "YouTube",
    link: null,
    description: "Aprenda sobre os mesmos tópicos do blog, porém em vídeo!",
  },
  {
    title: "Newsletter (email)",
    link: null,
    description:
      "Fique por dentro de tudo que acontece no mundo do desenvolvimento! Saiba sobre novos artigos, blogs, vídeos e mais.",
  },
  {
    title: "Instagram",
    link: "https://instagram.com/marcelocralmeida",
    description:
      "Conheça o meu dia a dia :). *Spoiler*: não tem só programação lá",
  },
  {
    title: "Mastodon",
    link: "https://mastodon.social/@marcelocra",
    description:
      "Veja novidades do mundo da tecnologia e empreendedorismo com mais velocidade.",
    props: {
      rel: "me",
    },
  },
];

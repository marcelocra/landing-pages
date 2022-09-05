/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`m-3`}>
      <figure class={tw`rounded-xl`}>
        <img
          class={tw`w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto drop-shadow-lg`}
          src="/profile.min.webp"
          alt="Marcelo smiling at the camera, with light blue and light ping background."
          width="192"
          height="192"
        />
        <div class={tw`my-3 text-center space-y-4`}>
          <div class={tw`text-4xl font-extrabold font-sans`}>
            Marcelo Almeida
          </div>
          <div class={tw`px-1 text-left font-sans`}>
            Olá! Meu nome é <strong>Marcelo</strong>, sou desenvolvedor e{" "}
            <strong>em breve</strong>{" "}
            aqui você poderá conferir meus principais projetos e mídias, só
            clicar nos itens abaixo.
          </div>
        </div>
      </figure>

      <div class={tw`grid grid-cols-1 md:grid-cols-3 gap-4`}>
        {SECTIONS.map((section) => (
          <a
            class={tw`text-black p-3 border border-slate-300 rounded-md`}
            href={section.link ?? "#"}
          >
            {section.title &&
              (
                <div
                  class={tw`text-xl font-bold`}
                  title={section.link ? "" : "Em construção"}
                >
                  {section.title}
                  {section.link ? "" : "🚧"}
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
  );
}

const SECTIONS = [
  {
    title: "Instagram",
    link: null,
    description:
      "Conheça o dia a dia de um programador e aprenda muita coisa útil.",
  },
  {
    title: "Blog",
    link: "https://marcelocra-blog.deno.dev",
    description:
      "Aprenda sobre design de software, programação, ferramentas de desenvolvimento e produtividade, e muito mais.",
  },
  {
    title: "YouTube",
    link: null,
    description: "Aprenda sobre os tópicos do blog, porém em vídeo!",
  },
  {
    title: "Newsletter (lista de email)",
    link: null,
    description:
      "Fique por dentro de tudo que acontece no mundo do desenvolvimento! Saiba sobre novos artigos, blogs, vídeos e mais.",
  },
  {
    title: "Referências",
    link: null,
    description:
      "Tenha acesso às principais referências do mundo do desenvolvimento.",
  },
];

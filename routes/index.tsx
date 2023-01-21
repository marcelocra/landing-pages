export default function Home() {
  return (
    <main class="min-h-screen bg-gray-800 p-4">
      <div class="max-w-4xl mx-auto grid grid-cols-1 gap-4">
        <figure class="rounded-xl">
          <img
            class="md:(w-48 h-auto) w-32 h-32 rounded-full mx-auto"
            src="/profile.min.webp"
            alt="Marcelo smiling at the camera, with light blue and light ping background."
            width="192"
            height="192"
          />
        </figure>
        <div class="grid grid-cols-6 text(center white) font-sans">
          <div class="col-start-2 col-span-4">
            Olá! Meu nome é <strong>Marcelo</strong>, sou{" "}
            <strong>desenvolvedor e designer de software</strong>. Aqui você
            pode conferir meus projetos e mídias.
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SECTIONS.map((section) => (
            <a
              class={`${
                section.link
                  ? "hover:bg-purple-800 text-white border-gray-400"
                  : "cursor-not-allowed text-gray-500 border-gray-500"
              } p-3 border rounded-md drop-shadow-md grid grid-cols-1 content-start`}
              href={section.link ?? ""}
              title={section.link ? "" : "Em construção"}
              {...section.props}
            >
              {section.title &&
                (
                  <div class="text-xl font-bold">
                    {section.title}
                  </div>
                )}
              {section.description &&
                (
                  <div>
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
    link: "https://marcelocra.dev/blog",
    description:
      "Aprenda sobre design de software, programação, ferramentas de desenvolvimento e produtividade, e muito mais.",
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
];

export const prerender = true;

export function load() {
	return {
		sections: [
			{
				title: 'Instagram',
				link: null,
				description: 'Conheça o dia a dia de um programador e aprenda muita coisa útil.'
			},
			{
				title: 'Blog',
				link: null,
				description:
					'Aprenda sobre design de software, programação, ferramentas de desenvolvimento e produtividade, e muito mais.'
			},
			{
				title: 'YouTube',
				link: null,
				description: 'Aprenda sobre os tópicos do blog, porém em vídeo!'
			},
			{
				title: 'Newsletter (lista de email)',
				link: null,
				description:
					'Fique por dentro de tudo que acontece no mundo do desenvolvimento! Saiba sobre novos artigos, blogs, vídeos e mais.'
			},
			{
				title: 'Referências',
				link: null,
				description: 'Tenha acesso às principais referências do mundo do desenvolvimento.'
			}
		]
	};
}

<script lang="ts">
	import profilePicture from '$lib/assets/profile.min.webp';

	import type { PageData } from './$types';

	export let data: PageData;

	let linkText = 'Aperte aqui';
</script>

<svelte:head>
	<title>Home - Marcelo Almeida</title>
	<meta name="description" content="Aqui você vai aprender sobre design de software, programação, ferramentas de desenvolvimento e produtividade, e muito mais." />
</svelte:head>

<figure class="rounded-xl">
	<img
		class="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto drop-shadow-lg"
		src={profilePicture}
		alt="Marcelo smiling at the camera, with light blue and light ping background."
		width="192"
		height="192"
	/>
	<div class="my-3 text-center space-y-4">
		<div class="text-4xl font-extrabold font-sans">Marcelo Almeida</div>
		<div class="px-1 text-left font-sans">
			Olá! Meu nome é <strong>Marcelo</strong>, sou desenvolvedor e
			<strong>em breve</strong>
			aqui você poderá conferir meus principais projetos e mídias, só clicar
			nos itens abaixo.
		</div>
	</div>
</figure>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	{#each data.sections as section}
			<a
				class="text-black p-3 border border-slate-300 rounded-md"
				href={section.link ?? '#'}
				on:click={() => {
					if (section.link) {
						return;
					}

					alert('🚧 Site em construção! Volte em breve!😉🚀🔥');
				}}
			>
				{#if section.title}
					<div class="text-xl font-bold">
						{section.title}
					</div>{/if}
				{#if section.description}
					<div class="mt-2">
						{section.description}
					</div>{/if}
			</a>
	{/each}
</div>

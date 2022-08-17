<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h2>Apêndice</h2>

	<p>
		Esse app foi construído usando <a href="https://kit.svelte.dev">SvelteKit</a>. Para fazer o seu
		próprio, siga as instruções <a href="https://mcra.dev/hello-world">desse post</a>.
	</p>
	<p>
		Inclusive, essa página contém HTML estático (puro), sem nenhum tipo de interatividade no
		client-side. Ou seja, não carrega nenhum tipo de JavaScript. Se quiser conferir, abra o código
		fonte ou use os devtools na aba de rede e recarregue.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>

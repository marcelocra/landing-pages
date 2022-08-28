<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>All links</title>
</svelte:head>

{#each data.links as link, i}
	<pre>[{i}]: <a href={`/link/${link[0]}`}>{link[0]}</a> => {link[1]}</pre>
{/each}

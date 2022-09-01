<script lang="ts">
	import type { PageData } from './$types';

	// @ts-ignore
	import { parse } from 'marked';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="This is my blog" />
</svelte:head>

<section>
	this is the value: {data.value}
</section>

<style></style>

<script>
	// @ts-nocheck Don't care about types for marked.
	import { parse } from 'marked';

	export let value;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="This is my blog" />
</svelte:head>

<section>
	this is the value: {value}
</section>

<style></style>

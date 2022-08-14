<script>
	// @ts-ignore Don't care about types for marked.
	import { parse } from 'marked';

	let md = `
# Ideias de artigos para o blog

## Conceitos gerais que Svelte aborda

- [ ] app with modern best practices
  - [ ] build optimizations (load only minimal required code)
  - [ ] offline support
  - [ ] prefetching
  - [ ] configurable rendering (allows to generate html on the server or in the
    browser at runtime or at build-time)
- [ ] vite
- [ ] svelte plugins
- [ ] hot module replacement (hmr)
- [ ] server side rendering
- [ ] static site generation

## Conceitos específicos de Svelte

### Principais

- toda página é um componente Svelte
- páginas vão em \`src/routes\`. São renderizadas pelo servidor para que a
  primeira visita seja tão rápida quanto possível. Depois o app de client-side
  ganha prioridade.

### Project files

- src
  - lib: código das minhas libs, a ser importado com $lib ou empacotado com
    svelte-kit package
  - params: param matchers, pra garantir que os parâmetros de um método são os
    que a gente espera
  - routes: contém as páginas e endpoints da aplicação
  - app.html: template principal
    - %sveltekit.head% - link and scritp tags the app need, plus <svelte:head>
      stuff
    - %sveltekit.body% - markup para uma página renderizada
    - %sveltekit.assets% - relative path from page to paths.assets
    - %sveltekit.nonce% - csp nonce for manually included links and scripts, if
      used
  - hooks.js (optional): apps's hooks
  - service-worker.js (optional): contains your service worker
- static: static assets to be served as is (robots.txt, favicon.png, etc)
- package.json: usual. Uses type: module to enable js native modules and the
  import/export keyworks. Legacy commonjs files need a .cjs file extension
- svelte.config.js: all of svelte and sveltekit configs
- tsconfig.json: usual. Difference is that svelte kit creates one that is
  appropriate for the framework and extends it here.

### Other files

- test: usual. I don't like having tests in a separate dir.. probably won't be
  using this.
- .svelte-kit: sveltekit generated files for development. Configurável através
  do outDir. Deletar essa pasta é ok.. svelte vai criar outra da próxima vez
  que rodarmos

  `;
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="This is my blog" />
</svelte:head>

<section>
	{@html parse(md)}
</section>

<style></style>

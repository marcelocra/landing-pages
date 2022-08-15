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
- páginas vão em `src/routes`. São renderizadas pelo servidor para que a
  primeira visita seja tão rápida quanto possível. Depois o app de client-side
  ganha prioridade.

### Project files

- `src`
  - `lib`: código das minhas libs, a ser importado com $lib ou empacotado com
    svelte-kit package
  - `params`: param matchers, pra garantir que os parâmetros de um método são os
    que a gente espera
  - `routes`: contém as páginas e endpoints da aplicação
  - `app.html`: template principal
    - `%sveltekit.head%` - link and scritp tags the app need, plus <svelte:head>
      stuff
    - `%sveltekit.body%` - markup para uma página renderizada
    - `%sveltekit.assets%` - relative path from page to paths.assets
    - `%sveltekit.nonce%` - csp nonce for manually included links and scripts,
      if used
  - `hooks.js` (optional): apps's hooks
  - `service-worker.js` (optional): contains your service worker
- `static`: static assets to be served as is (robots.txt, favicon.png, etc)
- `package.json`: usual. Uses type: module to enable js native modules and the
  import/export keyworks. Legacy commonjs files need a .cjs file extension
- `svelte.config.js`: all of svelte and sveltekit configs
- `tsconfig.json`: usual. Difference is that svelte kit creates one that is
  appropriate for the framework and extends it here.

### Other files

- `test`: usual. I don't like having tests in a separate dir.. probably won't be
  using this.
- `.svelte-kit`: sveltekit generated files for development. Configurável através
  do outDir. Deletar essa pasta é ok.. svelte vai criar outra da próxima vez que
  rodarmos

### Web standards

#### Fetch APIs

- usa fetch normalmente, como se espera. Também está disponível em hooks e
  endpoints
- uma diferença é a versão que está dentro da função load. Essa versão chama os
  endpoints diretamente durante server-side rendering, sem fazer uma chamada
  http (mas preservando credenciais)
  - chamadas com credencial fora do load precisam de cookie ou auth header
  - também permite "relative requests" (provavelmente requests sem especificar a
    URL completa)
- além do fetch, a API ainda inclui Request, Response, Headers

#### Stream APIs

Respostas que precisam de mais dado do que se cabe em uma request.

#### URL APIs

Basicamente uma interface pra URLs, com origin, pathname (hash, no browser),
etc. Aparecem em diversos lugares, como em event.url nos hooks e endpoints, no
$page.url nas pages, from and to no (before|after)Navigate, etc.

##### URLSearchParams

Todo lugar que tem uma URL (item anterior), tem um url.searchParams, que se
refere aos query params (?x=10) de uma URL.

#### Web crypto

Disponível pelo global `crypto`, usado para CSP headers. Mas também pode ser
usado para geração de UUID: crypto.randomUUID()

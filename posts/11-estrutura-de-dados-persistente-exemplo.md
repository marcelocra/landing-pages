---
title: "Exemplo de estrutura de dados persistente"
date: "2020-10-29"
instagram: "https://www.instagram.com/p/CG8U6KaBdpX/"
link: "https://en.wikipedia.org/wiki/Persistent_data_structure#/media/File:Purely_functional_tree_after.svg"
linkNumber: 11
draft: false
---

Imagem de uma estrutura de dados persistente.

Esse tipo de estrutura permite cópias com o mínimo de duplicação. Isso faz com que estruturas de dados imutáveis sejam bem mais baratas em relação à quantidade de memória utilizada, uma vez que uma parte considerável da nova estrutura compartilha os elementos da anterior.

Todas as coleções de Clojure são imutáveis e usam isso por padrão (e não tem como não usar, a não ser por meio de interop com Java).

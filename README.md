# Pokémon TCG Search

Uma aplicação simples em Next.js para pesquisar cartas de Pokémon TCG usando a [Pokémon TCG API](https://pokemontcg.io/).


## Funcionalidades

-  Pesquise cartas Pokémon pelo nome.
-  Debounce: busca somente após o usuário parar de digitar.
-  Lista de resultados com imagem e informações básicas.
-  Loading e tratamento de erro caso nenhuma carta seja encontrada.

---

## Tecnologias

- [Next.js](https://nextjs.org/) — Framework React para SSR.
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática.
- [Tailwind CSS](https://tailwindcss.com/) — Estilização utilitária.
- [Pokémon TCG API](https://pokemontcg.io/) — Dados das cartas.

---

## Estrutura de Pastas

```bash
/app
  /(home)
    page.tsx
  /_components
    search.tsx
    title.tsx
  /_services
    searchService.ts

_components/ → Componentes reutilizáveis.

_services/ → Funções de integração com a API.

# Clone o repositório
git clone https://github.com/AlexPCarvalho/pokemon_cards.git

# Entre na pasta
cd seu-repo

# Instale as dependências
npm install

# Rode o projeto em dev
npm run dev

# Acesse:
http://localhost:3000
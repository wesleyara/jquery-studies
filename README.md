# jQuery Studies

Este repositório tem como objetivo armazenar os estudos realizados com a biblioteca jQuery.

## O que é jQuery?

jQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente. A biblioteca jQuery é de fácil utilização e simplifica a manipulação de elementos HTML, manipulação de eventos, animações, requisições AJAX, etc.

## Como utilizar jQuery?

Para utilizar a biblioteca jQuery, basta incluir o arquivo jQuery no seu projeto. Você pode baixar o arquivo jQuery no site oficial da biblioteca ou utilizar o CDN (Content Delivery Network) do Google.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <script
      src="https://code.jquery.com/jquery-3.7.1.js"
      integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
      crossorigin="anonymous"
    ></script>
  </head>
  <body></body>
</html>
```

## Scripts

Dentro do _index.ts_ temos um script para criação de novas pastas dentro do _src_, aplicando o template contido na pasta _templates_ e facilitando o processo de criação de um novo conteúdo.

```bash
# Cria uma nova pasta com o template contido na pasta templates
yarn dev
# ou
npm run dev
```


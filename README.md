# Sistema de Gestão de Turmas e Alunos

Este projeto é um site de notícias sobre exploração espacial, que consome dados da <a href="https://api.spaceflightnewsapi.net/v4/docs/">**Spaceflight News API v4**</a>. O sistema permite que os usuários leiam as últimas notícias relacionadas a viagens espaciais e ciência espacial, com opções de pesquisa e filtros para facilitar a busca de artigos. Pelo lado *técnico*, Este projeto integra um aplicativo React com Electron para rodar a aplicação como um desktop application (app de desktop). O processo a seguir descreve como configurar e executar a aplicação React no Electron, tanto usando a versão de produção gerada com o `build`, quanto em modo de desenvolvimento.

## Descrição do Minimundo

O site permite que os usuários acessem as notícias mais recentes sobre missões espaciais, descobertas científicas, lançamentos de foguetes, e outros eventos relacionados ao setor aeroespacial. Ele também oferece funcionalidades de pesquisa e filtragem para que os usuários possam encontrar facilmente artigos sobre temas específicos, como missões, foguetes, planetas e mais.

### Caso de Uso
O usuário entra no Spaceflight News para se atualizar sobre as últimas notícias sobre missões espaciais. Ele pode filtrar os artigos com base em palavras-chave ou categorias como NASA, SpaceX, ou Exploração Lunar. O site também oferece uma opção de pesquisa, permitindo que o usuário procure por notícias específicas.

Após a filtragem ou pesquisa, o usuário pode clicar nos artigos para ver os detalhes completos, incluindo a data da publicação e um link para o site de origem da notícia.

### Funcionalidades
- Exibir notícias relacionadas a exploração espacial.

- Filtros: O usuário pode filtrar as notícias por categoria, por exemplo: "Missões Espaciais", "Foguetes", "Exploração Lunar".

- Pesquisa: O usuário pode realizar buscas por palavras-chave ou termos relacionados.

- Links Externos: Cada notícia vem com um link direto para o site de origem da informação.

- Testes unitários e de uso

## Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org) (inclui o npm)
- [Electron](https://www.electronjs.org/)

## Passo 1: Instalar as Dependências

Clone este repositório e instale as dependências necessárias:

```bash
git clone <URL_DO_REPOSITORIO>
cd <diretorio_do_repositorio>
npm install
```

Este comando instalará todas as dependências, incluindo o React, Electron e outras bibliotecas necessárias.

## Passo 2: Rodar a Aplicação React em Modo de Desenvolvimento
Para começar o desenvolvimento, você pode rodar o servidor de desenvolvimento do React. Isso criará um servidor local que servirá o seu aplicativo React na URL http://localhost:3000.

Execute o seguinte comando para iniciar o servidor de desenvolvimento do React:

```bash
npm start
```
O React será servido no http://localhost:3000, e o navegador deverá ser aberto automaticamente com sua aplicação.

### Por que usar o servidor de desenvolvimento do React?
Em vez de gerar um build estático do React, esta abordagem usa o servidor de desenvolvimento, permitindo que você veja as alterações imediatamente sem precisar rodar o comando npm run build a cada modificação. Além disso, o React Hot Reload estará funcionando, o que significa que você verá as alterações em tempo real sem recarregar a página.

## Passo 3: Rodar o Electron com o React
Agora, vamos rodar o Electron, que irá carregar o conteúdo da aplicação React diretamente do servidor de desenvolvimento. Para isso, modifique o arquivo main.js do Electron para acessar o servidor local.

### Modificação do Arquivo main.js:
No arquivo electron/main.js, altere o seguinte trecho de código para carregar o conteúdo do servidor local do React:

```js
mainWindow.loadURL('http://localhost:3000');
```

Isso fará com que o Electron acesse o servidor de desenvolvimento local, exibindo a aplicação React diretamente na janela do Electron.

### Rodar o Electron:
Após iniciar o servidor do React, em outro terminal, execute o comando abaixo para iniciar o Electron:

```bash
npm run electron
```
Isso abrirá uma janela do Electron que estará carregando a sua aplicação React diretamente de http://localhost:3000.

### Motivo da decisão técnica
Como foi implemento, com a função loadURL('http://localhost:3000'), instrui-se o Electron a acessar o servidor de desenvolvimento que você iniciou no passo anterior, permitindo que ele carregue o conteúdo dinâmico da aplicação React. Essa abordagem é muito útil em desenvolvimento porque não exige a geração de um build cada vez que você altera o código, economizando tempo e permitindo uma experiência de desenvolvimento mais fluida.

## Passo 4: Fazer Alterações no Código
Com o servidor de desenvolvimento rodando e o Electron exibindo sua aplicação, você pode fazer alterações no código do React. O React irá automaticamente refletir essas alterações no Electron sem necessidade de reiniciar o processo. O Electron atualizará automaticamente a janela sempre que o servidor de desenvolvimento enviar mudanças.

## O que eu faria com mais tempo?

- Aprimoraria as funcionalidades, para além de filtro e pesquisa

- Aprimoraria o template do site

- Empacotaria uma versão estática do código ao Electron para fácil visualização

Desenvolvido por Victor Martins.
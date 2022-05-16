<h1 align="center">Feedback Widget</h1>

<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Preview do Feedback Widget" />

&#xa0;

<a href="https://feedback-widget-jose-bone.vercel.app">Demo</a>

</div>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/jose-bone/feedback-widget?color=8257E6&labelColor=000000">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/jose-bone/feedback-widget?color=8257E6&labelColor=000000">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jose-bone/feedback-widget?color=8257E6&labelColor=000000">

  <img alt="License" src="https://img.shields.io/github/license/jose-bone/feedback-widget?color=8257E6&labelColor=000000">

  <img alt="Github issues" src="https://img.shields.io/github/issues/jose-bone/feedback-widget?color=8257E6&labelColor=000000" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/jose-bone/feedback-widget?color=8257E6&labelColor=000000" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/jose-bone/feedback-widget?color=8257E6&labelColor=000000" />
</p>

Status

<h4 align="center">
	🚧  Feedback Widget 🚀 Under construction...  🚧
</h4>

<hr>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-como-rodar">Como rodar</a> &#xa0; | &#xa0;
  <a href="#memo-licenca">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/jose-bone" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre

Interface de um widget para enviar comentários de feedbacks

## :sparkles: Funcionalidades

- :heavy_check_mark: Envio de feedbacks
- :heavy_check_mark: Screenshot com **html2canvas**
- :heavy_check_mark: Uso do **MailTrap** para simular envio de e-mails com os feedbacks

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev)
- [MailTrap](https://mailtrap.io/)
- [PostgreSQL](https://www.postgresql.org)
- [html2canvas](https://html2canvas.hertzen.com)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requisitos

Antes de iniciar :checkered_flag:, você precisa ter instalado o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/).

## 👷 Como rodar

```bash
# Clone o Repositório
$ git clone https://github.com/jose-bone/feedback-widget.git

# Entre na pasta
$ cd feedback-widget
```

### 📦 Rode o Servidor

```bash
# Vá para a pasta do servidor
$ cd server

# Instale as dependências
$ yarn install

# Crie o banco de dados via migrate
$ npx prisma migrate dev

# Rode a aplicação
$ yarn dev
```

Acesse a API: http://localhost:3333/

### 💻 Rode o Projeto Web

```bash
# Vá para a pasta web
$ cd web

# Instale as dependências
$ yarn install

# Rode a aplicação
$ yarn dev
```

Acesse: http://localhost:3000/ para ver o resultado.

### 📱 Rode o Projeto Mobile

Para rodar o projeto mobile você precisa de um celular com o [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) instalado ou um emulador android/ios.

```bash
# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ yarn install

# Rode a aplicação
$ yarn start
```

Depois leia o QRCode com o app do [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) ou rode em um emulador.

## 🐛 Problemas

Fique a vontade **para criar uma nova issue** com o respetivo titulo e descrição na página de issues do [Feedback Widget](https://github.com/jose-bone/feedback-widget/issues). Se você já encontrou a solução para o problema, **Eu amaria fazer o review do seu pull request**!

## ♻ Como contribuir

- Faça fork deste repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## :memo: Licença

Esse projeto está sob a licença MIT. Para mais detalhes, veja o arquivo [LICENSE](LICENSE.md).

Made with :heart: by <a href="https://github.com/jose-bone" target="_blank">José Boné</a>

&#xa0;

<a href="#top">Back to top</a>

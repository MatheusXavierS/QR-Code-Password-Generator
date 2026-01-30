# 📦 Gerador de QR Code e Senhas (CLI)

Projeto desenvolvido para **estudos de Node.js**, com foco em organização de código, uso de **packages externos** e interação via **terminal (CLI)**.

A aplicação permite:
- Gerar **QR Codes diretamente no terminal**
- Gerar **senhas personalizadas**, configuráveis via `.env`

---

## 🎯 Objetivo do Projeto

Este projeto foi criado com o objetivo de:
- Praticar **Node.js com JavaScript**
- Aprender a utilizar **packages do ecossistema Node**
- Trabalhar com **entrada de dados no terminal**
- Estruturar um projeto de forma organizada e escalável

---

## 🛠️ Tecnologias e Pacotes Utilizados

- **Node.js**
- **JavaScript**
- **prompt** – interação com o usuário via terminal
- **qrcode-terminal** – geração de QR Code no terminal
- **chalk** – estilização de mensagens no terminal
- **dotenv** – gerenciamento de variáveis de ambiente

---

## 📂 Estrutura do Projeto
src/
├── index.js
├── prompts-schema/
│   ├── prompt-main.js
│   └── prompt-qrcode.js
├── services/
│   ├── password/
│   │   ├── utils/
│   │   │   └── permitedCharacters.js
│   │   ├── create.js
│   │   └── handle.js
│   └── qr-code/
│       ├── create.js
│       └── handle.js
.env
.gitignore
package.json
package-lock.json

---

## ⚙️ Configuração do Ambiente

Crie um arquivo .env na raiz do projeto:

    UPPERCASE_LETTERS=true
    LOWERCASE_LETTERS=true
    NUMBERS=true
    SYMBOLS=true
    PASSWORD_LENGTH=8

---

## ▶️ Como Executar o Projeto

Instalar dependências:

    npm install

Executar a aplicação:

    node src/index.js

Ou utilizando o script do package.json:

    npm start

---

## 🧩 Funcionalidades

### 🔹 Gerador de QR Code
- Geração de QR Code diretamente no terminal
- Suporte a textos e links

### 🔹 Gerador de Senhas
- Senhas configuráveis via .env
- Letras maiúsculas
- Letras minúsculas
- Números
- Símbolos
- Tamanho configurável

---

## 📌 Status do Projeto

✅ Finalizado  
Projeto desenvolvido exclusivamente para fins de estudo.

---

## 📚 Aprendizados

- Uso de pacotes externos no Node.js
- Criação de aplicações CLI
- Organização de código por serviços
- Uso de variáveis de ambiente com dotenv

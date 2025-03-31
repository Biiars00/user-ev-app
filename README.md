# Users Ev App

## ✏️ Descrição

> Este é um projeto desenvolvido em **Node.js** em **Typescript** para gestão de usuários. Ele oferece funcionalidades para cadastrar, listar, atualizar e excluir usuários (CRUD), utilizando o banco de dados **MySQL**.

## 🚀 Tecnologias Utilizadas

- Node.Js
- Express
- Nodemon
- MySQL
- Tsyringe
- Swagger OpenAPI (Documentação da API)

## 🪄 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.Js](https://nodejs.org/pt/download)
- [MySQL](https://dev.mysql.com/downloads/workbench/)

## 📂 Estrutura do Projeto

```
user-ev-app/
├── src/
│   ├── controller/   # Camada de controle (API REST)
│   ├── database/     # Configuração e queries do banco de dados
│   ├── dependencies/ # Camada de injeção de dependências com Tsyringe
│   ├── interfaces/   # Definição e tipagem dos dados da aplicação
│   ├── repositories/ # Camada de manipulação e consultas no banco de dados
│   ├── routers/      # Camada de definição de rotas da API
│   ├── service/      # Camada de regras de negócios da aplicação
```

## 🔌 Executando o Projeto

1️⃣ **Clonar o Repositório:**

```
git clone https://github.com/Biiars00/user-ev-app
cd user-ev-app
```

2️⃣ **Configurar o Banco de Dados MySQL:**

**OBS**: Utilizei o Workbench para visualização dos dados. Então, se deseja seguir por essa mesma prática, ao realizar o download do MySQL, opte por incluir o pacote Workbench na instalação.

- Siga as etapas de instalação e configuração neste [tutorial](https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela?srsltid=AfmBOorowa93fLj8UUieaT8t5aKGyzLm804QQBk0_GozfMHnvFnFsgbU).

3️⃣ **Executar a Aplicação:**

- Instale as bibliotecas:
    ```
    npm install
    ```

- Rode a aplicação:
    ```
    npm run dev
    ```

A aplicação estará rodando em: `http://localhost:3001`

## 📌 Endpoints da API

| Médoto | ENDPOINT                | Descrição                                               |
|--------|-------------------------|---------------------------------------------------------|
| GET    | /api-ev?page=1&limit=3  | Lista todos os usuários (paginados por ordem alfabética)|
| GET    | /api-ev/{id}            | Busca um usuário pelo ID                                |
| POST   | /api-ev                 | Adiciona um novo usuário                                |
| PUT    | /api-ev/{id}            | Atualiza um usuário                                     |
| DELETE | /api-ev/{id}            | Remove um usuário                                       |

## 📑 Documentação da API

A documentação da API estará disponível via Swagger após iniciar a aplicação:
```
--->>> Em construção!
```

## 📄 Contribuição

Sinta-se livre para usá-lo e contribuir! 🚀

### Desenvolvido por [Beatriz Ribeiro](https://github.com/Biiars00/) 🦋

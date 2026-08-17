# 🚀 Programação II - Faculdade Descomplica

Projetos, exercícios e conceitos desenvolvidos durante a disciplina de **Programação II** da **Faculdade Descomplica**. O objetivo principal é o domínio do desenvolvimento Web Full-Stack, compreendendo desde a arquitetura de backend com Node.js até o consumo de APIs RESTful no frontend com Next.js.

---

## 🛠️ Tecnologias & Conceitos Estudados

### 🟢 Backend & Servidor
- **Node.js**: Runtime JavaScript para construção de aplicações rápidas e escaláveis no lado do servidor.
- **Express.js**: Framework para gerenciamento de rotas, middlewares e criação de servidores HTTP.

### 🏛️ Arquitetura & Padrões
- **Padrão MVC (Model-View-Controller)**:
  - **Model**: Gerenciamento de regras de negócio e manipulação de dados.
  - **View**: Interface com o usuário (ou respostas JSON fornecidas à API).
  - **Controller**: Intermediário do fluxo de requisições e respostas.
- **Middlewares**: Funções intermediárias para validação de dados, autenticação de usuários e tratamento centralizado de erros.

### 🔄 Comunicação & Persistência
- **API RESTful**: Criação de rotas padronizadas seguindo os métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`) e boas práticas de status code.
- **CRUD Complete**: Operações essenciais de *Create, Read, Update, Delete*.
- **Banco de Dados**: Modelagem e integração com bancos relacionais/não-relacionais (ex: PostgreSQL, MongoDB, ORMs como Prisma/Sequelize).

### 🔵 Frontend & Consumo
- **Next.js**: Framework React para produção, utilizando recursos modernos como Server/Client Components e rotas dinâmicas.
- **Consumo de API**: Integração com serviços de backend via `fetch` / `Axios`, lidando com estados de carregamento, tratamento de erros e exibição de dados em tempo real.

---

## 🌟 Boas Práticas do Mercado Aplicadas

- **Clean Code & Modularização**: Organização clara de arquivos e separação rígida de responsabilidades.
- **Tratamento Semântico de Erros**: Retorno adequado de HTTP Status Codes (200, 201, 400, 401, 404, 500).
- **Variáveis de Ambiente (`.env`)**: Proteção de chaves de API e credenciais sensíveis de banco de dados.
- **Commits Semânticos**: Controle de versão consistente e organizado no Git/GitHub.

---

## 📁 Estrutura do Projeto

```text
├── src/
│   ├── controllers/   # Regras de fluxo HTTP e controladores
│   ├── models/        # Schemas de banco de dados e regras de negócio
│   ├── routes/        # Definição dos endpoints RESTful
│   ├── middlewares/   # Trava de segurança, validações e logs
│   ├── services/      # Integrações e lógica de apoio
│   └── database/      # Conexão e configuração do banco de dados
├── public/            # Recursos estáticos
├── .env.example       # Template de variáveis de ambiente
├── package.json       # Dependências e scripts
└── README.md          # Documentação do repositório
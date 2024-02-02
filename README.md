# Basic school

### Clonar o projeto:

```shell
git clone git@github.com:reinaldoper/school.git
```
`cd escola-front`

`npm install`

`npm run dev`

## School Basic - Projeto ReactJS com TypeScript

### Introdução

- O projeto School Basic é uma aplicação desenvolvida utilizando ReactJS e TypeScript, destinada a proporcionar   uma plataforma básica para gestão escolar. Este documento descreve as diretrizes, estrutura e padrões de codificação a serem seguidos no desenvolvimento e manutenção deste projeto.

### Estrutura do Projeto 

- O projeto School Basic segue uma estrutura organizada para garantir clareza e manutenibilidade do código. Abaixo está uma visão geral da estrutura de diretórios:

```shell
escola-front/
|-- src/
|   |-- assets/
|   |-- component/
|   |-- pages/
|   |-- services/
|   |-- styles/
|   |-- Routes/
|   |-- Types/
|   |-- store/
|-- main.tsx
|-- tsconfig.json
|-- package.json
|-- ...
```

- src/: Contém os principais códigos fonte do projeto.
- assets/: Contém as imgens do projeto.
- components/: Componentes React reutilizáveis.
- pages/: Páginas da aplicação.
- services/: Serviços para integração com API ou lógica de negócios.
- styles/: Estilos globais ou compartilhados.
- Routes/: Rotas da aplicação.
- store/: Guarda 0 estado geral da aplicação.
- Types/: Todas as tipagens da aplicação.
- main.tsx: Ponto de partida da aplicação.
- tsconfig.json: Configurações TypeScript.
- package.json: Dependências e scripts do projeto.

### Padrões de Codificação
- Para manter consistência e clareza no código, siga os padrões de codificação estabelecidos:

### Nomenclatura:

- Utilize camelCase para nomes de variáveis e funções.
Utilize PascalCase para nomes de componentes e classes.
Mantenha nomes descritivos e significativos.

### Tipagem:

Aproveite ao máximo a tipagem fornecida pelo TypeScript para evitar erros.
Utilize tipos e interfaces de forma apropriada.

### Estilo de Código:

```shell
Siga as diretrizes do linter configurado no projeto.
Formate o código de acordo com as configurações do Prettier.
Dependências
As dependências do projeto estão listadas no arquivo package.json. Certifique-se de manter esta lista atualizada e utilize as versões especificadas para garantir compatibilidade.
```


### Contribuição

- Ao contribuir para o projeto, siga o fluxo de trabalho de desenvolvimento colaborativo estabelecido. Crie branches específicas para as funcionalidades ou correções que estiver implementando e abra pull requests para revisão.

### Considerações Finais

- O School Basic é um projeto ReactJS com TypeScript voltado para a gestão escolar. Ao contribuir ou manter este projeto, mantenha a qualidade do código, respeite os padrões estabelecidos e promova uma colaboração eficiente.

### Agradeço pelo seu comprometimento com o desenvolvimento do School Basic!

Boas práticas de codificação,

ReinaldoDeveloper

Equipe de Desenvolvimento - School Basic
# Vet Franchise Microservice

Essa aplicação consiste em um microserviço de back-end para a administração de dados de uma franquia de clínicas veterinárias. A partir dessa aplicação, é feito o controle do cadastro de donos de animais e de seus respectivos animais.

## Autor

- **Lucas Scommegna** - [scommegnal@hotmail.com](scommegnal@hotmail.com)

## Iniciando a aplicação

Primeiramente, clone o repositório atual na sua máquina, pelo terminal a partir do seguinte comando:

```
git clone <link HTTPS ou SSH> .
```

Após, utilize o seguinte comando no terminal, estando localizado na pasta da aplicação:

```
npm install
```

Na seção "Database" da sua conta MongoDB, escolha uma data base, clique em connect, escolha a opção "Drivers" para o "Connect to your application" e copie a connection string gerada para a Database.

Crie na pasta raiz da aplicação um arquivo ".env" e crie um valor "MONGO_URI" e iguale a connection string gerada, lembrando de completar os parametros dela. A connection string tem o seguinte formato:

```
mongodb+srv://<nome-do-usuario>:<password>@nodeexpressprojects.k3spluk.mongodb.net/<database-name>?retryWrites=true&w=majority
```

Sendo os campos "password" a senha da sua database, "database-name" o nome da database a ser criada e o campo "nome-do-usuario" o seu nome de usuário no MongoDB, sendo esse campo gerado automaticamente.

Após essas configurações da aplicação e do MongoDB, está na hora de configurar o Postman.

Com o aplicativo do Postman aberto e com sua conta logada, clique no canto superior esquerdo, na seção "My workspace" em import e arraste o arquivo "Vet-Franchise-Microservice.postman_collection.json".
Após isso, todas as rotas do Postman já estarão configuradas para serem testadas.

Dessa forma, a aplicação está praticamente configurada. Após tudo isso, digite no terminal o seguinte comando para iniciar a aplicação:

```
npm run dev
```

## Utilizando a aplicação

Após as instalações anteriores terem sido feitas, e a aplicação estar rodando após o comando "npm run dev", todas as requisições para as rotas serão feitas através do Postman, e serão explicadas a seguir.

### Rota GET/tutors

A requisição para essa rota retornará um body JSON com as informações de todos os donos de pets cadastrados no banco de dados.

### Rota POST/tutor

A requisição para essa rota deve ser feita enviando um body, em formato JSON, com os seguintes campos, com os seguintes tipos:

```
{
    "name": string,
    "phone": string,
    "email": string,
    "date_of_birth": Date,
    "zip_code": string
}
```

Após o sucesso da requisição, também será gerado um campo "\_id" com um valor identificador único para o dono e um vetor para armazenamento dos seus pets.

### Rota PUT/tutor/:id

A requisição para essa rota atualizará os dados de um dono, cujo valor de "id" deve ser passado nos parâmetros de rota. Além disso, deve ser enviado um body, em formato JSON, com os campos que devem ser atualizados do dono, sendo possíveis campos de atualização os mesmos da rota "POST/tutor".

### Rota DELETE/tutor/:id

A requisição para essa rota deletará todas as informações de um dono, cujo valor de "id" deve ser passado nos parâmetros de rota.

### Rota POST/pet/:tutorId

A requisição para essa rota criará e armazenará no banco de dados os dados de um pet cujo relacionamento será feito pelo "id" do dono que deve ser passado nos parâmetros de rota. Além disso, deve ser enviado um body, em formato JSON, com os seguintes campos, com os seguintes tipos:

```
{
    "name": string,
    "species": string,
    "carry": string,
    "weight": number,
    "date_of_birth": Date
}
```

Após a requisição ser feita com sucesso, os dados do pet cadastrado serão salvos em uma tabela do banco de dados e serão gerados também dois novos campos para o pet: um campo "\_id", com um valor identificador único para o pet e um campo "owner", que contém o valor de "\_id" do dono do pet, sendo esse campo utilizado para o relacionamento de dados. Além disso, os dados do pet cadastrado serão salvos no vetor "pets" do dono.

### Rota PUT/pet/:petId/tutor/:tutorId

A requisição para essa rota atualizará os dados de um pet de um determinado dono (cujos valores de "id" devem ser especificados nos parâmetros de rota), sendo esses dados atualizados na tabela de pets e no vetor de pets do dono. Para que a atualização seja feita, deve ser enviado um body, em formato JSON, contendo os campos do pet a serem atualizados, sendo que esse campos devem seguir o formato especificado na rota "POST/pet/:tutorId".

### Rota DELETE/pet/:petId/tutor/:tutorId

A requisição para essa rota deletará todos os dados de um determinado pet de um determinado dono (cujos valores de "id" devem ser especificados nos parâmetros de rota) do banco de dados e do vetor de pets do dono.

## Tecnologias utilizadas

- [Express](https://expressjs.com/pt-br/) - Framework Back-End.
- [TypeScript](https://www.typescriptlang.org/) - Superset, para tipagem de JavaScript.
- [MongoDB](https://www.mongodb.com/pt-br) - Banco de dados não-relacional.
- [Mongoose](https://mongoosejs.com/) - Modelador de objetos de MongoDB para NodeJS
- [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev) - Compilador de TypeScript para aplicações NodeJs
- [dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca de gerenciamento de variáveis ambiente.

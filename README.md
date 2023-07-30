# Vet Franchise Microservice

Essa aplicação consiste em um microserviço de back-end para a administração de dados de uma franquia de clínicas veterinárias. A partir dessa aplicação, é feito o controle do cadastro de donos de animais e de seus respectivos animais.

## Iniciando a aplicação

Primeiramente, clone o repositório atual na sua máquina, pelo terminal a partir do seguinte comando:

```
Git clone <link HTTPS ou SSH>
```

Após, utilize o seguinte comando no terminal, estando localizado na pasta da aplicação:

```
npm install
```

Na seção "Database" da sua conta MongoDB, escolha uma data base, clique em connect, escolha a opção "Drivers" para o "Connect to your application" e copie a connection string gerada para a Database.

Crie na pasta raiz da aplicação um arquivo ".env" e crie um valor "MONGO_URI" e iguale a connection string gerada, lembrando de completar os parametros dela. A connection string tem o seguinte formato:

```
mongodb+srv://lucas:<password>@nodeexpressprojects.k3spluk.mongodb.net/<database-name>?retryWrites=true&w=majority
```

Sendo o campo "password" a senha da sua database e o "database-name" o nome da database a ser criada.

Após essas configurações da aplicação e do MongoDB, está na hora de configurar o Postman.

Com o aplicativo do Postman aberto e com sua conta logada, clique no canto superior esquerdo, na seção "My workspace" em import e arraste o arquivo "Vet-Franchise-Microservice.postman_collection.json".
Após isso, todas as rotas do Postman já estarão configuradas para serem testadas.

Dessa forma, a aplicação está praticamente configurada. Após tudo isso, digite no terminal o seguinte comando para iniciar a aplicação:

```
npm start
```

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

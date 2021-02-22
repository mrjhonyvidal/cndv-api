## CNDV API

O webservice do CDNV está constituído de uma API que centraliza a lógica responsável pelos controle de campanhas de vacinação assim como os tipos de vacinas e as entidades responsáveis por sua aplicação.

### Ferramentas
- Node.js versão >= 10 e npm ou yarn versão >= 1.22.
- GraphQL (^15.5.0) e Apolo Server (^2.21.0)
- MySQL

Configure suas variáveis em env/dev.env

### DB MySQL
```
sudo docker-compose up
```

### Levantar servidor local
```
yarn run dev
open http://localhost:4000/
``` 

![graphql-apollo-server](graphql-server-screenshot.png)
![graphql-apollo-server-query-input](graphql-server-query-input.png)
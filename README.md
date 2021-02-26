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

## API - GraphQL

#### Autenticar Usuario
```
# Write your query or mutation here
mutation autenticarUsuario($input: AutenticarInput){
  autenticarUsuario(input: $input) {
    token
  }
}

{
  "input":{
    "cpf": "37192386871",    
    "senha": "letsgo"    
  }
}
```

#### Novo Usuario Acesso
```
# Write your query or mutation here
mutation novoUsuarioAcesso($input: UsuarioInput) {
  novoUsuarioAcesso(input: $input) {
    cpf
    nome
    email
  }
}

{
  "input":{
    "cpf": "37192386871",
    "nome": "Mr Jhony Vidal",
    "senha": "letsgo",
    "email": "mrjhonyvidal@gmail.com"
  }
}
```

#### Autenticar Usuario
```
# Write your query or mutation here
mutation autenticarUsuario($input: AutenticarInput){
  autenticarUsuario(input: $input) {
    token
  }
}

{
  "input":{
    "cpf": "37192386871",    
    "senha": "letsgo"    
  }
}
```

#### Obtener Token Usuario e CPF como payload
```
query obtainUsuario($token: String!){
  obtainUsuario(token: $token) {
    cpf
  }
}

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIzNzE5MjM4Njg3MSIsImlhdCI6MTYxNDExNDM3OCwiZXhwIjoxNjE0MjAwNzc4fQ.tJVGQMa4g5MrnKPeqZ0cLeBGdcKD3_9OVkkBjIoQCoU"
}

```

### Deploy to Heroku
```
heroku
heroku login
heroku create --remote production
git push production main
```

```

```
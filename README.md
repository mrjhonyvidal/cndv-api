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
query obtenerUsuario($token: String!){
  obtenerUsuario(token: $token) {
    cpf
  }
}

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIzNzE5MjM4Njg3MSIsImlhdCI6MTYxNDExNDM3OCwiZXhwIjoxNjE0MjAwNzc4fQ.tJVGQMa4g5MrnKPeqZ0cLeBGdcKD3_9OVkkBjIoQCoU"
}

```

### Deploy backend to Heroku Server
One extra information about our server is that DB is not in Heroku stack, it only holds the Node.js/Express Server.
```
heroku
heroku login
heroku create --remote production
git push production main
```

```
query getCarteiraTipoVacinas {
  getCarteiraTipoVacinas{
    descricao
    pais
	}
}
```

```
query getCarteiraTipoVacinas {
  getCarteiraTipoVacinas{
    descricao
    pais
	}
}

query obtenerHistoricoVacinacao($cpf: String!){
  obtenerHistoricoVacinacao(cpf: $cpf){
       id
       cpf
       tipo_vacina_descricao
       dt_aplicacao        
       tipo_dose_descricao
       lote
       codigo
       nome_aplicador
       reg_profissional
       unidade_saude
  }
}

{
  "cpf":""
}

mutation atualizarHistoricoVacinacao($id: ID!, $cpf: String!, $input: HistoricoVacinacaoInput){
  atualizarHistoricoVacinacao(id: $id, cpf: $cpf, input: $input) {
  	id
    cpf
    tipo_vacina_descricao
    dt_aplicacao
    tipo_dose_descricao
    lote
    codigo
    nome_aplicador
    reg_profissional
    unidade_saude
    cidade
    uf
  }
}

{
  "id": "3",
  "cpf": "",
  "input": {
    "dt_aplicacao": "2020-07-19",
    "codigo": "84489399"  
  }
}

mutation eliminarHistoricoVacinacao($id: ID!, $cpf: String!) {
  eliminarHistoricoVacinacao(id: $id, cpf: $cpf)
}

{
  "id": "3",
  "cpf": ""
}



query obtainUsuario($token: String!){
  obtainUsuario(token: $token) {
    cpf
  }
}

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIzNzE5MjM4Njg3MSIsImlhdCI6MTYxNDExNDM3OCwiZXhwIjoxNjE0MjAwNzc4fQ.tJVGQMa4g5MrnKPeqZ0cLeBGdcKD3_9OVkkBjIoQCoU"
}



```
# MercadoLibre challenge: Backend
Created with NestJS Node.js framework and testing with Jest.

## Installation
```bash
$ yarn install
```

## Running the app
```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test
```bash
# unit tests
$ yarn test

# test coverage
$ yarn test:cov
```

## Enpoints
### /api/items?q=query
Return item list by query.
```http
GET http://localhost:5000/api/items?q=query
```

### /api/items/:id 
Return item detail by id.

```http
GET http://localhost:5000/api/items/:id 
```



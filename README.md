
# Reto Tecnico Backend 

Prueba técnica Indra con tecnologías e integración de API: NodeJS - Serveless - DynamoDB - Swapi.

## Scripts

Instalación de serverless.

```
npm install -g serverless
```

Instalar dependencias.

```
npm i
```

Ejecución de Serverless offline.

```
sls offline
```

Ejecución Dynamodb.

```
sls dynamodb start
```

Ejecución Dynamodb.

```
sls dynamodb migrate
```

Deploy Serverless.

```
sls deploy
```



## Documentación de EndPoints

Endpoints del proyecto para su uso.

### People

```
GET: Se obtienen todos los personajes de la pelicula Star Wars.
https://jwwveyvwxc.execute-api.us-east-1.amazonaws.com/api/people
```


```
POST: Se agrega nuevas personas al mundo de Star Wars en DynamoDB.
https://jwwveyvwxc.execute-api.us-east-1.amazonaws.com/api/people
```

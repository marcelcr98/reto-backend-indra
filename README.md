
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
https://ezt85xei27.execute-api.us-east-1.amazonaws.com/api/people
```


```
POST: Se agrega nuevas personas al mundo de Star Wars en DynamoDB.
https://ezt85xei27.execute-api.us-east-1.amazonaws.com/api/people

Body:
{
    "Id":"1",
    "nombre":"Obi Wan",
    "estatura": "180",
    "masa": "77",
    "color_pelo": "blond",
    "color_piel": "fair",
    "color_ojos": "brown",
    "anio_de_nacimiento": "21BBY",
    "genero": "male",
    "planeta_natal": "https://swapi.dev/api/planets/1/",
    "peliculas": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "vehiculos": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
    ],
    "naves": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
    ],
    "creado": "2014-12-09T13:50:51.644000Z",
    "editado": "2014-12-20T21:17:56.891000Z",
    "vinculo": "https://swapi.dev/api/people/1/"
}
```

const { PeopleModal } = require("../models/peopleModals");
const { PeopleSwapiModal } = require("../models/peopleSwapiModals");
const swapi = require("swapi-node");

async function getAllPeoplesService(eventLambda) {
  try {
    const { Items } = await PeopleModal.getAll({});
    const RESPONSE_PEOPLE_SWAPI_ALL = await PeopleSwapiModal.getAll({});
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "¡Se han obtenido todos los personajes de Star Wars!",
        DynamoDB: Items,
        Swapi: RESPONSE_PEOPLE_SWAPI_ALL,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode ?? 500,
      body: JSON.stringify({
        message: "¡Error al obtener los personajes de Star Wars!",
      }),
    };
  }
}



async function createPeopleService(eventLambda) {
  try {
    const BODY = JSON.parse(eventLambda.body);
    if (typeof BODY.Id !== "string" || BODY.Id.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Error: "Id" de dato erroneo',
        }),
      };
    }

    if (typeof BODY.nombre !== "string" || BODY.nombre.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Error: "nombre" de dato erroneo',
        }),
      };
    }

    await PeopleModal.create({
      body: BODY,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "¡Personaje de Star Wars registrado!",
        Id: BODY.Id,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode ?? 500,
      body: JSON.stringify({
        message: "¡Error al agregar personaje de Star Wars!",
      }),
    };
  }
}


module.exports = {
  getAllPeoplesService,
  createPeopleService
};
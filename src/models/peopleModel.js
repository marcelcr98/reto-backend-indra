const {ScanCommand,GetCommand,PutCommand} = require("@aws-sdk/lib-dynamodb");
const { DB_CONNECT_DYNAMO_DB_CLIENT } = require("../database/config");
const [DYNAMO_DB_CLIENT, DESTROY_DYNAMO] = DB_CONNECT_DYNAMO_DB_CLIENT();
const TableName = process.env.PEOPLE_TABLE;
  
  class PeopleModal {
    constructor(entity) {
      this.Id = entity.Id;
      this.nombre = entity.nombre;
      this.estatura = entity.estatura;
      this.masa = entity.masa;
      this.color_pelo = entity.color_pelo;
      this.color_piel = entity.color_piel;
      this.color_ojos = entity.color_ojos;
      this.anio_nacimiento = entity.anio_nacimiento;
      this.genero = entity.genero;
      this.planeta_natal = entity.planeta_natal;
      this.peliculas = entity.peliculas;
      this.vehiculos = entity.vehiculos;
      this.naves = entity.naves;
      this.creado = entity.creado;
      this.editado = entity.editado;
      this.vinculo = entity.vinculo;
    }
  
    static async getAll({}) {
      try {
        const params = {
          TableName: TableName,
          KeyConditionExpression: "",
        };
        return DYNAMO_DB_CLIENT.send(new ScanCommand(params));
      } catch (error) {
        throw error;
      }
    }
  
 
  
    static async create({ body }) {
      try {
        const BODY_PEOPLE = new PeopleModal(body);
        const params = {
          TableName: process.env.PEOPLE_TABLE,
          Item: {
            Id: BODY_PEOPLE?.Id,
            nombre: BODY_PEOPLE?.nombre,
            estatura: BODY_PEOPLE?.estatura,
            masa: BODY_PEOPLE?.masa,
            color_pelo: BODY_PEOPLE?.color_pelo,
            color_piel: BODY_PEOPLE?.color_piel,
            color_ojos: BODY_PEOPLE?.color_ojos,
            anio_nacimiento: BODY_PEOPLE?.anio_nacimiento,
            genero: BODY_PEOPLE?.genero,
            planeta_natal: BODY_PEOPLE?.planeta_natal,
            peliculas: BODY_PEOPLE?.peliculas,
            vehiculos: BODY_PEOPLE?.vehiculos,
            naves: BODY_PEOPLE?.naves,
            creado: BODY_PEOPLE?.creado,
            editado: BODY_PEOPLE?.editado,
            vinculo: BODY_PEOPLE?.vinculo,
          },
        };
  
        return DYNAMO_DB_CLIENT.send(new PutCommand(params));
      } catch (error) {
        throw error;
      }
    }
  

  }
  
  module.exports = { PeopleModal };
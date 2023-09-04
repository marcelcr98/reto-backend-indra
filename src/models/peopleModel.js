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
  
    static async getById({ Id }) {
      try {
        const params = {
          TableName: TableName,
          Key: {
            Id: Id,
          },
        };
        return DYNAMO_DB_CLIENT.send(new GetCommand(params));
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
  
    static async updateById({ Id, body }) {
      const BODY_PEOPLE_CURRENT_DATA = await this.getById({ Id });
      console.log(BODY_PEOPLE_CURRENT_DATA);
      const BODY_PEOPLE_NEW_DATA = new PeopleModal(body);
      try {
        const params = {
          TableName: TableName,
          Key: {
            Id: Id,
          },
          UpdateExpression:
            "set nombre = :nombre, estatura = :estatura, masa = :masa, color_pelo = :color_pelo, color_piel = :color_piel, color_ojos = :color_ojos, anio_nacimiento = :anio_nacimiento, genero = :genero, planeta_natal = :planeta_natal, peliculas = :peliculas, vehiculos = :vehiculos, naves = :naves, creado = :creado, editado = :editado, vinculo = :vinculo",
          ExpressionAttributeValues: {
            ":nombre":
              BODY_PEOPLE_NEW_DATA?.nombre ??
              BODY_PEOPLE_CURRENT_DATA.Item?.nombre,
            ":estatura":
              BODY_PEOPLE_NEW_DATA?.estatura ??
              BODY_PEOPLE_CURRENT_DATA.Item?.estatura,
            ":masa":
              BODY_PEOPLE_NEW_DATA?.masa ?? BODY_PEOPLE_CURRENT_DATA.Item?.masa,
            ":color_pelo":
              BODY_PEOPLE_NEW_DATA?.color_pelo ??
              BODY_PEOPLE_CURRENT_DATA.Item?.color_pelo,
            ":color_piel":
              BODY_PEOPLE_NEW_DATA?.color_piel ??
              BODY_PEOPLE_CURRENT_DATA.Item?.color_piel,
            ":color_ojos":
              BODY_PEOPLE_NEW_DATA?.color_ojos ??
              BODY_PEOPLE_CURRENT_DATA.Item?.color_ojos,
            ":anio_nacimiento":
              BODY_PEOPLE_NEW_DATA?.anio_nacimiento ??
              BODY_PEOPLE_CURRENT_DATA.Item?.anio_nacimiento,
            ":genero":
              BODY_PEOPLE_NEW_DATA?.genero ??
              BODY_PEOPLE_CURRENT_DATA.Item?.genero,
            ":planeta_natal":
              BODY_PEOPLE_NEW_DATA?.planeta_natal ??
              BODY_PEOPLE_CURRENT_DATA.Item?.planeta_natal,
            ":peliculas":
              BODY_PEOPLE_NEW_DATA?.peliculas ??
              BODY_PEOPLE_CURRENT_DATA.Item?.peliculas,
            ":vehiculos":
              BODY_PEOPLE_NEW_DATA?.vehiculos ??
              BODY_PEOPLE_CURRENT_DATA.Item?.vehiculos,
            ":naves":
              BODY_PEOPLE_NEW_DATA?.naves ??
              BODY_PEOPLE_CURRENT_DATA.Item?.naves,
            ":creado":
              BODY_PEOPLE_NEW_DATA?.creado ??
              BODY_PEOPLE_CURRENT_DATA.Item?.creado,
            ":editado":
              BODY_PEOPLE_NEW_DATA?.editado ??
              BODY_PEOPLE_CURRENT_DATA.Item?.editado,
            ":vinculo":
              BODY_PEOPLE_NEW_DATA?.vinculo ??
              BODY_PEOPLE_CURRENT_DATA.Item?.vinculo,
          },
          ReturnValues: "ALL_NEW",
        };
        return DYNAMO_DB_CLIENT.send(new UpdateCommand(params));
      } catch (error) {
        throw error;
      }
    }
  
    static async deleteById({ Id }) {
      try {
        const params = {
          TableName: TableName,
          Key: {
            Id: Id,
          },
        };
        return DYNAMO_DB_CLIENT.send(new DeleteCommand(params));
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = { PeopleModal };
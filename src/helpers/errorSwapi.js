class CustomErrorSwapiApi extends Error {
    constructor(statusCode = "500", ...params) {
      super(...params);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CustomErrorSwapiApi);
      }
  
      this.name = "Ha ocurrido un error en la API";
      this.statusCode = statusCode;
      this.date = new Date();
    }
  }
  
  module.exports = { CustomErrorSwapiApi };
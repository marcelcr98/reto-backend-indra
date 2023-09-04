const people_serv = require("../services/peopleService");

module.exports = {
  async getPeople(eventLambda) {
      return people_serv.getAllPeopleService(eventLambda);
    
  },
  async createPeople(eventLambda) {
    return people_serv.createPeopleService(eventLambda);
  }
};
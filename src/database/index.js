import  Sequelize  from "sequelize";

import config from '../config/database';


// import Model from '../models/xxx'

const models = [];

class Database  {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init(){
    models.forEach((model) => model.init(this.connection));
  }

  associate() {
    models.forEach((model) =>{
      if(model.associate) {
        model.associate
      }
    })
  }
}


export default new Database();


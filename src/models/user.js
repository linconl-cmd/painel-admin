import { Sequelize } from "sequelize";
import { password } from "../config/database";


class User extends Model {
  static init(sequelize) {
    super.init({
      initials: {
        type: Sequelize.VIRTUAL,
        get() {
          const match =  this.name.split(" ");

          if(match.length > 1){
            return `${match[0][0]}`
          }
        }
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      role: Sequelize.ENUM('admin', 'manager', 'developer'),
      status: Sequelize.('active', 'archived'),
    },{
      sequelize,
      name: {
        singular: 'user',
        plural: 'users',
      },
    });
  }
}
import { Sequelize } from "sequelize";
import contactModel from "./contact.js";
const sequelize = new Sequelize({
    username: 'sevda',
    password: 'admin',
    database: 'postgress',
    dialect: 'postgres',
});
const Contact = contactModel(sequelize);
export { sequelize };
export { Contact };
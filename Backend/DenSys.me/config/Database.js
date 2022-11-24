import {Sequelize} from "sequelize";
 
const db = new Sequelize('exampleDB','example-user','testpassword',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
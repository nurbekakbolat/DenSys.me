import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Patient = db.define('Patient',{
    iin: {
        type: DataTypes.CHAR(12),
        charset: 'latin1',
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    bloodGroup: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    emergencyContact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    maritalStatus: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registrationDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
    
},{
    freezeTableName:true
});
 
export default Patient;
 
(async()=>{
    await db.sync();
})();
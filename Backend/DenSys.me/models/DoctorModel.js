import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Doctor = db.define('Doctor',{
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
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departmentID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specializationDetailsID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    experienceInYears: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priceOfAppointment: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    scheduleDetails: {
        type: DataTypes.STRING,
        allowNull: false
    },
    degree: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    homepageURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
},{
    freezeTableName:true
});
 
export default Doctor;
 
(async()=>{
    await db.sync();
})();
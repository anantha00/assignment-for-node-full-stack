const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    id:{
        type: DataTypes.Integer,
        autoIncrement: true,
        primaryKey: true  
    },
    first_name:{
        type: DataTypes.STRING
    },
    last_name:{
        type: DataTypes.STRING
    },
    user_name:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    phone_number:{
        type: DataTypes.Integer,
    },
    gender:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    confirm_password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

module.export = Users;
const { DataTypes, Sequelize, sequelize  } = require('../database');

const Publicacion = sequelize.define('Publicacion', {
    
 id:  {
    type: DataTypes. INTEGER,   
    
    primaryKey: true,
    autoIncrement: true,

    
},
titulo: {
    type: DataTypes.STRING,
    allowNull: false
},
descripcion: {
    type: DataTypes.STRING,
    allowNull: false    
}  
    
}); 



module.exports = Publicacion;



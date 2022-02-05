const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type:DataTypes.UUID,
      allowNull:false,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type:DataTypes.STRING,
    },
    life:{
      type:DataTypes.STRING,
    },
    force:{
      type:DataTypes.STRING,
    },
    defending:{
      type:DataTypes.STRING,
    },
    speed:{
      type:DataTypes.STRING,
    },
    height:{
      type:DataTypes.STRING,
    },
    weight:{
      type:DataTypes.STRING,
    }
 
  });
};

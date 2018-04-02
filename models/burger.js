module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: [1]
    	}
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	allowNull: false
    }
  });

  burger.associate = function(models) {
    burger.belongsTo(models.topping, {
    foreignKey: {
      allowNull: true
      }
    });
  };
  return burger;
}

module.exports = function(sequelize, DataTypes) {
  var topping = sequelize.define("topping", {
    topping: {
    	type: DataTypes.BOOLEAN
    	}
  });

  topping.associate = function(models) {
    topping.hasMany(models.burger, {
      onDelete: "cascade"
    });
  };

  return topping;
}

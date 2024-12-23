module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Products.associate = (models) => {
    Products.belongsTo(models.Suppliers, {
      foreignKey: "supplierId",
      as: "supplier",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  return Products;
};

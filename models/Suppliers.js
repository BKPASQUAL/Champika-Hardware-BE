module.exports = (sequelize, DataTypes) => {
    const Suppliers = sequelize.define("Suppliers", {
        supplierName: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true, 
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false, 
            // validate: {
            //     isNumeric: true, 
            //     len: [10, 15], 
            // },
        },
        representativeName: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        representativeContact: {
            type: DataTypes.STRING,
            allowNull: false, 
            // validate: {
            //     isNumeric: true, 
            //     len: [10, 15], 
            // },
        },
    });

    return Suppliers;
};

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.ENUM('Food', 'Toy', 'Upholstery'),
            allowNull: false
        },
        animal: {
            type: DataTypes.ENUM('Dog', 'Cat'),
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }


    });

    return Product;


}
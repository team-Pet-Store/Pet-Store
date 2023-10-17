const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "petsdb",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user.model")(sequelize, DataTypes);
db.Product = require("./product.model")(sequelize, DataTypes);
db.Cart = require("./cart.model")(sequelize, DataTypes);

db.User.belongsToMany(db.Product, { through: db.Cart, foreignKey: "user_id" });
db.Product.belongsToMany(db.User, {
  through: db.Cart,
  foreignKey: "product_id",
});

const connect = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// db.sequelize.sync({ force: true });

connect();

module.exports = db;

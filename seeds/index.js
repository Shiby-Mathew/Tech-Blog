const sequelize = require("../config/connection");
const { Post, User } = require("../models");

const postSeedData = require("./post-seeds.json");
const userSeedData = require("./user-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

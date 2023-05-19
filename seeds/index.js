const sequelize = require("../config/connection");
const { Blog, User } = require("../models");

const blogSeedData = require("./blog-seeds.json");
const userSeedData = require("./user-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blog.bulkCreate(blogSeedData, {
    individualHooks: true,
    returning: true,
  });
  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

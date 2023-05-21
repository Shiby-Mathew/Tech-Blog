// TECH BLOG - CHECKED, SAME AS REFERENCE
const path = require("path");
const express = require("express");
//const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

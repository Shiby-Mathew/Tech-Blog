const router = require("express").Router();

const loginRoutes = require("./loginRoute.js");
const postRoutes = require("./postRoute.js");
const commentRoutes = require("./commentRoute.js");

router.use("/login", loginRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;

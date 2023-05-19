const router = require("express").Router();

const userRoutes = require("./userRoute.js");
const postRoutes = require("./postRoute.js");
const commentRoutes = require("./commentRoute.js");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;

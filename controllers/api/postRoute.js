const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

// GET all drivers
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      // include: [{ model: User }],
    });
    res.status(200).json(postData);
    console.log(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

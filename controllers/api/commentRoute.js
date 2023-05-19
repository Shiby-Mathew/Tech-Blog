const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

// GET all drivers
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

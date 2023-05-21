const router = require("express").Router();
const { Post, User, Comment } = require("../models/");

// // get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  //verification
  //if the user logged in direct then to homepage
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  //verification
  //if the user logged in direct then to homepage
  res.render("dashboard");
});

module.exports = router;

const router = require("express").Router();
const { Post, User } = require("../models/");
const withAuth = require("../utils/auth");

// // get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    //console.log(posts);
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
    //req.session.loggedIn
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard");

    return;
  }
  //res.redirect("/");
  res.render("login");
});

module.exports = router;

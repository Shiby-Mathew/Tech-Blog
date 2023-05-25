const router = require("express").Router();
const { Post } = require("../../models");

// Add a new post
router.post("/", async (req, res) => {
  try {
    const blogPostData = await Post.create({
      post_title: req.body.blogTitle,
      post_content: req.body.blogPost,
      user_id: req.body.user_id,
    });
    // console.log(blogPostData);
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(blogPostData);
    });

    // res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

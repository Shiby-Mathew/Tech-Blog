const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//user has many Post(user_id)
User.hasMany(Post, {
  foreignKey: "user_id",
});

//user has many comments(user_id)
User.hasMany(Comment, {
  foreignKey: "user_id",
});

//Post belongs to user(user_id)
Post.belongsTo(User, {
  foreignKey: "user_id",
});

//Post has many comments(post_id)
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

//comments belongs to post(post_id)
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

//comment belongs to user(user_id)
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Comment };

const forumController = require("./forum.controller");

module.exports = (api, opts) => {
  api.post("/createSection", forumController.createSection);
  api.post("/createPost", forumController.createPost);
  api.post("/createComment", forumController.createComment);
  api.put("/editComment/:commentId", forumController.editComment);
  api.put("/editPost/:postId", forumController.editPost);
  api.get("/listComments/post/:postId", forumController.listComments);
  api.get("/listPosts/section/:sectionId", forumController.listPosts);
};

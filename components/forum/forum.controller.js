const forumService = require("./services");
const { response } = require("../../helpers");

exports.createSection = async (req, res) => {
  const success = await forumService.createSection(req.body);
  if (success.error) {
    return response(res, 400, success.error);
  }
  return response(res, 201, success);
};

exports.createPost = async (req, res) => {
  const success = await forumService.createPost(req.body);
  if (success.error) {
    return response(res, 400, success.error);
  }
  return response(res, 201, success);
};

exports.createComment = async (req, res) => {
  const success = await forumService.createComment(req.body);
  if (success.error) {
    return response(res, 400, success.error);
  }
  return response(res, 201, success);
};

exports.editComment = async (req, res) => {
  const commentId = req.params.commentId;
  const success = await forumService.editComment(req.body, commentId);
  if (success.error) {
    return response(res, 400, success.error);
  }
  return response(res, 201, success);
};

exports.editPost = async (req, res) => {
  const postId = req.params.postId;
  const success = await forumService.editPost(req.body, postId);
  if (success.error) {
    return response(res, 400, success.error);
  }
  return response(res, 201, success);
};

exports.listComments = async (req, res) => {
  const postId = req.params.postId;
  const { page, perPage, sort } = req.query;
  const success = await forumService.listComments({
    postId,
    sort,
    page,
    perPage,
  });
  if (success.error) {
    return response(res, 400, success.error);
  }
  return response(res, 201, success);
};

exports.listPosts = async (req, res) => {
  const sectionId = req.params.sectionId;
  const { page, perPage, sort } = req.query;
  const success = await forumService.listPosts({
    sectionId,
    sort,
    page,
    perPage,
  });
  if (success.error) {
    return response(res, 400, success.error);
  }
  return response(res, 201, success);
};

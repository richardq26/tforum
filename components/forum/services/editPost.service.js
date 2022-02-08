const getConnection = require("../../../database");
module.exports = async (data, postId) => {
  try {
    const connection = await getConnection();
    const postRepository = connection.getRepository("Post");
    const post = await postRepository.findOne({ id: postId });
    if (!post) {
      return {
        error: {
          code: 404,
          message: "El post no existe",
        },
      };
    }

    return await postRepository.updateById(postId, data);
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};
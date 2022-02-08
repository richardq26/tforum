const getConnection = require("../../../database");
module.exports = async (data) => {
  try {
    const connection = await getConnection();
    const postRepository = connection.getRepository("Post");
    const commentRepository = connection.getRepository("Comment");

    const post = await postRepository.findOne({ id: data.postId });
    if (!post) {
      return {
        error: {
          code: 404,
          message: "El post no existe",
        },
      };
    }

    return await commentRepository.save(data);
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};
const getConnection = require("../../../database");
module.exports = async (data, commentId) => {
  try {
    const connection = await getConnection();
    const commentRepository = connection.getRepository("Comment");
    const comment = await commentRepository.findOne({ id: commentId });
    if (!comment) {
      return {
        error: {
          code: 404,
          message: "El comentario no existe",
        },
      };
    }

    return await commentRepository.updateById(commentId, data);
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};

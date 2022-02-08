const getConnection = require("../../../database");
module.exports = async ({
  page = 1,
  perPage = 50,
  sort = "DESC",
  postId,
}) => {
  try {
    const connection = await getConnection();
    const postRepository = connection.getRepository("Post");
    const post = await postRepository.findOne({id: postId});
    if (!post) {
        return {
            error: {
                code: 404,
                message: "El post no existe",
            },
        };
    }

    const commentRepository = connection.getRepository("Comment");
    let findLogic = {
      order: { created: sort },
    };
    if (postId) {
      findLogic.where = { postId };
    }
    if (page) {
      findLogic.skip = perPage * (page - 1);
      findLogic.take = perPage;
    }
    let [data, total] = await commentRepository.findAndCount(findLogic);
    let pages = Math.ceil(total / perPage);
    return {
        page,
        perPage,
        pages,
        data,
        total,
      };
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};

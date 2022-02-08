const getConnection = require("../../../database");
module.exports = async ({
  page = 1,
  perPage = 50,
  sort = "DESC",
  sectionId,
}) => {
  try {
    const connection = await getConnection();
    const sectionRepository = connection.getRepository("Section");
    const postRepository = connection.getRepository("Post");
    const section = await sectionRepository.findOne({id: sectionId});
    if (!section) {
        return {
            error: {
                code: 404,
                message: "La seccion no existe",
            },
        };
    }

    let findLogic = {
      order: { created: sort },
    };
    if (sectionId) {
      findLogic.where = { sectionId };
    }
    if (page) {
      findLogic.skip = perPage * (page - 1);
      findLogic.take = perPage;
    }
    let [data, total] = await postRepository.findAndCount(findLogic);
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

const getConnection = require("../../../database");
module.exports = async (data) => {
  try {
    const connection = await getConnection();
    const sectionRepository = connection.getRepository("Section");
    const postRepository = connection.getRepository("Post");

    const section = await sectionRepository.findOne({ id: data.sectionId });
    if (!section) {
      return {
        error: {
          code: 404,
          message: "La categoría no existe",
        },
      };
    }

    return await postRepository.save(data);
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};

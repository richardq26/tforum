const getConnection = require("../../../database");
module.exports = async (data) => {
  try {
    const connection = await getConnection();
    const sectionRepository = connection.getRepository("Section");
    const section = await sectionRepository.findOne({ name: data.name });
    if (section) {
      return {
        error: {
          code: 404,
          message: "Ya existe una sección con ese nombre",
        },
      };
    }
    
    return await sectionRepository.save(data);
  } catch (error) {
    return {
      error: {
        code: 400,
        message: error.message,
      },
    };
  }
};

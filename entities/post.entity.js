module.exports = {
  name: "Post",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      nullable: true,
    },
    description: {
      type: "varchar",
      nullable: true,
    },
    content: {
      type: "longtext",
      nullable: true,
    },
    sectionId: {
      type: "int",
    },
    created: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updated: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    section: {
      target: "Section",
      type: "many-to-one",
    },
  },
};

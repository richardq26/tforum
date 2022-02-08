module.exports = {
  name: "Comment",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    content: {
      type: "longtext",
      nullable: true,
    },
    postId: {
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
      target: "Post",
      type: "many-to-one",
    },
  },
};

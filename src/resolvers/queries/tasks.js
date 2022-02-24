module.exports = async (_, {}, {models}) => {
  return await models.Task.find();
};

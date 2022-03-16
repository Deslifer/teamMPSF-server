const {ApolloError} = require('apollo-server');

module.exports = async (_, {input}, {models}) => {
  try {
    const newTask = await models.Task.create(input);
    return newTask;
  } catch (e) {
    throw new ApolloError(e);
  }
};

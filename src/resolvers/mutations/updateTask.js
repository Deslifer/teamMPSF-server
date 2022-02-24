const {ApolloError} = require('apollo-server');

module.exports = async (_, {id, input}, {models}) => {
  try {
    const taskToUpdate = await models.Task.findOne({_id: id});

    if (!taskToUpdate) {
      throw new ApolloError(`Could not find task with id: '${id}'.`, 400);
    }

    Object.keys(input).forEach(value => {
      taskToUpdate[value] = input[value];
    });

    const updatedTask = await taskToUpdate.save();

    return updatedTask;
  } catch (e) {
    throw new ApolloError(e);
  }
};

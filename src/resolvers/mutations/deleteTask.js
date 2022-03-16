const {ApolloError} = require('apollo-server');

module.exports = async (_, {input}, {models}) => {
  const deleteTask = await models.Task.deleteOne({_id: input.id});

  if (deleteTask.deletedCount) {
    return {id: input.id};
  } else {
    throw new ApolloError('Failed to delete address.');
  }
};

const {ApolloError} = require('apollo-server');

module.exports = async (_, {id}, {models}) => {
  const deleteTask = await models.Task.deleteOne({_id: id});

  if (deleteTask.deletedCount) {
    return {id: id};
  } else {
    throw new ApolloError('Failed to delete address.');
  }
};

const mutations = require('./mutations');
const queries = require('./queries');
const {GraphQLScalarType, Kind} = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date scalar type',

  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  },
  serialize(value) {
    const date = new Date(value);

    return date;
  },
});

module.exports = {
  Date: dateScalar,
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
  },
};

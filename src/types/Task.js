const {gql} = require('apollo-server');

module.exports = gql`
  type Task {
    id: String!
    title: String!
    mail: String!
    description: String!
  }
  input CreateTaskInput {
    title: String!
    mail: String!
    description: String!
  }
  input UpdateTaskInput {
    id: String!
    title: String
    mail: String
    description: String
  }
  input DeleteTaskInput {
    id: String!
  }
  type DeletePayload {
    id: String!
  }
  type Query {
    tasks: [Task]
  }
  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(input: UpdateTaskInput!): Task!
    deleteTask(input: DeleteTaskInput!): DeletePayload!
  }
`;

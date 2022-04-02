const {gql} = require('apollo-server');

module.exports = gql`
  scalar Date
  type Task {
    id: String!
    title: String!
    mail: String!
    description: String!
    date: Date
  }
  input CreateTaskInput {
    title: String!
    mail: String!
    description: String!
    date: Date
  }
  input UpdateTaskInput {
    id: String!
    title: String
    mail: String
    description: String
    date: Date
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

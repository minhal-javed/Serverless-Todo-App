const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    todos: [Todo]!
  }
  type Todo{
      id:ID!
      text:String!
      done:Boolean!
  }
  type Mutation{
      addTodo(text:String!):Todo
      updateTodoDone(id:ID!):Todo

  }
`;

const todos={};
let todoIndex=0;

const resolvers = {
  Query: {
    todos: () => {
      return Object.values(todos);
    }
  },
  Mutation:{
      addTodo:(_,{text})=>{
          todoIndex++;
        const id=`key-${todoIndex}`
        todos[id]={id,text,done:false}
      },
      updateTodoDone:(_,{id})=>{}
  }

};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

exports.handler = server.createHandler();
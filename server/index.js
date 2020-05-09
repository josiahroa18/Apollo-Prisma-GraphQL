const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        message: String!
    }
`

const resolvers = {
    Query: {
        message: () => 'Hello World!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const port = process.env.PORT || 5000;

server.listen(port).then(({url}) => {
    console.log(`Server is running at ${url}`);
})


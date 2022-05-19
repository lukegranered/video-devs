const express = require("express");
// import ApolloServer
const { ApolloServer } = require("apollo-server-express");

const { authMiddleware } = require("./utils/auth");

const path = require("path");

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3010;

const app = express();
// create a new Apollo server and pass in our schema data
const startServer = async () => {
  // Creating a new Apollo server and passing in schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  // Starting the Apollo server
  await server.start();

  // Integrating the Apollo server with the Express app as middleware
  server.applyMiddleware({ app });

  // Logging where the GQL API can be tested
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initializing the Apollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
// for production only - Not development
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// connection to the DB, then starting the server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

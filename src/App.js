import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<SigninPage />} exact />
          <Route path="/signup" element={<SignupPage />} exact />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

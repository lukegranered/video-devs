import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Feed from "./pages/home/Home.jsx"

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
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
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="feed" element={<Feed />} />
          <Route path="/" element={<Home />}  />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

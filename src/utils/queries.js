import { gql } from "@apollo/client";

// query all posts check if need it
export const QUERY_ALL_POST = gql`
  query {
    posts {
      _id
      username
      postText
      commentCount
      comments {
        commentBody
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      username
      postText
      commentCount
      comments {
        commentBody
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $_id) {
      username
      postText
      commentCount
      comments {
        commentBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      name
      email

      post {
        postText
        createdAt
      }
      contacts {
        username
      }
      contactsCount
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      name
      email
      post {
        postText
        createdAt
      }
      contacts {
        username
      }
      contactsCount
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      contacts {
        username
      }
    }
  }
`;

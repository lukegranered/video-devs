import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContact($contactId: ID!) {
    addContact(contactId: $contactId) {
      _id
      username
      contactsCount
      contacts {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      username
      commentCount
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation  addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentCount
      comments  {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

//const faker = require('faker');

const db = require("../config/connection");
const { Post, User } = require("../models");
const { userData, postData } = require("../seeders/data");

db.once("open", async () => {
  await Post.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userRecord = [];

  for (let i = 0; i < userData.length; i += 1) {
    const username = userData[i].username;
    const email = userData[i].email;
    const password = userData[i].password;
    const name = userData[i].name;
    const lastname = userData[i].lastname;

    userRecord.push({ username, email, password, name, lastname });
  }

  const createdUsers = await User.collection.insertMany(userRecord);

  console.log("User and Post added!!! GOOD JOB!!");
  process.exit(0);
});

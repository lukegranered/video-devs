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
    //need create by one because for  bcryt when loggin didnt works
    userRecord.push({ username, email, password, name, lastname });
    const user = await User.create(userRecord);
    userRecord.length = 0;
  }

  // const createdUsers = await User.collection.insertMany(userRecord);

  // create post
  let createdPost = [];

  for (let i = 0; i < postData.length; i += 1) {
    const postText = postData[i].postText;
    const username = postData[i].username;

    const userFind = await User.findOne({ username }).select("-__v -password");
    //console.log(userFind.username, userFind.id);
    const createdPost = await Post.create({ postText, username });
    const updatedUser = await User.updateOne(
      { _id: userFind.id },
      { $push: { post: createdPost._id } }
    );
  }

  console.log("User and Post added!!! GOOD JOB!!");
  process.exit(0);
});
//

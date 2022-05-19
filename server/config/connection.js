mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/video-devs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
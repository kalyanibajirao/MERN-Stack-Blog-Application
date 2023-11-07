import mongoose from "mongoose";

const postScheama = mongoose.Schema({
  title: {
    type: String,
    requred: true,
    unique: true,
  },
  discription: {
    type: String,
    requred: true,
  },
  picture: {
    type: String,
    requred: true,
  },
  username: {
    type: String,
    requred: true,
  },
  categories: {
    type: String,
    requred: true,
  },
  createDate: {
    type: Date,
  },
});

const post = mongoose.model('post', postScheama);

export default post;
